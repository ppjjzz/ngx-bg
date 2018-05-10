import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnsConfig } from './interface';
import { COLUMS_CONFIG_LIST } from '../../store/google-ad-list.store';
import { ColumnConfig } from '../table/interface';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'bg-custom-colum',
  templateUrl: './custom-colum.component.html',
  styleUrls: ['./custom-colum.component.less']
})
export class CustomColumComponent implements OnInit {
  @Input() currentColumnsTemp; // 目前应用的列模板
  @Output() bgConfirm = new EventEmitter();
  @Output() bgCancel = new EventEmitter();
  public isConfirmLoading = false;
  public columsConfigList: ColumnsConfig[] = JSON.parse(JSON.stringify(COLUMS_CONFIG_LIST));
  public personalColums = null; // 个人已保存的应用模板
  public personalColumsList = []; // 个人已保存的应用模板列表
  public panelOpenState = false;
  public selectedColumns: ColumnConfig[] = []; // 已选择的列
  public filterKeyWords = ''; // 搜索列关键字高亮
  public filterRegExp: RegExp;
  public saveColumns = false; // 保存列设置
  public templateName = ''; // 待保存的模板名称
  constructor(private nzMessageService: NzMessageService, private nzModalService: NzModalService) { }

  ngOnInit() {
    this.initCurrentColumnsTemp();
  }
  initCurrentColumnsTemp() {
    const currentColumnsTemp = this.currentColumnsTemp.map(x => x.fieldName);
    for (const columns of this.columsConfigList) {
      for (const column of columns.colums) {
        if (currentColumnsTemp.includes(column.fieldName)) {
          column.checked = true;
          this.selectedColumns[currentColumnsTemp.indexOf(column.fieldName)] = column;
        }
      }
    }
    this.updateAllCheckedStatus();
  }
  updateAllCheckedStatus() {
    for (const columns of this.columsConfigList) {
      if (columns.colums.every(({checked = false}) => checked === false)) {
        columns.checked = false;
        columns.indeterminate = false;
      } else if (columns.colums.every(item => item.checked === true)) {
        columns.checked = true;
        columns.indeterminate = false;
      } else {
        columns.indeterminate = true;
      }
    }
  }
  handleOk() {
    if (this.saveColumns) {
      if (!this.templateName) {
        this.nzMessageService.warning('请输入模板名称');
        return;
      } else if (this.personalColumsList.some(x => {
        return x.templateName === this.templateName;
      })) {
        this.nzModalService.confirm({
          nzContent: '该名称已存在，是否进行替换？',
          nzOnOk: () => {
            this.bgConfirm.emit({
              templateName: this.templateName,
              columns: this.selectedColumns
            });
          }
        });
      } else {
        this.bgConfirm.emit({
          templateName: this.templateName,
          columns: this.selectedColumns
        });
      }
    } else {
      this.bgConfirm.emit({
        columns: this.selectedColumns
      });
    }
  }
  handleCancel() {
    this.bgCancel.emit();
  }
  updateAllChecked(columsConfig: ColumnsConfig) {
    columsConfig.indeterminate = false;
    if (columsConfig.checked) {
      columsConfig.colums.forEach(item => {
        item.checked = true;
        if (!this.selectedColumns.includes(item)) {
          this.selectedColumns.push(item);
        }
      });
    } else {
      columsConfig.colums.forEach(item => {
        item.checked = false;
        if (this.selectedColumns.includes(item)) {
          this.selectedColumns.splice(this.selectedColumns.indexOf(item), 1);
        }
      });
    }
  }
  updateSingleChecked(columConfig: ColumnConfig, columsConfig: ColumnsConfig) {
    if (columsConfig.colums.every(({checked = false}) => checked === false)) {
      columsConfig.checked = false;
      columsConfig.indeterminate = false;
    } else if (columsConfig.colums.every(item => item.checked === true)) {
      columsConfig.checked = true;
      columsConfig.indeterminate = false;
    } else {
      columsConfig.indeterminate = true;
    }
    if (columConfig.checked) {
      this.selectedColumns.push(columConfig);
    } else {
      this.selectedColumns.splice(this.selectedColumns.indexOf(columConfig), 1);
    }
  }
  delSelect(e: MouseEvent, columConfig: ColumnConfig) {
    columConfig.checked = false;
    this.selectedColumns.splice(this.selectedColumns.indexOf(columConfig), 1);
    this.updateAllCheckedStatus();
    e.stopPropagation();
  }
  filterKeyWordsChange(keyWords: string) {
    if (keyWords.indexOf('(') > -1) {
      keyWords = keyWords.replace(/\(/g, '\\(');
    } else if (keyWords.indexOf(')') > -1) {
      keyWords = keyWords.replace(/\)/g, '.*\\)');
    }
    this.filterRegExp = new RegExp(keyWords, 'i');
  }
}

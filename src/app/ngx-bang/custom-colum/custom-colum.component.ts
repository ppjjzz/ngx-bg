import { Component, OnInit, Input } from '@angular/core';
import { ColumsConfig } from './interface';
import { COLUMS_CONFIG_LIST } from '../../store/google-ad-list.store';
import { ColumConfig } from '../table/interface';

@Component({
  selector: 'bg-custom-colum',
  templateUrl: './custom-colum.component.html',
  styleUrls: ['./custom-colum.component.less']
})
export class CustomColumComponent implements OnInit {
  @Input() currentColumnsTemp; // 目前应用的列模板
  public isConfirmLoading = false;
  public columsConfigList: ColumsConfig[] = JSON.parse(JSON.stringify(COLUMS_CONFIG_LIST));
  public personalColums = null; // 个人已保存的应用模板
  public personalColumsList = []; // 个人已保存的应用模板列表
  public panelOpenState = false;
  public selectedColums: ColumConfig[] = []; // 已选择的列
  public filterKeyWords = ''; // 搜索列关键字高亮
  public filterRegExp: RegExp;
  public saveColumns = false; // 保存列设置
  public templateName = ''; // 待保存的模板名称
  constructor() { }

  ngOnInit() {
  }
  handleOk() {

  }
  handleCancel() {

  }
  updateAllChecked(columsConfig: ColumsConfig) {
    columsConfig.indeterminate = false;
    if (columsConfig.checked) {
      columsConfig.colums.forEach(item => {
        item.checked = true;
        if (!this.selectedColums.includes(item)) {
          this.selectedColums.push(item);
        }
      });
    } else {
      columsConfig.colums.forEach(item => {
        item.checked = false;
        if (this.selectedColums.includes(item)) {
          this.selectedColums.splice(this.selectedColums.indexOf(item), 1);
        }
      });
    }
  }
  updateSingleChecked(columConfig: ColumConfig, columsConfig: ColumsConfig) {
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
      this.selectedColums.push(columConfig);
    } else {
      this.selectedColums.splice(this.selectedColums.indexOf(columConfig), 1);
    }
  }
  delSelect(e: MouseEvent, columConfig: ColumConfig) {
    columConfig.checked = false;
    this.selectedColums.splice(this.selectedColums.indexOf(columConfig), 1);
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

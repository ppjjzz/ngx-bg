import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ColumConfig } from './interface';
import { ColumResizeConfig } from './colum-resize-config';

@Component({
  selector: 'bg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {
  public isLoading = false; // 表格加载数据中
  public total_count: number; // 表格总条数
  public page_index = 1; // 表格当前页码
  public page_size = 20; // 表格每页条数
  public _allChecked = false; // 表格全选按钮状态
  public _indeterminate = false; // 全选按钮不定状态
  public scrollTop = 0; // 表格当前滚动的高度
  public scrollLeft = 0; // 表格当前滚动的横向距离
  public columResizeConfig = new ColumResizeConfig();
  @Input() tableConfig: ColumConfig[]; // 表格列配置数组
  @Input() tableData: any[]; // 表格数据
  @Input() tableBottomData: any = {}; // 表格底部固定栏数据
  constructor() { }

  ngOnInit() {
    document.addEventListener('mousemove', this.columnResizing.bind(this), false);
    document.addEventListener('mouseup', this.columnResizeEnd.bind(this), false);
  }
  scroll(e: Event) {
    this.scrollTop = (<Element>e.target).scrollTop;
    this.scrollLeft = (<Element>e.target).scrollLeft;
  }
  /**
   * 开始拖动列
   * @param e 鼠标事件
   */
  columnResizeStart(e: MouseEvent, configIndex: number) {
    document.body.classList.add('is-resizing');
    const resizeColumEl: HTMLElement = (<HTMLElement>e.target).parentElement;
    if (this.tableConfig[configIndex].fixed) {
      this.columResizeConfig.resizeStartX = resizeColumEl.offsetLeft + this.scrollLeft + resizeColumEl.offsetWidth - 3;
    } else {
      this.columResizeConfig.resizeStartX = resizeColumEl.offsetLeft + resizeColumEl.offsetWidth - 3;
    }
    this.columResizeConfig.resizeInitStartX = this.columResizeConfig.resizeStartX;
    this.columResizeConfig.moveStartX = e.clientX;
    this.columResizeConfig.configIndex = configIndex;
    this.columResizeConfig.resizeColumElInitWidth = resizeColumEl.offsetWidth;
    e.stopPropagation();
  }
  /**
   * 拖动中更新拖动参数
   * @param e 鼠标事件
   */
  columnResizing(e: MouseEvent) {
    if (!this.columResizeConfig.moveStartX) {
      return;
    }
    this.columResizeConfig.resizeStartX = this.columResizeConfig.resizeInitStartX + (e.clientX - this.columResizeConfig.moveStartX);
  }
  /**
   * 拖动结束更新列宽度
   * @param e 鼠标事件
   */
  columnResizeEnd(e: MouseEvent) {
    if (!this.columResizeConfig.moveStartX) {
      return;
    }
    const resizeMoveWidth = this.columResizeConfig.resizeColumElInitWidth + (e.clientX - this.columResizeConfig.moveStartX);
    this.tableConfig[this.columResizeConfig.configIndex].width = Math.max(resizeMoveWidth, 88);
    this.columResizeConfig.reset();
    document.body.classList.remove('is-resizing');
    e.stopPropagation();
  }
  /**
   * 检查是否全选
   */
  _checkAll(value) {
    if (value) {
      this.tableData.forEach(data => data.checked = true);
    } else {
      this.tableData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }
  /**
   * 更新表格某行选中状态
   */
  _refreshStatus() {
    const allChecked = this.tableData.every(value => value.checked === true);
    const allUnChecked = this.tableData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }
  /**
   * 点击列排序
   * @param configIndex 排序列的索引
   */
  sortColum(configIndex: number) {
    this.tableConfig.forEach((item, idx) => {
      if (idx !== configIndex) {
        item.sortType = null;
      }
    });
    const sortType = this.tableConfig[configIndex].sortType || null;
    switch (sortType) {
      case 'asc':
      this.tableConfig[configIndex].sortType = 'desc';
      break;
      case 'desc':
      this.tableConfig[configIndex].sortType = 'asc';
      break;
      default :
      this.tableConfig[configIndex].sortType = 'asc';
      break;
    }
    this.refreshData(true);
  }
  /**
   * 刷新表格数据
   * @param reset 是否重置页码
   */
  refreshData(reset = false) {
    this.isLoading = true;
    if (reset) {
      this.page_index = 1;
    }
  }
}

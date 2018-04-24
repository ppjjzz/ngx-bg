import { Component, OnInit, forwardRef, HostListener, Input, ViewEncapsulation, OnDestroy, ViewChild } from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CategorySelectComponent),
  multi: true
};

@Component({
  selector: 'bg-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.less'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None
})
export class CategorySelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() maxVisibleItemCount = 1; // 选择框默认显示最大多少个选中项tag
  @Input() disabled = false; // 是否禁用
  @Input() placeholder = ''; // 下拉框提示文字
  @Input() height = 32; // 控件高度
  @Input() width = 180; // 控件宽度
  @Input() list = []; // 数据源
  @ViewChild(CdkOverlayOrigin) cdkOverlayOrigin: CdkOverlayOrigin;
  @ViewChild(CdkConnectedOverlay) cdkConnectedOverlay: CdkConnectedOverlay;
  enterList = []; // 鼠标悬浮进的子项数组
  selectedItem: any[] = [];
  isOpen = false; // 是否显示下拉框
  isUnFold = false; // 是否展开所有已选项
  isDestroy = true;
  constructor() { }

  ngOnInit() {
    this.isDestroy = false;
  }
  ngOnDestroy() {
    this.isDestroy = true;
  }
  onTouchedCallback: () => void = () => {};
  onChangeCallback: (_: any) => void = () => {};
  // 鼠标移除组件时候隐藏下拉项
  @HostListener('blur')
  public onTouched(): void {
    this.onTouchedCallback();
  }
  /**
   * 将子项推入下一级菜单
   * @param item 鼠标悬浮项的对象
   * @param index 准备推入的下一级的索引
   */
  pushNextList(item, index, parent) {
    this.restEnterListStatus(parent);
    item.enter = true;
    this.enterList[index] = item;
    this.enterList.splice(index + 1);
  }
  hoverList(item, index, parent) {
    this.restEnterListStatus(parent);
    item.enter = true;
    this.enterList.splice(index);
  }
  restEnterListStatus(list) {
    list.forEach(element => {
      element.enter = false;
      if (element.children) {
        this.restEnterListStatus(element.children);
      }
    });
  }
  changeSelect(ev, item) {
    if (ev) {
      this.selectedItem.push(item);
    } else {
      this.selectedItem.splice(this.selectedItem.indexOf(item), 1);
    }
    this.onChangeCallback([...this.selectedItem]);
  }
  filterChecked(list: any[]) {
    return list.filter(x => x._checked);
  }
  resetChecked(list: any[]) {
    list.forEach(x => {
      x._checked = false;
      if (x['children'] && x['children'].length) {
        this.resetChecked(x['children']);
      }
    });
  }
  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 14;
    return isLongTag ? `${tag.slice(0, 14)}...` : tag;
  }
  removeTag(removedTag) {
    removedTag._checked = false;
    this.selectedItem = this.selectedItem.filter(tag => tag !== removedTag);
    this.onChangeCallback([...this.selectedItem]);
  }
  unFoldSelected(ev) {
    this.isUnFold = !this.isUnFold;
    ev.stopPropagation();
  }
  /**
   * Write a new value to the element.
   */
  public writeValue(value: any): void {
    if (value) {
      this.selectedItem = value;
      this.resetChecked(this.list);
    }
  }

  /**
   * Set the function to be called when the control receives a change event.
   *
   */
  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  /**
   * Set the function to be called when the control receives a touch event.
   *
   */
  public registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   */
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

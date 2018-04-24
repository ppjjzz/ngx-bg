import { Component, OnInit, ElementRef, Input, HostBinding, HostListener, forwardRef } from '@angular/core';
import { toBoolean } from '../utils/convert';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'bg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() bgWidth;
  public _placeholder = '';
  public _isFocus = false;
  public _inputValue = '';
  public _canClear = !!this._inputValue;
  public _originPlaceholder = ''; // 原始的placeholder
  private _size = 'default';
  private _disabled = false;
  private el: HTMLInputElement;
  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
  }

  onTouchedCallback: () => void = () => {};
  onChangeCallback: (_: any) => void = () => {};

  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
    this._originPlaceholder = value;
  }

  @Input()
  get nzSize(): string {
    return this._size;
  }

  set nzSize(value: string) {
    this._size = value;
  }


  focus() {
    this._placeholder = '';
    this._isFocus = true;
  }

  blur() {
    this.onTouchedCallback();
    this._placeholder = this._originPlaceholder;
    this._isFocus = false;
  }

  /**
   * Write a new value to the element.
   */
  public writeValue(value: any): void {
    if (value) {
      this._inputValue = value;
      this._canClear = !!this._inputValue;
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

}

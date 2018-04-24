import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { CategorySelectModule } from './category-select/category-select.module';

@NgModule({
  exports: [
    InputModule,
    CategorySelectModule
  ]
})
export class NgxBangModule { }

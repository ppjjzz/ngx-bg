import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { TableModule } from './table/table.module';

@NgModule({
  exports: [
    InputModule,
    TableModule
]
})
export class NgxBangModule { }

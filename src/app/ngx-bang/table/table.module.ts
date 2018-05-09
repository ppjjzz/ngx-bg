import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CustomColumComponent } from '../custom-colum/custom-colum.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    NgxDnDModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [TableComponent, CustomColumComponent],
  exports: [TableComponent, CustomColumComponent]
})
export class TableModule { }

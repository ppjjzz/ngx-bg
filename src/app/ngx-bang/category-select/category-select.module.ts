import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CategorySelectComponent } from './category-select.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OverlayModule,
        NgZorroAntdModule.forRoot()
    ],
    declarations: [
        CategorySelectComponent
    ],
    exports: [
        CategorySelectComponent
    ]
})
export class CategorySelectModule {
}

import { Component } from '@angular/core';
import { ColumConfig } from './ngx-bang/table/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  str = 'sdasd';
  tableConfig: ColumConfig[] = [{
    fixed: true,
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  }, {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  },
  {
    title: '广告系列',
    // textAlign: 'flex-end',
    fieldName: 'campaginName',
    canSort: true
  }];
  tableData = [{
    campaginName: 'aaa'
  },
  {
    campaginName: 'aaa'
  },
  {
    campaginName: 'aaa'
  },
  {
    campaginName: 'aaa'
  },
  {
    campaginName: 'aaa'
  },
  {
    campaginName: 'aaa'
  },
  {
    campaginName: 'aaa'
  },
  {
    campaginName: 'aaa'
  },
  {
    campaginName: 'aaa'
  }];
  tableBottomData = {
    campaginName: 'bbb'
  };
}

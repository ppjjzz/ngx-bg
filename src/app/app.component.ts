import { Component, OnInit } from '@angular/core';
import { ColumnConfig } from './ngx-bang/table/interface';
import { AdListService } from './ad-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  str = 'sdasd';
  showCustomColumModal = false;
  currentColumnsTemp = [];
  tableConfig: ColumnConfig[] = [{
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
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  },
  {
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  },
  {
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  },
  {
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  },
  {
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  },
  {
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  },
  {
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  },
  {
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  },
  {
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  }];
  tableBottomData = {
    name: 'aaa',
    budget: 'aaa',
    interests: 'aaa',
    addToCart: 'aaa',
    addToCartConversion: 'aaa',
    cvr: 'aaa',
    clicks: 'aaa',
    uniqueClicks: 'aaa',
    costPerAddToCart: 'aaa',
    cpc: 'aaa',
    cost_per_inline_link_click: 'aaa'
  };
  constructor(private adListService: AdListService) {}
  ngOnInit() {
    this.currentColumnsTemp = this.adListService.currentColumnsTemp;
  }
  customColumClose() {
    this.showCustomColumModal = false;
  }
  customColumConfirm(data) {
    this.currentColumnsTemp = JSON.parse(JSON.stringify(data.columns));
    this.showCustomColumModal = false;
  }
}

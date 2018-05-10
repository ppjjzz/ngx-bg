import { Injectable } from '@angular/core';

@Injectable()
export class AdListService {
    personalColumsList = [];
    currentColumnsTemp = [
        {
            title: 'Name',
            fieldName: 'name',
            textAlign: 'flex-start',
            fixed: true
        },
        {
            title: 'Budget',
            fieldName: 'budget',
            textAlign: 'flex-end',
            fixed: true
        },
        {
            title: 'Interests',
            fieldName: 'interests',
            textAlign: 'flex-start',
            fixed: true
        },
        {
            title: 'Website Adds to Cart',
            fieldName: 'addToCart',
            textAlign: 'flex-end',
            canSort: true
        },
        {
            title: 'Website Adds to Cart Conversion Value',
            fieldName: 'addToCartConversion',
            textAlign: 'flex-end',
            canSort: true
        },
        {
            title: 'CVR%',
            fieldName: 'cvr',
            textAlign: 'flex-end',
            canSort: true
        },
        {
            title: 'Clicks(All)',
            fieldName: 'clicks',
            textAlign: 'flex-end',
            canSort: true
        },
        {
            title: 'Unique Clicks(All)',
            fieldName: 'uniqueClicks',
            textAlign: 'flex-end',
            canSort: true
        },
        {
            title: 'Cost per Website Add to Cart',
            fieldName: 'costPerAddToCart',
            textAlign: 'flex-end',
            canSort: true
        },
        {
            title: 'CPC(All)',
            fieldName: 'cpc',
            textAlign: 'flex-end',
            canSort: true
        },
        {
            title: 'CPC(Cost per Link Click)',
            fieldName: 'cost_per_inline_link_click',
            textAlign: 'flex-end',
            canSort: true
        }
    ];
    constructor() { }

}

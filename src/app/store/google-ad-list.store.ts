import { ColumConfig } from '../ngx-bang/table/interface';
import { ColumsConfig } from '../ngx-bang/custom-colum/interface';

// export interface ColumsConfig {
//     category: string;
//     columConfig: ColumConfig[];
// }
// export const COLUMS_CONFIG_MAP: ColumsConfig = {
//     Situation: {
//         budget: {
//             title: 'Budget',
//             fieldName: 'budget',
//             textAlign: 'flex-end',
//             fixed: true
//         },
//         interests: {
//             title: 'Interests',
//             fieldName: 'interests',
//             textAlign: 'flex-start',
//             fixed: true
//         }
//     },
//     Performance: {
//         addToCart: {
//             title: 'Website Adds to Cart',
//             fieldName: 'addToCart',
//             textAlign: 'flex-end',
//             canSort: true
//         },
//         addToCartConversion: {
//             title: 'Website Adds to Cart Conversion Value',
//             fieldName: 'addToCartConversion',
//             textAlign: 'flex-end',
//             canSort: true
//         },
//         cvr: {
//             title: 'CVR%',
//             fieldName: 'cvr',
//             textAlign: 'flex-end',
//             canSort: true
//         }
//     }
// };

export const COLUMS_CONFIG_LIST: ColumsConfig[] = [
    {
        category: 'Situation',
        colums: [
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
            }
        ]
    },
    {
        category: 'Performance',
        colums: [
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
            }
        ]
    }
];
// export const COLUMS_CONFIG_LIST = (() => {
//     const arr = [];
//     for (const [category, columsConfig] of Object.entries(COLUMS_CONFIG_MAP)) {
//         for (const columConfig of Object.values(columsConfig)) {
//             arr.push({
//                 category,
//                 columConfig
//             });
//         }
//     }
//     return arr;
// })();

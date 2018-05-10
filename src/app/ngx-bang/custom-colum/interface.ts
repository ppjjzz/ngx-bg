import { ColumnConfig } from '../table/interface';

export interface ColumnsConfig {
    category: string; // 字段归属类别
    checked?: boolean; // 该类别是否全选
    indeterminate?: boolean; // 该类别是否半选
    colums: ColumnConfig[]; // 该类别下的列
}

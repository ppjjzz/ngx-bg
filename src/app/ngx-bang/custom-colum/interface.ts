import { ColumConfig } from '../table/interface';

export interface ColumsConfig {
    category: string; // 字段归属类别
    checked?: boolean; // 该类别是否全选
    indeterminate?: boolean; // 该类别是否半选
    colums: ColumConfig[]; // 该类别下的列
}

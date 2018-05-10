/* 表格列配置 */
export interface ColumnConfig {
    title: string; // 表头标题
    fieldName?: string; // 后端返回字段名
    // id?: number | string; // 字段id
    textAlign?: 'flex-start' | 'center' | 'flex-end'; // 字段显示居左，居中，居右
    width?: number; // 列宽度
    canSort?: boolean; // 是否可排序
    fixed?: boolean; // 该列是否固定,
    custom?: boolean; // 该列是否自定义
    sortType?: 'asc' | 'desc'; // 排序类型
    checked?: boolean; // 该列是否选中
}

/**
 * 拖动列的参数
 */
export class ColumResizeConfig {
    public resizeStartX: number;
    public resizeInitStartX: number;
    public moveStartX: number;
    public configIndex: number;
    public resizeColumElInitWidth: number;
    constructor(
        resizeStartX?: number, // 拖动开始横坐标
        resizeInitStartX?: number, // 拖动开始横坐标固定参照
        moveStartX?: number, // 鼠标相对于页面的初始横坐标
        configIndex?: number, // 当前拖动的列的索引
        resizeColumElInitWidth?: number // 当前拖动列的初始宽度
    ) {
        this.resizeStartX = resizeStartX || null;
        this.resizeInitStartX = resizeInitStartX || null;
        this.moveStartX = moveStartX || null;
        this.configIndex = configIndex || null;
        this.resizeColumElInitWidth = resizeColumElInitWidth || null;
    }
    reset() {
        this.resizeStartX = null;
        this.resizeInitStartX = null;
        this.moveStartX = null;
        this.configIndex = null;
        this.resizeColumElInitWidth = null;
    }
}

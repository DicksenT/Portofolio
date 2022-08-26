/**
 * @desc
 * 1 PC, 2 H5, 3 APP
 *
 * @param
 * {'1,2'} 字符串，返回对应名称
 * {[1,2]} 数组，返回对应名称
 * {'all'} 返回全部
 */
declare const fn: (param: string | (string | number)[]) => any;
export default fn;

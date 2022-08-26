'use strict';

import { eq, isString, split, isArray, find } from "lodash/fp";

/**
 * @desc
 * 1 PC, 2 H5, 3 APP
 * 
 * @param
 * {'1,2'} 字符串，返回对应名称
 * {[1,2]} 数组，返回对应名称
 * {'all'} 返回全部
 */
const fn = (param: string | (number|string)[] | 'all') => {
  const list: (Props)[] = [
    { dataIndex: 1, title: 'PC' },
    { dataIndex: 2, title: 'H5' },
    { dataIndex: 3, title: 'APP' }
    ];
  let paramOk: (number)[] = [];
  const result = [];

  if (eq(param, 'all')) {
    return list;
  } else if (isString(param)) {
    paramOk = split(',', param).map(v => +v) as any;
  } else if (isArray(param)) {
    paramOk = param.map(v => +v);
  }
  paramOk.map(v => {
    result.push(find({dataIndex: v}, list).title);
  });
  return String(result) as any;
};

export default fn;

interface Props {
  dataIndex: number,
  title: string
}

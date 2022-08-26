'use strict';

/**
  * @desc
  * 是/否
  */
const fn = () => {
 const list: (Props)[] = [
    { dataIndex: 1, title: '是' },
    { dataIndex: 0, title: '否' }
  ];
  return list;
};

export default fn;

interface Props {
 dataIndex: number,
 title: string
}

import React from 'react';
import { Empty, Table } from 'antd';
import { connect } from 'dva';
import columns from './columns';

const EcommerceTable = props => {
  const { list } = props;
  return (
    <div id="components-table-demo-basic" style={{ margin: '20px 0' }}>
      {list === undefined ? (
        <Empty description="Não há previsão de viagens a partir dos dados solicitados." />
      ) : (
        <Table rowKey="id" columns={columns} dataSource={list} />
      )}
    </div>
  );
};
export default connect(({ schedules }) => ({
  list: schedules.list,
}))(EcommerceTable);

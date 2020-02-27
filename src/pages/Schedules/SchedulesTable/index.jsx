import React from 'react';
import { Link } from 'umi';
import { Alert, Empty, Table } from 'antd';
import { connect } from 'dva';
import columns from './columns';
// import styles from './index.less';

const SchedulesTable = props => {
  const { list } = props;
  return (
    <div id="components-table-demo-basic" style={{ margin: '20px 0' }}>
      {list === undefined ? (
        <Empty description="Não há previsão de viagens a partir dos dados solicitados." />
      ) : (
        <div>
          <Alert
            message="Aviso Importante"
            description={
              <span>
                Os horários determinados pelo D.A.E.R. conforme relação abaixo podem sofrer
                alterações sem aviso prévio, principalmente nos feriados. <br />
                Para maiores informações consulte (51) 32100101 ou{' '}
                <Link to="/ecommerce">Cadastre-se aqui</Link>.
              </span>
            }
            type="warning"
            showIcon
            style={{ marginBottom: '20px' }}
          />
          <Table rowKey="id" columns={columns} dataSource={list} />
        </div>
      )}
    </div>
  );
};
export default connect(({ schedules }) => ({
  list: schedules.list,
}))(SchedulesTable);

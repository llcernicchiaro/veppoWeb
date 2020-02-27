import React from 'react';
import { Card, Col, Descriptions, Row, Timeline, Typography } from 'antd';
import { ClockCircleOutlined, EnvironmentOutlined, NodeIndexOutlined } from '@ant-design/icons';
import { connect } from 'dva';
// import styles from './index.less';

const { Title } = Typography;

const BuyPage = () => (
  <div className="container">
    <Row gutter={32}>
      <Col span={14}>
        {/* <Title level={4}>Informações sobre a compra</Title> */}
        <Card title="Informações sobre a compra" extra="23/02/2020">
          <Card.Grid style={{ width: '35%' }}>
            <Timeline>
              <Timeline.Item dot={<EnvironmentOutlined />}>Porto Alegre 19:00</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                Duração 01:30
              </Timeline.Item>
              <Timeline.Item dot={<NodeIndexOutlined style={{ fontSize: '16px' }} />}>
                Distância 70km
              </Timeline.Item>
              <Timeline.Item dot={<EnvironmentOutlined />}>São Jerônimo 20:30</Timeline.Item>
            </Timeline>
          </Card.Grid>
          <Card.Grid style={{ width: '65%' }}>
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Empresa">VIACAO OURO E PRATA SA</Descriptions.Item>
              <Descriptions.Item label="Modalidade">Semi Direto</Descriptions.Item>
              <Descriptions.Item label="Linha">GENERAL CÂMARA/G CAROLA</Descriptions.Item>
              <Descriptions.Item label="Valor sem seguro">R$ 167,75</Descriptions.Item>
              <Descriptions.Item label="Valor com seguro">R$ 177,75</Descriptions.Item>
            </Descriptions>
          </Card.Grid>
        </Card>
      </Col>
      <Col span={10}>
        <Title level={4}>Selecione a(s) poltrona(s)</Title>
      </Col>
    </Row>
  </div>
);

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(BuyPage);

import React from 'react';
import { Button, Form, Select, Tabs, TimePicker } from 'antd';
import { connect } from 'dva';
// import companies from './companies';
// import styles from './index.less';

const inputStyles = {
  width: '100%',
  minWidth: 150,
  maxWidth: 235,
};

const EcommerceSearch = props => {
  const [form] = Form.useForm();
  const FormItem = Form.Item;
  const { Option } = Select;
  const { TabPane } = Tabs;

  const onFinish = values => {
    const { dispatch } = props;
    dispatch({
      type: 'schedules/fetchSchedules',
      payload: { ...values, horario: values.horario.format('HH:mm') },
    });
  };

  // const onFinishFailed = errorInfo => {
  //   // console.log('Failed:', errorInfo);
  // };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="EMBARQUE EM PORTO ALEGRE" key="1">
        <Form
          form={form}
          layout="inline"
          name="basic"
          size="large"
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          initialValues={{ dia: 'SJ' }}
          style={{ justifyContent: 'space-between' }}
        >
          <FormItem
            label=""
            name="destino"
            style={inputStyles}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select
              showSearch
              placeholder="Escolha o Destino"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="SJ">São Jerônimo</Option>
              <Option value="CH">Charqueadas</Option>
              <Option value="Canoas">Canoas</Option>
              <Option value="SSC">São Sebastião do Caí</Option>
            </Select>
          </FormItem>
          <FormItem
            label=""
            name="dia"
            style={inputStyles}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select placeholder="Dia da semana" optionFilterProp="children">
              <Option value="SJ">Qualquer dia</Option>
              <Option value="CH">Domingo</Option>
              <Option value="Canoas">Segunda</Option>
            </Select>
          </FormItem>
          <FormItem
            label=""
            name="horario"
            style={inputStyles}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <TimePicker placeholder="Horário inicial" format="HH:00" style={inputStyles} />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Verificar Ônibus Disponíveis
            </Button>
          </FormItem>
        </Form>
        <small>Alterações podem ocorrer por cancelamento ou inclusão de novos horários.</small>
      </TabPane>
      <TabPane tab="EMBARQUE NO INTERIOR" key="2">
        <Form
          form={form}
          layout="inline"
          name="basic"
          size="large"
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          initialValues={{ dia: 'SJ' }}
          style={{ justifyContent: 'space-between' }}
        >
          <FormItem
            label=""
            name="destino"
            style={inputStyles}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select
              showSearch
              placeholder="Escolha a Origem"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="SJ">São Jerônimo</Option>
              <Option value="CH">Charqueadas</Option>
              <Option value="Canoas">Canoas</Option>
              <Option value="SSC">São Sebastião do Caí</Option>
            </Select>
          </FormItem>
          <FormItem
            label=""
            name="dia"
            style={inputStyles}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select placeholder="Dia da semana" optionFilterProp="children">
              <Option value="SJ">Qualquer dia</Option>
              <Option value="CH">Domingo</Option>
              <Option value="Canoas">Segunda</Option>
            </Select>
          </FormItem>
          <FormItem
            label=""
            name="horario"
            style={inputStyles}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <TimePicker placeholder="Horário inicial" format="HH:00" style={inputStyles} />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Verificar Ônibus Disponíveis
            </Button>
          </FormItem>
        </Form>
        <small>Alterações podem ocorrer por cancelamento ou inclusão de novos horários.</small>
      </TabPane>
    </Tabs>
  );
};
export default connect()(EcommerceSearch);

import React from 'react';
import { Button, DatePicker, Form, Select, TimePicker } from 'antd';
import { connect } from 'dva';
import moment from 'moment';

const inputStyles = {
  width: '100%',
  minWidth: 150,
  maxWidth: 260,
};

const SearchForm = props => {
  const [form] = Form.useForm();
  const FormItem = Form.Item;
  const { Option } = Select;
  const { capital } = props;

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
    <div>
      <Form
        form={form}
        layout="inline"
        name="basic"
        size="large"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        style={{ justifyContent: 'space-between' }}
      >
        <FormItem
          label=""
          name={capital ? 'destino' : 'origem'}
          style={inputStyles}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select
            showSearch
            placeholder={capital ? 'Escolha o Destino' : 'Escolha a Origem'}
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
          <DatePicker
            disabledDate={current => current && current < moment().startOf('day')}
            format="DD/MM/YYYY"
            style={inputStyles}
          />
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
    </div>
  );
};

export default connect()(SearchForm);

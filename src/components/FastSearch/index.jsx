import React, { useState } from 'react';
import { Button, Card, Form, List, Modal, Select, TimePicker } from 'antd';
import { connect } from 'dva';
import companies from './companies';
import styles from './index.less';

const FastSearch = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  const FormItem = Form.Item;
  const { Option } = Select;
  const { Meta } = Card;

  const onFinish = values => {
    const { dispatch } = props;
    dispatch({
      type: 'schedules/fetchSchedules',
      payload: { ...values, horario: values.horario.format('HH:mm') },
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h1>Planeje sua próxima viagem</h1>
      <Form
        name="basic"
        form={form}
        layout="inline"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ dia: 'SJ' }}
      >
        <FormItem
          label=""
          name="destino"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select
            showSearch
            style={{ width: 225 }}
            placeholder="De Porto Alegre para"
            optionFilterProp="children"
            size="large"
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
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select
            style={{ width: 225 }}
            placeholder="Dia da semana"
            optionFilterProp="children"
            size="large"
          >
            <Option value="SJ">Qualquer dia</Option>
            <Option value="CH">Domingo</Option>
            <Option value="Canoas">Segunda</Option>
          </Select>
        </FormItem>
        <FormItem
          label=""
          name="horario"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <TimePicker
            placeholder="Horário inicial"
            format="HH:00"
            size="large"
            style={{ width: 225 }}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" size="large">
            Consultar Horários
          </Button>
        </FormItem>
        <Button type="secondary" onClick={() => setModalOpen(true)} size="large">
          Outras Linhas
        </Button>
      </Form>
      <small>Alterações podem ocorrer por cancelamento ou inclusão de novos horários.</small>
      <Modal
        title="Linhas Internacionais e Interestaduais"
        visible={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={false}
      >
        <List
          grid={{ gutter: 8, column: 2 }}
          dataSource={companies}
          renderItem={item => (
            <List.Item>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <Card
                  className={styles.companieCard}
                  hoverable
                  cover={
                    <img
                      alt={item.alt}
                      src={item.src}
                      style={{ width: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                    />
                  }
                >
                  <Meta title={item.alt} />
                </Card>
              </a>
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};
export default connect()(FastSearch);

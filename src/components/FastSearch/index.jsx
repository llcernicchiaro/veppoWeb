import React, { useState } from 'react';
// import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Select, TimePicker } from 'antd';
// import useMergeValue from 'use-merge-value';
// import classNames from 'classnames';
// import styles from './index.less';

const HeaderSearch = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // const { number } = props;
  const FormItem = Form.Item;
  const { Option } = Select;
  return (
    <div>
      <h1>Planeje sua próxima viagem</h1>
      <Form layout="inline">
        <FormItem label="">
          <Select
            showSearch
            style={{ width: 230 }}
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
          </Select>
        </FormItem>
        <FormItem label="">
          <Select
            defaultValue="SJ"
            style={{ width: 230 }}
            placeholder="Dia da semana"
            optionFilterProp="children"
            size="large"
          >
            <Option value="SJ">Qualquer dia</Option>
            <Option value="CH">Domingo</Option>
            <Option value="Canoas">Segunda</Option>
          </Select>
        </FormItem>
        <FormItem label="">
          <TimePicker
            placeholder="Horário inicial"
            format="HH:00"
            size="large"
            style={{ width: 230 }}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" size="large">
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default HeaderSearch;

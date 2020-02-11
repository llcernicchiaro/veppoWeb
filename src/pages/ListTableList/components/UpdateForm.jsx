import React, { useState } from 'react';
import { Form, Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';

const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;
const formLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 13,
  },
};

const UpdateForm = props => {
  const [formVals, setFormVals] = useState({
    name: props.values.name,
    desc: props.values.desc,
    key: props.values.key,
    target: '0',
    template: '0',
    type: '1',
    time: '',
    frequency: 'month',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values,
  } = props;

  const forward = () => setCurrentStep(currentStep + 1);

  const backward = () => setCurrentStep(currentStep - 1);

  const handleNext = async () => {
    const fieldsValue = await form.validateFields();
    setFormVals({ ...formVals, ...fieldsValue });

    if (currentStep < 2) {
      forward();
    } else {
      handleUpdate(formVals);
    }
  };

  const renderContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <FormItem name="target" label="Monitoring object">
            <Select
              style={{
                width: '100%',
              }}
            >
              <Option value="0">Table 1</Option>
              <Option value="1">Table 2</Option>
            </Select>
          </FormItem>
          <FormItem name="template" label="A rule template">
            <Select
              style={{
                width: '100%',
              }}
            >
              <Option value="0">A rule template</Option>
              <Option value="1">A rule template 2</Option>
            </Select>
          </FormItem>
          <FormItem name="type" label="Rule type">
            <RadioGroup>
              <Radio value="0">strong</Radio>
              <Radio value="1">weak</Radio>
            </RadioGroup>
          </FormItem>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <FormItem
            name="time"
            label="The start time"
            rules={[
              {
                required: true,
                message: 'Please select start time!',
              },
            ]}
          >
            <DatePicker
              style={{
                width: '100%',
              }}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Select the start time"
            />
          </FormItem>
          <FormItem name="frequency" label="Scheduling cycle">
            <Select
              style={{
                width: '100%',
              }}
            >
              <Option value="month">month</Option>
              <Option value="week">week</Option>
            </Select>
          </FormItem>
        </>
      );
    }

    return (
      <>
        <FormItem
          name="name"
          label="Rule name"
          rules={[
            {
              required: true,
              message: 'Please enter the rule name!',
            },
          ]}
        >
          <Input placeholder="Please enter the" />
        </FormItem>
        <FormItem
          name="desc"
          label="Rule description"
          rules={[
            {
              required: true,
              message: 'Please enter a description rules for at least five characters!',
              min: 5,
            },
          ]}
        >
          <TextArea rows={4} placeholder="Please enter at least five characters" />
        </FormItem>
      </>
    );
  };

  const renderFooter = () => {
    if (currentStep === 1) {
      return (
        <>
          <Button
            style={{
              float: 'left',
            }}
            onClick={backward}
          >
            The previous step
          </Button>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>cancel</Button>
          <Button type="primary" onClick={() => handleNext()}>
            The next step
          </Button>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <Button
            style={{
              float: 'left',
            }}
            onClick={backward}
          >
            The previous step
          </Button>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>cancel</Button>
          <Button type="primary" onClick={() => handleNext()}>
            complete
          </Button>
        </>
      );
    }

    return (
      <>
        <Button onClick={() => handleUpdateModalVisible(false, values)}>cancel</Button>
        <Button type="primary" onClick={() => handleNext()}>
          The next step
        </Button>
      </>
    );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{
        padding: '32px 40px 48px',
      }}
      destroyOnClose
      title="Rule configuration"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, values)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Steps
        style={{
          marginBottom: 28,
        }}
        size="small"
        current={currentStep}
      >
        <Step title="The basic information" />
        <Step title="Configuration rule properties" />
        <Step title="Set the scheduling period" />
      </Steps>
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          target: formVals.target,
          template: formVals.template,
          type: formVals.type,
          frequency: formVals.frequency,
          name: formVals.name,
          desc: formVals.desc,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;

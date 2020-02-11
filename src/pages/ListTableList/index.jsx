// import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Divider, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { queryRule, updateRule, addRule } from './service';
/**
 * 添加节点
 * @param fields
 */

const handleAdd = async fields => {
  const hide = message.loading('Being added');

  try {
    await addRule({
      desc: fields.desc,
    });
    hide();
    message.success('Add a success');
    return true;
  } catch (error) {
    hide();
    message.error('Add a failure, please try again!');
    return false;
  }
};
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async fields => {
  const hide = message.loading('Is the configuration');

  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();
    message.success('Configuration is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failure, please try again!');
    return false;
  }
};
/**
 *  删除节点
 * @param selectedRows
 */

// const handleRemove = async selectedRows => {
//   const hide = message.loading('deleting');
//   if (!selectedRows) return true;

//   try {
//     await removeRule({
//       key: selectedRows.map(row => row.key),
//     });
//     hide();
//     message.success('Deleted successfully, will refresh');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('Delete failed, please try again!');
//     return false;
//   }
// };

const TableList = () => {
  const [sorter, setSorter] = useState({});
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef();
  const columns = [
    {
      title: 'Empresa',
      dataIndex: 'name',
    },
    {
      title: 'Linha',
      dataIndex: 'desc',
    },
    {
      title: 'Modalidade',
      dataIndex: 'callNo',
      sorter: true,
      renderText: val => `R$ ${val}`,
    },
    {
      title: 'Hora',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: 'Shut down',
          status: 'Default',
        },
        1: {
          text: 'In the operation of the',
          status: 'Processing',
        },
        2: {
          text: 'Has been launched',
          status: 'Success',
        },
        3: {
          text: 'abnormal',
          status: 'Error',
        },
      },
    },
    {
      title: 'Frequência',
      dataIndex: 'updatedAt',
      sorter: true,
      valueType: 'dateTime',
    },
    {
      title: 'Valor com Seguro',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            configuration
          </a>
          <Divider type="vertical" />
          <a href="">Subscribe to alerts</a>
        </>
      ),
    },
    {
      title: 'Valor sem Seguro',
      dataIndex: 'updatedAt',
      sorter: true,
      valueType: 'time',
    },
    {
      title: 'Km',
      dataIndex: 'updatedAt',
      sorter: true,
      valueType: 'time',
    },
    {
      title: 'Tempo Estimado',
      dataIndex: 'updatedAt',
      sorter: true,
      valueType: 'time',
    },
  ];
  return (
    <PageHeaderWrapper>
      <ProTable
        headerTitle="Form de consulta"
        actionRef={actionRef}
        rowKey="key"
        onChange={(_, _filter, _sorter) => {
          setSorter(`${_sorter.field}_${_sorter.order}`);
        }}
        params={{
          sorter,
        }}
        // toolBarRender={(action, { selectedRows }) => [
        //   <Button type="primary" onClick={() => handleModalVisible(true)}>
        //     <PlusOutlined /> new
        //   </Button>,
        //   selectedRows && selectedRows.length > 0 && (
        //     <Dropdown
        //       overlay={
        //         <Menu
        //           onClick={async e => {
        //             if (e.key === 'remove') {
        //               await handleRemove(selectedRows);
        //               action.reload();
        //             }
        //           }}
        //           selectedKeys={[]}
        //         >
        //           <Menu.Item key="remove">Remove</Menu.Item>
        //           <Menu.Item key="approval">approval</Menu.Item>
        //         </Menu>
        //       }
        //     >
        //       <Button>
        //         The batch operation <DownOutlined />
        //       </Button>
        //     </Dropdown>
        //   ),
        // ]}
        // tableAlertRender={(selectedRowKeys, selectedRows) => (
        //   <div>
        //     Has chosen{' '}
        //     <a
        //       style={{
        //         fontWeight: 600,
        //       }}
        //     >
        //       {selectedRowKeys.length}
        //     </a>{' '}
        //     item&nbsp;&nbsp;
        //     <span>
        //       Service call number in total{' '}
        //       R$ {selectedRows.reduce((pre, item) => pre + item.callNo, 0)}
        //     </span>
        //   </div>
        // )}
        request={params => queryRule(params)}
        columns={columns}
        // rowSelection={{}}
        options={{ fullScreen: false, reload: false, setting: false }}
      />
      <CreateForm
        onSubmit={async value => {
          const success = await handleAdd(value);

          if (success) {
            handleModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async value => {
            const success = await handleUpdate(value);

            if (success) {
              handleModalVisible(false);
              setStepFormValues({});

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageHeaderWrapper>
  );
};

export default TableList;

// import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import FastSearch from '@/components/FastSearch';
import SchedulesTable from './SchedulesTable';
// import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="container">
      <FastSearch />
      <Spin spinning={loading} size="large">
        <SchedulesTable />
      </Spin>
    </div>
  );
};

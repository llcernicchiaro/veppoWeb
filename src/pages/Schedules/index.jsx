// import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import FastSearch from '@/components/FastSearch';
// import styles from './index.less';
import SchedulesTable from './SchedulesTable';

export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="container">
      {/* <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}> */}
      <FastSearch />
      <SchedulesTable />
      <div
        style={{
          // paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
      </div>
    </div>
    // </PageHeaderWrapper>
  );
};

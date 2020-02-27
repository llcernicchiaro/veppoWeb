import React, { useState, useEffect } from 'react';
import { connect, router } from 'dva';
import { Spin } from 'antd';
import EcommerceSearch from './components/EcommerceSearch';
import EcommerceTable from './components/EcommerceTable';

const Ecommerce = ({ currentUser }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) router.push('/user/login');
  }, [currentUser]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <EcommerceSearch />
      <Spin spinning={loading} size="large">
        <EcommerceTable />
      </Spin>
    </div>
  );
};

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(Ecommerce);

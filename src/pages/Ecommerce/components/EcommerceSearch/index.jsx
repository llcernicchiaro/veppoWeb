import React from 'react';
import { Tabs } from 'antd';
import { connect } from 'dva';
import SearchForm from './SearchForm';

const EcommerceSearch = () => {
  const { TabPane } = Tabs;

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="EMBARQUE EM PORTO ALEGRE" key="1">
        <SearchForm capital />
      </TabPane>
      <TabPane tab="EMBARQUE NO INTERIOR" key="2">
        <SearchForm capital={false} />
      </TabPane>
    </Tabs>
  );
};
export default connect()(EcommerceSearch);

import React from 'react';
import { connect } from 'dva';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { Card, Typography, Alert } from 'antd';
import FastSearch from '@/components/FastSearch';
import userHeader from '@/assets/header.png';
import visitorHeader from '@/assets/header2.png';
// import styles from './index.less';

// const CodePreview = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );

const HomePage = ({ currentUser }) => (
  <div>
    <div className="container">
      <FastSearch />
    </div>
    <img src={currentUser.name ? userHeader : visitorHeader} alt="Header" width="100%" />
    <div>
      <div className="container">
        <h1>Nossa Missão</h1>
        <span>
          Prestar serviço de forma pioneira no ramo de transportes, visando satisfazer a sociedade
          em suas necessidades, com qualidade, agilidade, cordialidade, através de soluções
          inovadoras, objetivando a excelência empresarial, visando o lucro e o reconhecimento do
          trabalho de nossos colaboradores.
        </span>
      </div>
    </div>
  </div>
  // <PageHeaderWrapper>
  //   <Card>
  //     <Alert
  //       message="umi ui 现已发布，点击右下角 umi 图标即可使用"
  //       type="success"
  //       showIcon
  //       banner
  //       style={{
  //         margin: -12,
  //         marginBottom: 24,
  //       }}
  //     />
  //     <Typography.Text strong>
  //       <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
  //         基于 block 开发，快速构建标准页面
  //       </a>
  //     </Typography.Text>
  //     <CodePreview> npm run ui</CodePreview>
  //     <Typography.Text
  //       strong
  //       style={{
  //         marginBottom: 12,
  //       }}
  //     >
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://pro.ant.design/docs/available-script#npm-run-fetchblocks"
  //       >
  //         获取全部区块
  //       </a>
  //     </Typography.Text>
  //     <CodePreview> npm run fetch:blocks</CodePreview>
  //   </Card>
  //   <p
  //     style={{
  //       textAlign: 'center',
  //       marginTop: 24,
  //     }}
  //   >
  //     Want to add more pages? Please refer to{' '}
  //     <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
  //       use block
  //     </a>
  //     。
  //   </p>
  // </PageHeaderWrapper>
);

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(HomePage);

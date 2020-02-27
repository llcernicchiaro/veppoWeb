// import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Button, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Link } from 'umi';
import { connect } from 'dva';
import styles from './style.less';
import LoginFrom from './components/Login';

const { UserName, Password, Submit, Tab } = LoginFrom;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = props => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState('account');

  const handleSubmit = values => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values, type },
    });
  };

  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="CPF">
          {status === 'error' && loginType === 'account' && !submitting && (
            <LoginMessage content="Account or password error（admin/ant.design）" />
          )}
          <UserName
            name="userName"
            placeholder="Username: admin or user"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="Password: ant.design"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </Tab>
        <Tab key="mobile" tab="CNPJ">
          {status === 'error' && loginType === 'mobile' && !submitting && (
            <LoginMessage content="Verification code error" />
          )}
          <UserName
            name="userName"
            placeholder="Username: admin or user"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="Password: ant.design"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </Tab>
        <div>
          <Checkbox checked={autoLogin} onChange={e => setAutoLogin(e.target.checked)}>
            Login automático
          </Checkbox>
          <a
            style={{
              float: 'right',
            }}
          >
            Esqueci minha Senha
          </a>
        </div>
        <Submit loading={submitting}>LOGIN</Submit>
        <div className={styles.other}>
          {/* Other login */}
          {/* <AlipayCircleOutlined className={styles.icon} />
          <TaobaoCircleOutlined className={styles.icon} />
          <WeiboCircleOutlined className={styles.icon} /> */}
          <Link className={styles.register} to="/user/register">
            {/* Cadastre-se */}
            <Button type="secondary" size="large">
              Cadastre-se
            </Button>
          </Link>
        </div>
      </LoginFrom>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);

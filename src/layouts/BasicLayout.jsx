/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import React, { useEffect } from 'react';
import { Link } from 'umi';
import { connect } from 'dva';
import {
  createFromIconfontCN,
  InstagramFilled,
  TwitterOutlined,
  FacebookFilled,
} from '@ant-design/icons';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { isAntDesignPro, getAuthorityFromRouter } from '@/utils/utils';
import styles from './BasicLayout.less';
import logotipo from '../assets/logotipo.png';
import logomarca from '../assets/logomarca.png';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1630942_0x9qkifitskb.js',
});

const noMatch = (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);

/**
 * use Authorized check all menu item
 */
const menuDataRender = menuList =>
  menuList.map(item => {
    const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
    return Authorized.check(item.authority, localItem, null);
  });

const defaultFooterDom = (
  <DefaultFooter
    className={styles.footer}
    copyright="Veppo"
    links={[
      {
        key: 'WhatsApp',
        title: <IconFont type="icon-whatsapp" style={{ color: 'blue' }} />,
        href: 'https://api.whatsapp.com/send?phone=555180468524&text=&source=&data=',
        blankTarget: true,
      },
      {
        key: 'Twitter',
        title: <TwitterOutlined />,
        href: 'https://twitter.com/rodoviariapoa',
        blankTarget: true,
      },
      {
        key: 'Instagram',
        title: <InstagramFilled />,
        href: 'https://www.instagram.com/rodoviariapoa/',
        blankTarget: true,
      },
      {
        key: 'Facebook',
        title: <FacebookFilled />,
        href: 'https://www.facebook.com/rodoviariapoa/',
        blankTarget: true,
      },
      {
        key: 'PlayStore',
        title: <IconFont type="icon-google_play" className={styles.iconsStores} />,
        href: 'https://play.google.com/store/apps/details?id=veppo.mobile',
        blankTarget: true,
      },
      {
        key: 'AppStore',
        title: <IconFont type="icon-app_store" className={styles.iconsStores} />,
        href: 'https://apps.apple.com/br/app/veppo-rodoviaria-poa/id1182117922',
        blankTarget: true,
      },
    ]}
  />
);

const footerRender = () => {
  if (!isAntDesignPro()) return defaultFooterDom;

  return (
    <>
      {defaultFooterDom}
      <div
        style={{
          padding: '0px 24px 24px',
          textAlign: 'center',
        }}
      >
        <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            width="82px"
            alt="netlify logo"
          />
        </a>
      </div>
    </>
  );
};

const BasicLayout = props => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;
  /**
   * constructor
   */

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);
  /**
   * init variables
   */

  const handleMenuCollapse = payload => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
    authority: undefined,
  };
  return (
    <ProLayout
      logo={logomarca}
      formatMessage={formatMessage}
      menuHeaderRender={logoDom => (
        <Link to="/">
          {logoDom}
          <img src={logotipo} alt="Logotipo" />
        </Link>
      )}
      onCollapse={handleMenuCollapse}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      // breadcrumbRender={(routers = []) => [
      //   {
      //     path: '/',
      //     breadcrumbName: '首页',
      //   },
      //   ...routers,
      // ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={footerRender}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContent />}
      {...props}
      {...settings}
    >
      <Authorized authority={authorized.authority} noMatch={noMatch}>
        {children}
      </Authorized>
    </ProLayout>
  );
};

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);

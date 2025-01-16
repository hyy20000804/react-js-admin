// 佳能(中国)有限公司版权所有
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { notification } from 'antd';
function AutnToken ({ children }) {
  const location = useLocation(); //当前页面路由
  const navigate = useNavigate();
  const appInfo = JSON.parse(localStorage.getItem(window.envConfig['ROOT_APP_INFO']));

  // 监听本地值，一旦手动删除去登录
  window.addEventListener('storage', (event) => {
    console.log(event);
    if (event.storageArea === localStorage && event.key == window.envConfig['ROOT_APP_INFO']) {
      navigate('/login');
      notification.warning({
        message: '系统提示',
        description: '监测到用户信息已变更或删除，请重新登录',
      });
    }
  });
  if (appInfo) {
    return <>{children}</>;
    // 如果token存在，则返回传入的组件
  } else {
    // 否则重定向到登录组件
    // react路由有个重定向的组件叫Navgite
    return <Navigate to='/login' replace></Navigate>;
    // return <>{children}</>;
  }
}

export default AutnToken;

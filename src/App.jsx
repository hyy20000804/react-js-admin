import React from 'react'
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import AutnToken from '@/components/autnToken'
import Commonview from '@/pages/commonview'
import Login from '@/pages/login'
import Error from '@/components/error404'
import '@/App.css'

import useTheme from './hooks/useTheme'
import { setCookies, getCookies, removeCookies } from '@/utils/cookies'
function App () {
  useTheme()
  // 主题配色
  let ThemeBgColor =
    getCookies('ThemeBgColor') || window.envConfig['ROOT_APP_COLOR']
  // 如果本地没有主题色字段，默认加载
  if (!ThemeBgColor) {
    // import("@/styles/root.css")
  } else {
    switch (ThemeBgColor) {
      case '#2f54eb': //深海蓝
        import('@/styles/theme/2f54eb.less')
        break
      case '#f5222d': //火山红
        import('@/styles/theme/f5222d.less')
        break
      case '#fa541c': //浅红
        import('@/styles/theme/fa541c.less')
        break
      case '#faad14': //日暮
        import('@/styles/theme/faad14.less')
        break
      case '#13C2C2': //明青
        import('@/styles/theme/13C2C2.less')
        break
      case '#52c41a': //草绿
        import('@/styles/theme/52c41a.less')
        break
      case '#a876ed': //熏紫
        import('@/styles/theme/a876ed.less')
        break
      default:
        break
    }
  }
  return (
    <HashRouter>
      {/* 只匹配一个，匹配成功就不往下匹配，效率高, react-router-dom v6写法 ：父/根路径需要指定 * 通配符*/}
      <Routes>
        {/* 指定首屏 */}
        <Route path='/' element={<Navigate to='/dashboard/analysis' />} />

        {/* 登录页 */}
        <Route path='/login' element={<Login />}></Route>

        {/*   react-router-dom v6写法 ：父/根路径需要指定 * 通配符   */}
        <Route
          path='/*'
          element={
            <Commonview />

            // <AutnToken>
            //   <Commonview />
            // </AutnToken>
          }
        ></Route>
        {/*配置404页面*/}
        <Route path='/error404' element={<Error />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App

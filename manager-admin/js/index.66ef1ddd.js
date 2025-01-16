var e, s
import {
  u as t,
  a as r,
  n as a,
  j as n,
  N as i,
  S as l,
  b as o,
  c as d,
  M as c,
  m,
  d as u,
  r as h,
  H as p,
  U as g,
  R as x,
  I as y,
  C as f,
  F as j,
  e as _,
  f as w,
  D as k,
  g as v,
  h as b,
  T as O,
  i as P,
  k as T,
  L as R,
  l as E,
  o as S,
  p as C,
  q as N,
  s as I,
  t as L,
  v as A,
  w as D,
  x as F,
  y as M,
  z as V,
  A as U,
  B as q,
  E as B,
  G as z,
  J as $,
  K as J,
  O as G,
  P as H,
  Q as K,
  V as Z,
  W as X,
  X as W,
  Y,
  Z as Q,
  _ as ee,
  $ as se,
  a0 as te
} from './.store/.store.b566568b.js'
!(function () {
  const e = document.createElement('link').relList
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e)
    new MutationObserver(e => {
      for (const t of e)
        if ('childList' === t.type)
          for (const e of t.addedNodes)
            'LINK' === e.tagName && 'modulepreload' === e.rel && s(e)
    }).observe(document, { childList: !0, subtree: !0 })
  }
  function s (e) {
    if (e.ep) return
    e.ep = !0
    const s = (function (e) {
      const s = {}
      return (
        e.integrity && (s.integrity = e.integrity),
        e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy),
        'use-credentials' === e.crossOrigin
          ? (s.credentials = 'include')
          : 'anonymous' === e.crossOrigin
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
        s
      )
    })(e)
    fetch(e.href, s)
  }
})()
const re = {},
  ae = function (e, s, t) {
    if (!s || 0 === s.length) return e()
    const r = document.getElementsByTagName('link')
    return Promise.all(
      s.map(e => {
        if (
          ((e = (function (e, s) {
            return new URL(e, s).href
          })(e, t)),
          e in re)
        )
          return
        re[e] = !0
        const s = e.endsWith('.css'),
          a = s ? '[rel="stylesheet"]' : ''
        if (!!t)
          for (let t = r.length - 1; t >= 0; t--) {
            const a = r[t]
            if (a.href === e && (!s || 'stylesheet' === a.rel)) return
          }
        else if (document.querySelector(`link[href="${e}"]${a}`)) return
        const n = document.createElement('link')
        return (
          (n.rel = s ? 'stylesheet' : 'modulepreload'),
          s || ((n.as = 'script'), (n.crossOrigin = '')),
          (n.href = e),
          document.head.appendChild(n),
          s
            ? new Promise((s, t) => {
                n.addEventListener('load', s),
                  n.addEventListener('error', () =>
                    t(new Error(`Unable to preload CSS for ${e}`))
                  )
              })
            : void 0
        )
      })
    ).then(() => e())
  }
function ne ({ children: e }) {
  t()
  const s = r(),
    l = JSON.parse(localStorage.getItem(window.envConfig.ROOT_APP_INFO))
  return (
    window.addEventListener('storage', e => {
      e.storageArea === localStorage &&
        e.key == window.envConfig.ROOT_APP_INFO &&
        (s('/login'),
        a.warning({
          message: '系统提示',
          description: '监测到用户信息已变更或删除，请重新登录'
        }))
    }),
    l
      ? n.jsx(n.Fragment, { children: e })
      : n.jsx(i, { to: '/login', replace: !0 })
  )
}
const ie = '' + new URL('../png/logo-react.f69fce21.png', import.meta.url).href,
  le = () =>
    n.jsx(n.Fragment, {
      children: n.jsx('div', {
        className: 'loading',
        children: n.jsx(l, { children: n.jsx(o, { size: 'large' }) })
      })
    }),
  oe = d.create({
    baseURL: window.envConfig.API_BASE_URL,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    timeout: 1e3 * window.envConfig.API_BASE_TIMEOUT
  }),
  de = {
    202: '已接受请求，并进入后台排队（异步任务），但未处理完成',
    203: '请求成功，非授权信息，返回的meta信息不在原始的服务器，而是一个副本',
    204: '服务器成功处理，但未返回内容',
    205: '服务器成功处理，客户端（浏览器）应重置页面视图',
    206: '服务器成功处理了部分GET请求',
    400: '发出的请求有误（客户端请求语法错误），服务器没有进行新建或修改数据的操作',
    401: '用户没有权限（令牌、用户名、密码错误）或登录过期',
    403: '用户得到授权，但访问已被禁止',
    404: '请求的资源无法找到（资源不存在或URL错误），服务器没有进行操作',
    405: '客户端请求中的方法被服务器禁止或请求方法错误',
    406: '客户端请求格式错误或服务端返回内容客户端无法解析',
    410: '请求的资源被永久删除，且不会再得到',
    412: '客户端请求信息的先决条件错误',
    413: '由于请求的实体过大，服务器无法处理，因此拒绝请求',
    414: '请求的URL过长（URL通常为网址），服务器无法处理',
    415: '服务器无法处理请求附带的媒体格式',
    416: '客户端请求的范围无效',
    422: '当创建一个对象时，发生一个验证错误',
    500: '服务器发生错误，请检查服务器',
    501: '服务器不支持请求的功能，无法完成请求',
    502: '网关错误，从远程服务器接收到了一个无效的响应',
    503: '服务不可用，服务器暂时过载或维护',
    504: '网关超时，充当网关或代理的服务器，未及时从远端服务器获取请求',
    505: '服务器不支持请求的HTTP协议的版本，无法完成处理'
  }
oe.interceptors.request.use(
  function (e) {
    var s
    if (localStorage.getItem(window.envConfig.ROOT_APP_INFO)) {
      const t =
        null ==
        (s = JSON.parse(localStorage.getItem(window.envConfig.ROOT_APP_INFO)))
          ? void 0
          : s.token
      e.headers['X-Access-Token'] = t
    }
    return e
  },
  function (e) {
    return Promise.reject(e)
  }
),
  oe.interceptors.response.use(
    function (e) {
      if (
        e &&
        e.data &&
        e.data.code &&
        0 != e.data.code &&
        200 != e.data.code
      ) {
        const s = e.data.message || de[e.data.code]
        a.error({ message: '请求错误 :', description: s })
      }
      return e
    },
    function (e) {
      if (e.message.includes('timeout'))
        return (
          a.error({ message: '超时错误', description: '请检查网络或稍后再试' }),
          Promise.reject(e)
        )
      const s = e.response
      if (s && s.status) {
        const e = de[s.status] || s.statusText,
          { status: t, config: r } = s
        a.error({ message: '请求错误 :', description: e }),
          (500 != t && 401 != t) || ce(s.statusText)
      } else
        s ||
          (a.error({
            description:
              '您的网络发生异常，无法连接服务器，可能为跨域、无效令牌、网络未连接等相关原因',
            message: '网络异常'
          }),
          localStorage.removeItem(window.envConfig.ROOT_APP_INFO),
          setTimeout(() => {
            window.location.reload()
          }, 1e3))
      return Promise.reject(e)
    }
  )
const ce = e => {
  e.includes('Token失效')
    ? c.error({
        title: '登录已过期',
        content: '很抱歉，登录已过期，请重新登录',
        okText: '重新登录',
        onOk: () => {
          localStorage.removeItem(window.envConfig.ROOT_APP_INFO),
            setTimeout(() => {
              window.location.reload()
            }, 500)
        }
      })
    : (localStorage.removeItem(window.envConfig.ROOT_APP_INFO),
      setTimeout(() => {
        window.location.reload()
      }, 1500))
}
let me = window.envConfig.API_BASE_PORT
function ue (e, s, t) {
  switch (((s = s.includes(me) ? s : me + s), e)) {
    case 'get':
      return oe({ url: s, method: 'get', params: t })
    case 'post':
      return oe({ url: s, method: 'post', data: t })
    case 'delete':
      return oe({ url: s, method: 'delete', params: t })
    case 'put':
      return oe({ url: s, method: 'put', data: t })
    case 'options':
      return oe({ url: s, method: 'options', params: t })
    case 'upLoad':
      return oe({
        url: s,
        method: 'post',
        data: t,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    case 'download':
      let e = 0,
        r = 0
      return oe({
        url: s,
        method: 'post',
        data: t,
        responseType: 'blob',
        onDownloadProgress: s => {
          s.lengthComputable
            ? ((e = s.loaded), (r = s.total))
            : ((e = s.loaded), (r = Math.max(r, e + 1024)))
          Math.round((e / r) * 100)
        }
      })
    default:
      return a.error({
        message: '请求方式错误',
        description: '找不到此方法，请认真检查是否拼写错误'
      })
  }
}
const he = {
  login: 'sys/login',
  getMenuBar: 'sys/permission/getUserPermissionByToken',
  UserList: 'sys/user/list',
  userAdd: 'sys/user/add',
  userEdit: 'sys/user/edit',
  userDelete: 'sys/user/delete',
  changePassword: 'sys/user/changePassword',
  roleList: 'sys/role/queryall',
  getRoleId: 'sys/user/queryUserRole',
  getDeptTreeList: 'sys/tmpDeptInfo/list',
  duplicateCheck: 'sys/duplicate/check',
  getmenulist: 'sys/permission/list',
  deletePermission: 'sys/permission/delete',
  addPermission: 'sys/permission/add',
  editPermission: 'sys/permission/edit',
  deleteAllPermission: 'sys/permission/deleteBatch',
  queryRoleList: 'sys/role/list',
  roleDelete: 'sys/role/delete',
  addRole: 'sys/role/add',
  editRole: 'sys/role/edit',
  userRoleList: 'sys/user/userRoleList',
  deleteUserRole: 'sys/user/deleteUserRole',
  addSysUserRole: 'sys/user/addSysUserRole',
  queryMenuTreeList: 'sys/role/queryTreeList',
  queryRolePermission: 'sys/permission/queryRolePermission',
  saveRolePermission: 'sys/permission/saveRolePermission',
  getDeptTree: 'sys/tmpDeptInfo/getDeptTree'
}
for (let Ye in he) he[Ye] = window.envConfig.API_BASE_PORT + '/' + he[Ye]
const pe = {
    getLogin: e => ue('post', he.login, e),
    getMenuBar: e => ue('get', he.getMenuBar, e),
    getUserList: e => ue('get', he.UserList, e),
    addUser: e => ue('post', he.userAdd, e),
    userEdit: e => ue('post', he.userEdit, e),
    changePassword: e => ue('post', he.changePassword, e),
    userDelete: e => ue('post', he.userDelete + '?id=' + e.id, e),
    getRoleList: e => ue('get', he.roleList, e),
    getRoleId: e => ue('get', he.getRoleId, e),
    getDeptTreeList: e => ue('post', he.getDeptTreeList, e),
    duplicateCheck: e => ue('get', he.duplicateCheck, e),
    getmenulist: e => ue('get', he.getmenulist, e),
    deletePermission: e => ue('post', he.deletePermission + '?id=' + e.id, e),
    deleteAllPermission: e =>
      ue('post', he.deleteAllPermission + '?ids=' + e.ids, e),
    addPermission: e => ue('post', he.addPermission, e),
    editPermission: e => ue('post', he.editPermission, e),
    queryRoleList: e => ue('get', he.queryRoleList, e),
    roleDelete: e => ue('post', he.roleDelete + '?id=' + e.id, e),
    addRole: e => ue('post', he.addRole, e),
    editRole: e => ue('post', he.editRole, e),
    userRoleList: e => ue('get', he.userRoleList, e),
    deleteUserRole: e =>
      ue(
        'post',
        `${he.deleteUserRole}?roleId=${e.roleId}&userId=${e.userId}`,
        e
      ),
    addSysUserRole: e => ue('post', he.addSysUserRole, e),
    queryMenuTreeList: e => ue('get', he.queryMenuTreeList, e),
    queryRolePermission: e => ue('get', he.queryRolePermission, e),
    saveRolePermission: e => ue('post', he.saveRolePermission, e),
    getDeptTree: e => ue('post', he.getDeptTree, e),
    upLoadFileNew: (e, s) => {
      const { file: t } = s,
        r = new FormData()
      return r.append('file', t), ue('upLoad', e, r)
    },
    downloadFile: (e, s, t) => (
      m.loading('正在下载文件，请稍后'),
      ue('download', e, t).then(e => {
        let t = e.data
        if (!t || 0 === t.size)
          return void a.error({
            message: '请求错误',
            description: '文件下载失败，请稍后重试'
          })
        if (void 0 !== window.navigator.msSaveBlob)
          window.navigator.msSaveBlob(new Blob([t]), s)
        else {
          const e = window.URL.createObjectURL(new Blob([t])),
            r = document.createElement('a')
          ;(r.style.display = 'none'),
            (r.href = e),
            r.setAttribute('download', s),
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r),
            window.URL.revokeObjectURL(e)
        }
        let r = 0
        const n = 'download-progress-notification'
        a.open({
          key: n,
          message: '下载进度',
          description: `已完成 ${r.toFixed(2)} %`
        })
        const i = setInterval(() => {
          r < 100
            ? ((r += (100 / 6e3) * 100),
              a.open({
                key: n,
                message: '下载进度',
                description: `已完成 ${Math.min(r, 100).toFixed(2)} %`
              }))
            : (clearInterval(i),
              setTimeout(() => {
                a.close(n)
              }, 1e3))
        }, 60)
      })
    )
  },
  ge = () =>
    pe.getMenuBar({ _t: '1682558421' }).then(e => {
      if ((e.data.code = 200)) {
        let s = e.data.result.menu,
          t = JSON.parse(localStorage.getItem(window.envConfig.ROOT_APP_INFO))
        return (
          (t.menuList = e.data.result.menu),
          localStorage.setItem(
            window.envConfig.ROOT_APP_INFO,
            JSON.stringify(t)
          ),
          s
        )
      }
    }),
  xe = {
    reload: !1,
    darkTheme: !1,
    weakOrGray: !1,
    ThemeStyle: 'dark',
    pattern: 'broadside'
  },
  ye = u((e = xe, s) => {
    const { type: t, data: r } = s
    switch (t) {
      case 'reload':
        return { reload: r }
      case 'darkTheme':
        return { darkTheme: r }
      case 'weakOrGray':
        return { weakOrGray: r }
      case 'ThemeStyle':
        return { ThemeStyle: r }
      case 'pattern':
        return { pattern: r }
      default:
        return xe
    }
  })
let fe = [
  {
    label: '首页',
    key: '/dashboard/analysis',
    element: h.lazy(() =>
      ae(
        () => import('./analysis/index.48205973.js'),
        [
          './analysis\\index.48205973.js',
          '.store\\.store.b566568b.js',
          '..\\css\\index.9b4ef82d.css'
        ],
        import.meta.url
      )
    ),
    icon: n.jsx(p, {}),
    disabled: !1
  },
  {
    label: '系统管理',
    key: '/system',
    element: '',
    icon: n.jsx(g, {}),
    children: [
      {
        label: '用户管理',
        key: '/system/user',
        element: h.lazy(() =>
          ae(
            () => import('./user/index.4f69d665.js'),
            [
              './user\\index.4f69d665.js',
              '.store\\.store.b566568b.js',
              '..\\css\\index.7491c67a.css'
            ],
            import.meta.url
          )
        ),
        icon: null,
        disabled: !1
      },
      {
        label: '角色管理',
        key: '/system/roleUserList',
        element: h.lazy(() =>
          ae(
            () => import('./roleUserList/index.ba2aa423.js'),
            [
              './roleUserList\\index.ba2aa423.js',
              '.store\\.store.b566568b.js',
              '..\\css\\index.bc7a56af.css'
            ],
            import.meta.url
          )
        ),
        icon: null,
        disabled: !1
      },
      {
        label: '菜单管理',
        key: '/system/permission',
        element: h.lazy(() =>
          ae(
            () => import('./permission/index.0052af29.js'),
            [
              './permission\\index.0052af29.js',
              '.store\\.store.b566568b.js',
              './permissionModule\\index.00ca43d4.js',
              './permissionModule\\iconModule.c56b59d4.js',
              '..\\css\\iconModule.87416ac2.css',
              '..\\css\\index.3303f493.css'
            ],
            import.meta.url
          )
        ),
        icon: null,
        disabled: !1
      },
      {
        label: '机构管理',
        key: '/system/deptNew',
        element: h.lazy(() =>
          ae(
            () => import('./deptNew/index.003e57d6.js'),
            ['./deptNew\\index.003e57d6.js', '.store\\.store.b566568b.js'],
            import.meta.url
          )
        ),
        icon: null,
        disabled: !1
      }
    ],
    disabled: !1
  }
]
function je (e) {
  let s = e.split('/').length - 1,
    t = Object.assign({
      '/src/pages/commonview/index.jsx': () =>
        ae(() => Promise.resolve().then(() => Ue), void 0, import.meta.url),
      '/src/pages/commonview/index.less': () =>
        ae(
          () => Promise.resolve({}),
          ['..\\css\\index.e7f88f5f.css'],
          import.meta.url
        ),
      '/src/pages/login/index.jsx': () =>
        ae(() => Promise.resolve().then(() => Ke), void 0, import.meta.url),
      '/src/pages/login/index.less': () =>
        ae(
          () => Promise.resolve({}),
          ['..\\css\\index.2e26f604.css'],
          import.meta.url
        )
    })
  switch (s) {
    case 0:
      t = Object.assign({
        '/src/pages/commonview/index.jsx': () =>
          ae(() => Promise.resolve().then(() => Ue), void 0, import.meta.url),
        '/src/pages/commonview/index.less': () =>
          ae(
            () => Promise.resolve({}),
            ['..\\css\\index.e7f88f5f.css'],
            import.meta.url
          ),
        '/src/pages/login/index.jsx': () =>
          ae(() => Promise.resolve().then(() => Ke), void 0, import.meta.url),
        '/src/pages/login/index.less': () =>
          ae(
            () => Promise.resolve({}),
            ['..\\css\\index.2e26f604.css'],
            import.meta.url
          )
      })
      break
    case 1:
      t = Object.assign({
        '/src/pages/dashboard/analysis/index.jsx': () =>
          ae(
            () => import('./analysis/index.48205973.js'),
            [
              './analysis\\index.48205973.js',
              '.store\\.store.b566568b.js',
              '..\\css\\index.9b4ef82d.css'
            ],
            import.meta.url
          ),
        '/src/pages/dashboard/analysis/index.less': () =>
          ae(
            () => Promise.resolve({}),
            ['..\\css\\index.9b4ef82d.css'],
            import.meta.url
          ),
        '/src/pages/system/deptNew/index.jsx': () =>
          ae(
            () => import('./deptNew/index.003e57d6.js'),
            ['./deptNew\\index.003e57d6.js', '.store\\.store.b566568b.js'],
            import.meta.url
          ),
        '/src/pages/system/deptNew/index.less': () =>
          ae(() => import('./deptNew/index.e9220a04.js'), [], import.meta.url),
        '/src/pages/system/permission/index.jsx': () =>
          ae(
            () => import('./permission/index.0052af29.js'),
            [
              './permission\\index.0052af29.js',
              '.store\\.store.b566568b.js',
              './permissionModule\\index.00ca43d4.js',
              './permissionModule\\iconModule.c56b59d4.js',
              '..\\css\\iconModule.87416ac2.css',
              '..\\css\\index.3303f493.css'
            ],
            import.meta.url
          ),
        '/src/pages/system/permission/index.less': () =>
          ae(
            () => Promise.resolve({}),
            ['..\\css\\index.3303f493.css'],
            import.meta.url
          ),
        '/src/pages/system/roleUserList/index.jsx': () =>
          ae(
            () => import('./roleUserList/index.ba2aa423.js'),
            [
              './roleUserList\\index.ba2aa423.js',
              '.store\\.store.b566568b.js',
              '..\\css\\index.bc7a56af.css'
            ],
            import.meta.url
          ),
        '/src/pages/system/roleUserList/index.less': () =>
          ae(
            () => Promise.resolve({}),
            ['..\\css\\index.4c62cd3a.css'],
            import.meta.url
          ),
        '/src/pages/system/user/index.jsx': () =>
          ae(
            () => import('./user/index.4f69d665.js'),
            [
              './user\\index.4f69d665.js',
              '.store\\.store.b566568b.js',
              '..\\css\\index.7491c67a.css'
            ],
            import.meta.url
          ),
        '/src/pages/system/user/index.less': () =>
          ae(
            () => Promise.resolve({}),
            ['..\\css\\index.7491c67a.css'],
            import.meta.url
          )
      })
      break
    case 2:
      t = Object.assign({
        '/src/pages/system/permission/permissionModule/iconModule.jsx': () =>
          ae(
            () => import('./permissionModule/iconModule.c56b59d4.js'),
            [
              './permissionModule\\iconModule.c56b59d4.js',
              '.store\\.store.b566568b.js',
              '..\\css\\iconModule.87416ac2.css'
            ],
            import.meta.url
          ),
        '/src/pages/system/permission/permissionModule/iconModule.less': () =>
          ae(
            () => Promise.resolve({}),
            ['..\\css\\iconModule.87416ac2.css'],
            import.meta.url
          ),
        '/src/pages/system/permission/permissionModule/index.jsx': () =>
          ae(
            () => import('./permissionModule/index.00ca43d4.js'),
            [
              './permissionModule\\index.00ca43d4.js',
              '.store\\.store.b566568b.js',
              './permissionModule\\iconModule.c56b59d4.js',
              '..\\css\\iconModule.87416ac2.css'
            ],
            import.meta.url
          ),
        '/src/pages/system/permission/permissionModule/index.less': () =>
          ae(
            () => import('./permissionModule/index.e9220a04.js'),
            [],
            import.meta.url
          )
      })
      break
    case 3:
    case 4:
      t = Object.assign({})
  }
  let r = t[`/src/pages/${e}/index.jsx`]
  return (
    r ||
      (r = () =>
        ae(
          () => import('./error302/index.88888323.js'),
          [
            './error302\\index.88888323.js',
            '.store\\.store.b566568b.js',
            '..\\css\\index.716cb16b.css'
          ],
          import.meta.url
        )),
    r
  )
}
ye.subscribe(() => {
  const { reload: e } = ye.getState()
  e && location.reload()
})
const _e =
    null ==
    (e = JSON.parse(localStorage.getItem(window.envConfig.ROOT_APP_INFO)))
      ? void 0
      : e.token,
  we =
    null ==
    (s = JSON.parse(localStorage.getItem(window.envConfig.ROOT_APP_INFO)))
      ? void 0
      : s.menuList
if ((_e && ge(), _e && we)) {
  let e = function (s) {
    for (let r = 0; r < s.length; r++) {
      const a = s[r]
      let n = a.icon
      n && (a.icon = ((t = n), x.createElement(y[t]))),
        a.children && e(a.children)
    }
    var t
  }
  ;(fe = (function e (s) {
    for (let t = 0; t < s.length; t++) {
      let r = s[t]
      ;(r.label = r.meta.title),
        (r.key = r.path),
        (r.icon = r.meta.icon),
        delete r.meta.title,
        delete r.path,
        delete r.meta.icon,
        (r.element = h.lazy(je(r.component))),
        r.children && e(r.children)
    }
    return s
  })(we)),
    e(fe)
}
const ke = fe,
  ve = '0102030405060708'
function be (e) {
  var s = f.enc.Utf8.parse(ve),
    t = f.enc.Utf8.parse(ve),
    r = f.enc.Utf8.parse(e)
  return f.AES.encrypt(r, t, {
    iv: s,
    mode: f.mode.CBC,
    padding: f.pad.Pkcs7
  }).toString()
}
const Oe = h.forwardRef((e, s) => {
  let [t, r] = h.useState(!1),
    [a] = j.useForm(),
    [i, l] = h.useState(null)
  h.useImperativeHandle(s, () => ({
    setIsModalVisible: r,
    form: a,
    setUserId: l
  }))
  return n.jsx(n.Fragment, {
    children: n.jsx(c, {
      title: '重新设定密码',
      open: t,
      okText: '确认',
      cancelText: '取消',
      onOk: async e => {
        try {
          const e = await a.validateFields()
          ;(e.password = be(e.password)),
            (e.confirmpassword = be(e.confirmpassword)),
            pe.changePassword({ ...e, id: i }).then(e => {
              200 == e.data.code &&
                (m.success(e.data.message), r(!1), a.resetFields())
            })
        } catch (s) {}
      },
      onCancel: () => {
        r(!1), a.resetFields()
      },
      width: '60%',
      className: 'passwordchange',
      children: n.jsxs(j, {
        name: 'basic',
        labelCol: { span: 3 },
        wrapperCol: { span: 20 },
        autoComplete: 'off',
        initialValues: { remember: !0 },
        form: a,
        children: [
          n.jsx(j.Item, {
            label: '用户账号',
            name: 'username',
            children: n.jsx(_, { disabled: !0 })
          }),
          n.jsx(j.Item, {
            label: '登录密码',
            name: 'password',
            rules: [
              { required: !0, message: '请输入登录密码!' },
              {
                pattern:
                  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{6,}$/,
                message: '密码由至少6位数字、大小写字母和特殊符号组成!'
              }
            ],
            children: n.jsx(_.Password, { placeholder: '请输入密码' })
          }),
          n.jsx(j.Item, {
            label: '确认密码',
            name: 'confirmpassword',
            rules: [
              { required: !0, message: '请确认密码!' },
              ({ getFieldValue: e }) => ({
                validator: (s, t) =>
                  t && e('password') !== t
                    ? Promise.reject('两次密码不一致，请重新输入')
                    : Promise.resolve()
              })
            ],
            children: n.jsx(_.Password, { placeholder: '请确认密码' })
          })
        ]
      })
    })
  })
})
function Pe () {
  let e = new Date()
  return e.getHours() >= 6 && e.getHours() < 12
    ? '上午'
    : e.getHours() >= 12 && e.getHours() < 18
    ? '下午'
    : '晚上'
}
const Te = (e, s, t = null, r = '') => {
    w.set(e, s, { expires: t, path: r })
  },
  Re = e => w.get(e),
  Ee = (e, s = null, t = '') => w.remove(e, { expires: s, path: t }),
  Se = h.forwardRef((e, s) => {
    let [t, r] = h.useState(!1),
      [a, i] = h.useState(!1),
      [l, o] = h.useState(!1),
      [d, c] = h.useState(!1),
      [u, p] = h.useState(!1),
      [g, x] = h.useState(!1),
      [y, f] = h.useState(window.envConfig.ROOT_APP_COLOR),
      [j, _] = h.useState('light'),
      [w, R] = h.useState('broadside')
    const E = Re('ThemeBgColor'),
      S = Re('ThemeStyle'),
      C = Re('pattern'),
      N = Re('widthStyle'),
      I = Re('navStyle')
    h.useImperativeHandle(s, () => ({ setSettingVisible: r })),
      h.useEffect(() => {
        switch (Re('weakOrGray')) {
          case 'gray':
            o(!0)
            break
          case 'weak':
            c(!0)
        }
        Re('darkTheme') && i(!0),
          C && R(C),
          E && f(E),
          S && _(S),
          p('true' == N),
          x('true' == I)
      }, [])
    return n.jsx(n.Fragment, {
      children: n.jsxs(k, {
        headerStyle: { display: 'none' },
        open: t,
        closable: !0,
        onClose: () => {
          r(!1)
        },
        className: 'Setting',
        width: '20%',
        children: [
          n.jsx(v, { children: '模式设置' }),
          n.jsxs('div', {
            className: 'theme-item',
            children: [
              n.jsx('span', { children: '深夜模式' }),
              n.jsx(b, {
                checked: a,
                checkedChildren: '开启',
                unCheckedChildren: '关闭',
                onChange: e =>
                  (e => {
                    i(e), ye.dispatch({ type: 'darkTheme', data: e })
                  })(e)
              })
            ]
          }),
          n.jsxs('div', {
            className: 'theme-item',
            children: [
              n.jsx('span', { children: '灰色模式' }),
              n.jsx(b, {
                checked: l,
                checkedChildren: '开启',
                unCheckedChildren: '关闭',
                onChange: e =>
                  (e => {
                    o(e),
                      e
                        ? (ye.dispatch({ type: 'weakOrGray', data: 'gray' }),
                          c(!1))
                        : ye.dispatch({ type: 'weakOrGray', data: !1 })
                  })(e)
              })
            ]
          }),
          n.jsxs('div', {
            className: 'theme-item',
            children: [
              n.jsx('span', { children: '色弱模式' }),
              n.jsx(b, {
                checked: d,
                checkedChildren: '开启',
                unCheckedChildren: '关闭',
                onChange: e =>
                  (e => {
                    c(e),
                      e
                        ? (ye.dispatch({ type: 'weakOrGray', data: 'weak' }),
                          o(!1))
                        : ye.dispatch({ type: 'weakOrGray', data: !1 })
                  })(e)
              })
            ]
          }),
          n.jsx(v, { children: '主题颜色' }),
          n.jsx('div', {
            className: 'theme-bgd',
            children: [
              { key: '极客蓝（默认）', color: '#1890ff' },
              { key: '深海蓝', color: '#2f54eb' },
              { key: '火山', color: '#f5222d' },
              { key: '浅红', color: '#fa541c' },
              { key: '日暮', color: '#faad14' },
              { key: '明青', color: '#13C2C2' },
              { key: '草绿', color: '#52c41a' },
              { key: '熏紫', color: '#a876ed' }
            ].map((e, s) =>
              n.jsx(
                O,
                {
                  title: e.key,
                  children: n.jsx(P, {
                    color: e.color,
                    onClick: () =>
                      (e => {
                        Te('ThemeBgColor', e.color, 365),
                          m.loading('主题编译中，请稍后'),
                          f(e.color),
                          window.location.reload()
                      })(e),
                    children: y == e.color ? n.jsx(T, {}) : ''
                  })
                },
                s
              )
            )
          }),
          n.jsx(v, { children: '导航风格' }),
          n.jsxs('div', {
            className: 'theme-style',
            children: [
              n.jsx(O, {
                title: '暗色菜单风格',
                children: n.jsxs('div', {
                  className: 'theme-style-dark',
                  onClick: () => {
                    _('dark'),
                      Te('ThemeStyle', 'dark', 365),
                      ye.dispatch({ type: 'ThemeStyle', data: 'dark' }),
                      m.loading('风格切换中，请稍后'),
                      window.location.reload()
                  },
                  children: [
                    n.jsx('div', { className: 'theme-style-dark-left' }),
                    n.jsxs('div', {
                      className: 'theme-style-dark-right',
                      children: [
                        n.jsx('div', {
                          className: 'theme-style-dark-right-top'
                        }),
                        n.jsx('div', {
                          className: 'theme-style-dark-right-bot',
                          children: 'dark' == j ? n.jsx(T, {}) : ''
                        })
                      ]
                    })
                  ]
                })
              }),
              n.jsx(O, {
                title: '高亮菜单风格',
                children: n.jsxs('div', {
                  className: 'theme-style-light',
                  onClick: () => {
                    _('light'),
                      Te('ThemeStyle', 'light', 365),
                      ye.dispatch({ type: 'ThemeStyle', data: 'light' }),
                      m.loading('风格切换中，请稍后'),
                      window.location.reload()
                  },
                  children: [
                    n.jsx('div', { className: 'theme-style-light-left' }),
                    n.jsxs('div', {
                      className: 'theme-style-light-right',
                      children: [
                        n.jsx('div', {
                          className: 'theme-style-light-right-top'
                        }),
                        n.jsx('div', {
                          className: 'theme-style-light-right-bot',
                          children: 'light' == j ? n.jsx(T, {}) : ''
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          }),
          n.jsx(v, { children: '导航模式' }),
          n.jsxs('div', {
            className: 'theme-style',
            children: [
              n.jsx(O, {
                title: '侧边导航模式',
                children: n.jsxs('div', {
                  className: 'theme-style-dark',
                  onClick: () => {
                    R('broadside'),
                      ye.dispatch({ type: 'pattern', data: 'broadside' }),
                      Te('pattern', 'broadside', 365),
                      m.loading('模式切换中，请稍后'),
                      window.location.reload()
                  },
                  children: [
                    n.jsx('div', { className: 'theme-style-dark-left' }),
                    n.jsxs('div', {
                      className: 'theme-style-dark-right',
                      children: [
                        n.jsx('div', {
                          className: 'theme-style-dark-right-top'
                        }),
                        n.jsx('div', {
                          className: 'theme-style-dark-right-bot',
                          children: 'broadside' == w ? n.jsx(T, {}) : ''
                        })
                      ]
                    })
                  ]
                })
              }),
              n.jsx(O, {
                title: '顶部导航模式',
                children: n.jsxs('div', {
                  className: 'dingbu-style',
                  onClick: () => {
                    R('top'),
                      ye.dispatch({ type: 'pattern', data: 'top' }),
                      Te('pattern', 'top', 365),
                      p(!0),
                      Te('widthStyle', !0, 365),
                      m.loading('模式切换中，请稍后'),
                      window.location.reload()
                  },
                  children: [
                    n.jsx('div', { className: 'dingbu-style-top' }),
                    n.jsx('div', {
                      className: 'dingbu-style-bottom',
                      children: n.jsx('div', {
                        className: 'dingbu-style-bottom-bot',
                        children: 'top' == w ? n.jsx(T, {}) : ''
                      })
                    })
                  ]
                })
              })
            ]
          }),
          n.jsxs('div', {
            className: 'theme-item',
            children: [
              n.jsx('span', { children: '内容区域宽度' }),
              n.jsx('span', {
                style: { fontSize: '.6vw', color: '#bbb' },
                children: '只在顶部导航模式生效'
              }),
              n.jsx(b, {
                checked: u,
                disabled: 'broadside' == w,
                checkedChildren: '固定',
                unCheckedChildren: '流式',
                onChange: e =>
                  (e => {
                    p(e), Te('widthStyle', e, 365), window.location.reload()
                  })(e)
              })
            ]
          }),
          n.jsxs('div', {
            className: 'theme-item',
            children: [
              n.jsx('span', { children: '固定  Header' }),
              n.jsx('span', {
                style: { fontSize: '.6vw', color: '#bbb' },
                children: '只在顶部导航模式生效'
              }),
              n.jsx(b, {
                checked: g,
                disabled: 'broadside' == w,
                checkedChildren: '开启',
                unCheckedChildren: '关闭',
                onChange: e =>
                  (e => {
                    x(e), Te('navStyle', e, 365), window.location.reload()
                  })(e)
              })
            ]
          })
        ]
      })
    })
  }),
  Ce = h.forwardRef((e, s) => {
    const [t, r] = h.useState('')
    h.useImperativeHandle(s, () => ({ showContext: l }))
    const a = s => {
        switch (s) {
          case 'left':
            e.closeLeftMenu(t)
            break
          case 'right':
            e.closeRightMenu(t)
            break
          case 'orther':
            e.closeElseMenu(t)
        }
      },
      i = [
        { text: '关闭左侧', key: 'left', icon: n.jsx(R, {}), handleClick: a },
        { text: '关闭右侧', key: 'right', icon: n.jsx(E, {}), handleClick: a },
        { text: '关闭其它', key: 'orther', icon: n.jsx(S, {}), handleClick: a }
      ],
      l = e => {
        if (
          'SPAN' === e.target.nodeName &&
          /.*[\u4e00-\u9fa5]+.*$/.test(e.target.innerText)
        ) {
          const s = e.clientX,
            t = e.clientY,
            a = document.getElementsByClassName('rightMenu')[0]
          ;(a.style.display = 'block'),
            (a.style.position = 'absolute'),
            (a.style.left = s + 'px'),
            (a.style.top = t + 'px'),
            r(e.target.innerText),
            (document.onclick = function () {
              a.style.display = 'none'
            })
        }
      }
    return n.jsx(n.Fragment, {
      children: n.jsx('div', {
        className: 'rightMenu',
        style: { display: 'none' },
        children: i.map(e =>
          n.jsxs(
            'li',
            {
              onClick: () => e.handleClick(e.key),
              children: [
                n.jsxs('span', { children: ['  ', e.icon] }),
                n.jsxs('span', { children: [' ', e.text] })
              ]
            },
            e.key
          )
        )
      })
    })
  }),
  { Header: Ne, Content: Ie, Footer: Le, Sider: Ae } = N,
  De = () => {
    let e = h.useRef(null),
      s = h.useRef(null)
    C.start(),
      setTimeout(() => {
        C.done()
      }, 200)
    let l = window.envConfig.ROOT_APP_NAME,
      o = r(),
      d = t(),
      [m, u] = h.useState(d.pathname),
      [p, g] = h.useState(d.pathname),
      [y, f] = h.useState(!1),
      [j, _] = h.useState(!0),
      [w, k] = h.useState([]),
      [v, b] = h.useState('dark'),
      [P, T] = h.useState('broadside'),
      [R, E] = h.useState(),
      [J, H] = h.useState(),
      [K, Z] = h.useState(!1),
      X = Re('ThemeStyle') || 'light',
      W = Re('pattern'),
      Y = Re('widthStyle'),
      Q = Re('navStyle')
    ke.map(e => {
      '首页' == e.label && w.push(e)
    }),
      h.useEffect(() => {
        var e
        if (localStorage.getItem('ZhuXiaoJia')) {
          const s =
            null ==
            (e = JSON.parse(
              localStorage.getItem(window.envConfig.ROOT_APP_INFO)
            ))
              ? void 0
              : e.userInfo
          a.success({
            message: s.realname,
            description: '欢迎登录，' + Pe() + '好'
          })
        }
        setTimeout(() => {
          localStorage.removeItem('ZhuXiaoJia')
        }, 2e3)
      }, []),
      h.useEffect(() => {
        if (K) {
          const e = document.documentElement
          e.requestFullscreen
            ? e.requestFullscreen()
            : e.mozRequestFullScreen
            ? e.mozRequestFullScreen()
            : e.webkitRequestFullscreen
            ? e.webkitRequestFullscreen()
            : e.msRequestFullscreen && e.msRequestFullscreen()
        } else
          (document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement) &&
            (document.exitFullscreen
              ? document.exitFullscreen()
              : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.webkitExitFullscreen
              ? document.webkitExitFullscreen()
              : document.msExitFullscreen && document.msExitFullscreen())
      }, [K]),
      h.useEffect(() => {
        if (X)
          if ((b(X), 'light' == X)) {
            document.getElementsByClassName(
              'ant-layout-sider'
            )[0].style.background = '#fff'
          } else {
            document.getElementsByClassName(
              'ant-layout-sider'
            )[0].style.background = '#001529'
          }
        W && T(W),
          E(Y),
          H(Q),
          ye.subscribe(() => {
            const { pattern: e } = ye.getState()
            T(e)
          })
        const e = document.getElementsByClassName('ant-tabs')[0]
        return (
          e.addEventListener('contextmenu', ae),
          () => {
            e.removeEventListener('contextmenu', ae)
          }
        )
      }, [])
    const ee = e => {
      o(e.key), u(e.key)
    }
    !(function e (s) {
      var t
      for (let r = 0; r < s.length; r++)
        (s[r].colordisabled = 'false'),
          d.pathname == (null == (t = s[r]) ? void 0 : t.key) &&
            ((document.title =
              '首页' == s[r].label
                ? window.envConfig.ROOT_APP_NAME
                : s[r].label + ' - ' + window.envConfig.ROOT_APP_NAME),
            w.push(s[r]),
            (s[r].colordisabled = 'true')),
          s[r].children && e(s[r].children)
    })(ke)
    let se = {}
    w = w.reduce((e, s) => (se[s.key] || (se[s.key] = e.push(s)), e), [])
    const te = (e, s) => {
        1 != w.length &&
          (d.pathname == e.key &&
            (s == w.length - 1
              ? (o(w[s - 1].key), u(w[s - 1].key))
              : (o(w[s + 1].key), u(w[s + 1].key))),
          w.splice(s, 1),
          k(w))
      },
      re = e => {
        o(e.key), u(e.key)
      },
      ae = e => {
        e.preventDefault(), s.current.showContext(e)
      }
    return n.jsx(n.Fragment, {
      children: n.jsxs(N, {
        className: 'commonview',
        children: [
          'broadside' == P
            ? n.jsxs(Ae, {
                className: 'site-layout-background Sider-menu',
                trigger: null,
                collapsible: !0,
                collapsed: y,
                children: [
                  n.jsxs('div', {
                    className: 'logo',
                    children: [
                      n.jsx('img', { src: ie, alt: '' }),
                      j
                        ? n.jsx('span', {
                            className: 'logoTitle',
                            style: {
                              color: X && 'light' == X ? '#000000D9' : ''
                            },
                            children: l
                          })
                        : ''
                    ]
                  }),
                  n.jsx(I, {
                    theme: v,
                    onClick: ee,
                    style: { width: '100%' },
                    defaultOpenKeys: [p],
                    selectedKeys: [m],
                    mode: 'inline',
                    items: ke
                  })
                ]
              })
            : '',
          n.jsxs(N, {
            className: 'site-layout',
            children: [
              n.jsxs(Ne, {
                className: 'site-layout-background',
                style: {
                  padding: 'broadside' == P ? '0 1.5vw 0 0' : 0,
                  position: 'top' == P && 'true' == J ? 'fixed' : '',
                  minWidth: 'top' == P && 'true' == J ? '100%' : '',
                  top: 'top' == P && 'true' == J ? '0' : ''
                },
                children: [
                  'broadside' == P
                    ? x.createElement(y ? L : A, {
                        className: 'trigger',
                        onClick: () => {
                          f(!y), _(!j)
                        }
                      })
                    : '',
                  n.jsxs('div', {
                    className: 'headBox',
                    style: {
                      background:
                        'dark' == v && 'top' == P ? '#001529' : '#fff',
                      color: 'dark' == v && 'top' == P ? '#fff' : '#000',
                      padding: 'top' == P && 'true' == R ? '0 10vw' : '0 0.5vw',
                      minWidth: 'top' == P && 'true' == J ? '78.13vw' : '100%'
                    },
                    children: [
                      n.jsxs('span', {
                        children: [
                          'broadside' == P
                            ? '欢迎登录'
                            : n.jsx('img', {
                                src: ie,
                                alt: '',
                                className: 'headBox-logo'
                              }),
                          l
                        ]
                      }),
                      'top' == P
                        ? n.jsx(I, {
                            theme: v,
                            onClick: ee,
                            defaultOpenKeys: [p],
                            selectedKeys: [m],
                            mode: 'horizontal',
                            items: ke,
                            style: {
                              borderBottom: 0,
                              width: 'top' == P ? '60%' : ''
                            }
                          })
                        : '',
                      n.jsxs('div', {
                        className: 'userinfo',
                        children: [
                          'top' == P
                            ? ''
                            : n.jsx(Ve, {
                                toRouter: e => {
                                  re(e)
                                }
                              }),
                          n.jsx(O, {
                            title: K ? '退出全屏' : '全屏显示',
                            children: n.jsx('span', {
                              className: 'user-Setting',
                              onClick: () => Z(!K),
                              children: K ? n.jsx(D, {}) : n.jsx(F, {})
                            })
                          }),
                          n.jsx(O, {
                            title: '后台布局设置',
                            children: n.jsx('span', {
                              className: 'user-Setting',
                              onClick: () => {
                                e.current.setSettingVisible(!0)
                              },
                              children: n.jsx(M, { spin: !0 })
                            })
                          }),
                          n.jsx(Fe, {}),
                          n.jsxs('span', {
                            className: 'tuichu',
                            onClick: () => {
                              c.confirm({
                                title: '确认退出登录',
                                icon: n.jsx(G, {}),
                                content:
                                  '退出登录后将清除账号所有本地信息及数据！',
                                okText: '确认',
                                cancelText: '取消',
                                style: { top: '10vw', width: '20vw' },
                                onOk: async () => {
                                  localStorage.removeItem(
                                    window.envConfig.ROOT_APP_INFO
                                  ),
                                    setTimeout(() => {
                                      window.location.reload()
                                    }, 1e3)
                                }
                              })
                            },
                            children: [n.jsx(V, {}), '退出登录']
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              n.jsx('div', {
                className: 'tabsList-box',
                style: {
                  padding: 'top' == P && 'true' == R ? '0 10vw' : '0 0 0 0.5vw',
                  marginTop: 'top' == P && 'true' == J ? '3.3vw' : ''
                },
                children: n.jsxs('div', {
                  className: 'tabsList-box-view',
                  children: [
                    n.jsx('div', {
                      className: 'breadcrumb',
                      children: n.jsx(U, {
                        defaultActiveKey: '1',
                        items: w.map((e, s) => {
                          const t = String(s)
                          return {
                            label: n.jsxs('div', {
                              className: 'breadcrumb-box',
                              style: {
                                color:
                                  'true' == e.colordisabled
                                    ? 'var(--main-bg)'
                                    : ''
                              },
                              children: [
                                n.jsx('span', { children: e.icon }),
                                n.jsxs('span', {
                                  onClick: () => {
                                    re(e)
                                  },
                                  className: 'breadcrumbTitle',
                                  children: [' ', e.label]
                                }),
                                0 != s
                                  ? n.jsx(S, {
                                      onClick: () => {
                                        te(e, s)
                                      }
                                    })
                                  : ''
                              ]
                            }),
                            key: t
                          }
                        })
                      })
                    }),
                    n.jsx('div', {
                      className: 'tabBarDetails',
                      children: n.jsx(q, {
                        menu: {
                          items: [
                            {
                              label: n.jsx('a', { children: ' 关闭当前' }),
                              key: '1'
                            },
                            {
                              label: n.jsx('a', { children: ' 关闭其他' }),
                              key: '2'
                            },
                            {
                              label: n.jsx('a', { children: ' 关闭所有' }),
                              key: '3'
                            }
                          ],
                          onClick: e =>
                            (({ key: e }) => {
                              let s = {},
                                t = 0
                              switch (
                                (w.map((e, r) => {
                                  e.key == m && ((s = e), (t = r))
                                }),
                                e)
                              ) {
                                case '1':
                                  '首页' != s.label && te(s, t)
                                  break
                                case '2':
                                  let e = w[0]
                                  ;(w = [e]), w.push(s), k(w)
                                  break
                                case '3':
                                  let r = w[0]
                                  ;(w = [r]), u(r.key), o(r.key), k(w)
                              }
                            })(e)
                        },
                        arrow: { pointAtCenter: !0 },
                        children: n.jsx(B, {})
                      })
                    })
                  ]
                })
              }),
              n.jsx(Ie, {
                style: {
                  margin: 'top' == P && 'true' == R ? '1vw 10vw' : '0.5vw'
                },
                children: n.jsxs(z, {
                  children: [
                    Me(ke),
                    n.jsx($, {
                      path: '*',
                      element: n.jsx(i, { to: '/error404' })
                    })
                  ]
                })
              }),
              n.jsx(Se, { ref: e }),
              n.jsx(Ce, {
                ref: s,
                closeLeftMenu: e => {
                  let s = 0
                  w.map((t, r) => {
                    t.label == e && (s = r)
                  }),
                    w.splice(1, s - 1),
                    k(w)
                },
                closeRightMenu: e => {
                  let s = {},
                    t = 0
                  w.map((r, a) => {
                    r.label == e && ((s = r), (t = a))
                  }),
                    w.splice(t, w.length - 1),
                    o(s.key),
                    k(w)
                },
                closeElseMenu: e => {
                  let s = {}
                  w.map((t, r) => {
                    t.label == e && (s = t)
                  })
                  let t = w[0]
                  ;(w = [t, s]), o(s.key), k(w)
                }
              })
            ]
          })
        ]
      })
    })
  }
function Fe () {
  var e
  const s =
      null ==
      (e = JSON.parse(localStorage.getItem(window.envConfig.ROOT_APP_INFO)))
        ? void 0
        : e.userInfo,
    t = h.useRef(null)
  return n.jsxs(n.Fragment, {
    children: [
      n.jsx(q, {
        menu: {
          items: [{ label: n.jsx('a', { children: ' 修改密码' }), key: '1' }],
          onClick: e =>
            (({ key: e }) => {
              '1' === e &&
                (t.current.setIsModalVisible(!0),
                t.current.form.setFieldsValue({ username: s.username }))
            })(e)
        },
        arrow: { pointAtCenter: !0 },
        children: n.jsx('span', {
          className: 'userName',
          children: null == s ? void 0 : s.realname
        })
      }),
      n.jsx(Oe, { ref: t })
    ]
  })
}
function Me (e) {
  return e.map((e, s) =>
    n.jsxs(
      x.Fragment,
      {
        children: [
          n.jsx(
            $,
            {
              path: e.key,
              element: n.jsx(x.Suspense, {
                fallback: n.jsx(le, {}),
                children: n.jsx(e.element, {})
              })
            },
            s
          ),
          e.children ? Me(e.children) : null
        ]
      },
      s
    )
  )
}
function Ve (e) {
  r()
  const [s, t] = h.useState(void 0),
    [a, i] = h.useState([])
  h.useEffect(() => {
    var e
    const s =
      null ==
      (e = JSON.parse(localStorage.getItem(window.envConfig.ROOT_APP_INFO)))
        ? void 0
        : e.menuList
    !(function e (s) {
      for (let t = 0; t < (null == s ? void 0 : s.length); t++) {
        const r = s[t]
        ;(r.title = r.meta.title),
          (r.value = r.path),
          r.children && e(r.children)
      }
    })(s),
      i(s)
  }, [])
  return n.jsx(n.Fragment, {
    children: n.jsx(J, {
      showSearch: !0,
      className: 'searchmenu',
      value: s,
      dropdownStyle: { maxHeight: 400, overflow: 'auto' },
      placeholder: '搜索菜单',
      allowClear: !0,
      treeDefaultExpandAll: !0,
      filterTreeNode: (e, s) => s.title.includes(e),
      onChange: s => {
        if ((t(s), s)) {
          let t = { key: s }
          e.toRouter(t)
        }
      },
      treeData: a
    })
  })
}
const Ue = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: De },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qe = '235325fdgerteGHdsfsdewred4345341',
  Be = '4387438hfdhfdjhg'
const ze = '' + new URL('../png/xiangyang.a5bdd772.png', import.meta.url).href,
  $e = '' + new URL('../png/login_bg1.c2e696ae.png', import.meta.url).href,
  Je = h.forwardRef((e, s) => {
    let t = 30
    h.useImperativeHandle(s, () => ({ verify: l })),
      h.useEffect(() => {
        let e = document.querySelector('.code')
        i(e, 4),
          setInterval(function () {
            i(e, 4)
          }, 1e3 * t)
      }, [])
    function r () {
      return `rgb(${Math.floor(255 * Math.random())},${Math.floor(
        256 * Math.random()
      )},${Math.floor(256 * Math.random())})`
    }
    function a (e, s = 0) {
      let t = e,
        r = s
      return (
        e < s && ((t = s), (r = e)), Math.floor(Math.random() * (t - r)) + r
      )
    }
    function i (e, s = 4) {
      let n = e.getContext('2d'),
        i = n.canvas.width,
        l = n.canvas.height
      n.lineWidth = 2
      for (let t = 0; t < 1e3; t++) {
        n.beginPath()
        let e = a(i - 2),
          s = a(l - 2)
        n.moveTo(e, s),
          n.lineTo(e + 1, s + 1),
          (n.strokeStyle = r()),
          n.stroke()
      }
      for (let t = 0; t < 20; t++) {
        n.beginPath()
        let e = a(i - 2),
          s = a(l - 2),
          t = a(i - e),
          o = a(l - s)
        n.moveTo(e, s),
          n.lineTo(e + t, s + o),
          (n.strokeStyle = r()),
          n.stroke()
      }
      let o = 'abcdefghijkmnpqrstuvwxyz2345678ABCDEFGHJKLMNPQRSTUVWXYZ'
      ;(n.font = i / 5 + 'px 微软雅黑'), (n.textBaseline = 'middle')
      let d = ''
      for (let t = 0; t < s; t++) {
        n.beginPath(), (n.fillStyle = '#000')
        let e = o[a(55)],
          r = i / s,
          c = a(t * r, (t + 1) * r - i / 5),
          m = a(l / 2 - 10, l / 2 + 10)
        n.fillText(e, c, m), (d += e)
      }
      !(function (e, s, t, r = '/') {
        let a = new Date()
        a.setTime(a.getTime() - 288e5 + 1e3 * t),
          (document.cookie = `${e}=${s};expires=${a};path=${r}`)
      })('code', d, t)
    }
    function l (e) {
      let s = (function (e, s = '/') {
        let t = document.cookie.split('; ')
        for (let r = 0; r < t.length; r++) {
          let s = t[r].split('=')
          if (s[0] === e) return s[1]
        }
      })('code')
      if (s) {
        let t = s.toLowerCase()
        return e.toLowerCase() === t
      }
      i(document.querySelector('.code'))
    }
    return n.jsx(n.Fragment, {
      children: n.jsx('div', {
        className: 'GraphicCode',
        children: n.jsx('canvas', {
          className: 'code',
          width: 150,
          height: 50,
          onClick: () => {
            !(function (e) {
              let s = e.getContext('2d'),
                t = s.canvas.width,
                r = s.canvas.height
              s.clearRect(0, 0, t, r), i(e)
            })(document.querySelector('.code'))
          }
        })
      })
    })
  }),
  Ge = () => {
    const e = r()
    let [s, t] = h.useState(!1),
      a = window.envConfig.ROOT_APP_NAME,
      [i, l] = h.useState('登录'),
      [o] = j.useForm(),
      [d, c] = h.useState(!1),
      u = h.useRef(null)
    h.useEffect(() => {
      JSON.parse(localStorage.getItem(window.envConfig.ROOT_APP_INFO)) &&
        e('/dashboard/analysis')
      const s = Re('loginChecked')
      if (s) {
        let {
          checked: e,
          password: r,
          username: a
        } = JSON.parse(
          ((t = s),
          f.AES.decrypt(t, f.enc.Utf8.parse(qe), {
            iv: f.enc.Utf8.parse(Be),
            mode: f.mode.CBC,
            padding: f.pad.Pkcs7
          }).toString(f.enc.Utf8))
        )
        c(e), o.setFieldsValue({ username: a, password: r })
      }
      var t
    }, [d])
    return n.jsxs('div', {
      className: 'login',
      style: { backgroundImage: `url(${$e})` },
      children: [
        n.jsxs('div', {
          className: 'login-content-box',
          children: [
            n.jsx('div', {
              className: 'logo_left_top',
              children: n.jsx('img', { src: ze, alt: '' })
            }),
            n.jsxs('section', {
              className: 'login-content',
              children: [
                n.jsx('div', {
                  className: 'haed',
                  children: n.jsx('h2', { children: a })
                }),
                n.jsx('div', {
                  children: n.jsxs(j, {
                    name: 'normal_login',
                    className: 'login-form',
                    form: o,
                    initialValues: { remember: !0 },
                    onFinish: async s => (
                      t(!0),
                      l('正在登录...'),
                      'admin' != s.username
                        ? (t(!1), l('登录'), m.error('找不到该用户'))
                        : '123456' != s.password
                        ? (t(!1), l('登录'), m.error('用户密码错误'))
                        : (localStorage.setItem(
                            window.envConfig.ROOT_APP_INFO,
                            JSON.stringify({
                              roleInfo: '',
                              userInfo: '',
                              token: ''
                            })
                          ),
                          setTimeout(() => {
                            e('/dashboard/analysis')
                          }, 300),
                          void localStorage.setItem('ZhuXiaoJia', !0))
                    ),
                    children: [
                      n.jsx(j.Item, {
                        name: 'username',
                        rules: [
                          { required: !0, message: '请输入用户名!' },
                          { min: 3, message: '最少长度为3位' },
                          { max: 20, message: '最大长度为20位' },
                          {
                            pattern: /^[0-9a-zA-Z@~!#$%^&*`.-_]{1,}$/,
                            message: '包含非法字符'
                          }
                        ],
                        children: n.jsx(_, {
                          size: 'large',
                          placeholder: '用户名',
                          prefix: n.jsx(g, {
                            className: 'site-form-item-icon'
                          }),
                          allowClear: !0
                        })
                      }),
                      n.jsx(j.Item, {
                        name: 'password',
                        rules: [
                          {
                            required: !0,
                            whitespace: !1,
                            message: '请输入登录密码!'
                          },
                          { min: 6, message: '最少长度为6位' },
                          { max: 18, message: '最大长度为18位' },
                          {
                            pattern: /^[0-9a-zA-Z@~!#$%^&*`_]{1,}$/,
                            message: '必须为数字，字母，特殊符号组成'
                          }
                        ],
                        children: n.jsx(_.Password, {
                          prefix: n.jsx(H, {
                            className: 'site-form-item-icon'
                          }),
                          type: 'password',
                          placeholder: '密码',
                          size: 'large'
                        })
                      }),
                      n.jsx(j.Item, {
                        name: 'inputCode',
                        rules: [
                          { required: !0, message: '请输入验证码!' },
                          {
                            validator: async (e, s) => {
                              if (s) {
                                if (!(await u.current.verify(s)))
                                  throw new Error('验证码错误！')
                              }
                            }
                          }
                        ],
                        children: n.jsxs(K, {
                          justify: 'space-between',
                          children: [
                            n.jsx(Z, {
                              className: 'yanzhengma',
                              children: n.jsx(_, {
                                size: 'large',
                                placeholder: '验证码',
                                prefix: n.jsx(X, {
                                  className: 'site-form-item-icon'
                                })
                              })
                            }),
                            n.jsx(Z, { children: n.jsx(Je, { ref: u }) })
                          ]
                        })
                      }),
                      n.jsx(W, {
                        onChange: async e => {
                          if (Re('loginChecked')) c(!1), Ee('loginChecked', 7)
                          else {
                            let t = await o.validateFields()
                            ;(t.checked = e.target.checked),
                              c(e.target.checked),
                              Te(
                                'loginChecked',
                                ((s = JSON.stringify(t)),
                                f.AES.encrypt(s, f.enc.Utf8.parse(qe), {
                                  iv: f.enc.Utf8.parse(Be),
                                  mode: f.mode.CBC,
                                  padding: f.pad.Pkcs7
                                }).toString()),
                                7
                              )
                          }
                          var s
                        },
                        checked: d,
                        children: '记住密码'
                      }),
                      n.jsx(j.Item, {
                        children: n.jsx(Y, {
                          type: 'primary',
                          htmlType: 'submit',
                          className: 'login-form-button',
                          loading: s,
                          disabled: s,
                          children: i
                        })
                      })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        n.jsx(He, {})
      ]
    })
  }
function He () {
  return n.jsxs('div', {
    className: 'author',
    children: [
      n.jsxs('p', {
        children: [
          ' Ant Big Data monitoring system © 2022 ',
          n.jsx('a', {
            href: 'https://gitee.com/huoyueyi/React-admin',
            target: '_blank',
            children: 'React-Ant-Admin@v2.0.0'
          })
        ]
      }),
      n.jsxs('p', {
        children: [
          '技术支持：',
          n.jsx('a', {
            href: 'https://huoyueyi.cn/',
            target: '_blank',
            children: '前端hyy'
          }),
          ' @ 霍乐熠 ',
          n.jsx('a', {
            href: 'mailto:jiangyiming621@163.com',
            children: ' Send email to huoyueyi'
          }),
          ' 初始账号密码：admin 123456'
        ]
      })
    ]
  })
}
const Ke = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ge },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ze = '' + new URL('../png/404.acd9989d.png', import.meta.url).href
function Xe () {
  const e = r()
  return (
    h.useEffect(() => {}, []),
    n.jsxs('div', {
      className: 'error404',
      children: [
        n.jsx('canvas', { id: 'error404Canvas' }),
        n.jsxs('div', {
          className: 'error_main',
          children: [
            n.jsx('div', {
              className: 'errorImg',
              children: n.jsx('img', { src: Ze, alt: '' })
            }),
            n.jsxs('div', {
              className: 'errorText',
              children: [
                n.jsx('h1', { children: '404' }),
                n.jsx('h2', { children: 'UN ON! 页面丢失啦' }),
                n.jsx('p', {
                  children: '别灰心，可能是网址输入错误或页面不存在，请返回首页'
                }),
                n.jsx('button', {
                  onClick: () => e('/'),
                  children: ' 返回首页'
                })
              ]
            })
          ]
        })
      ]
    })
  )
}
function We () {
  ;(() => {
    switch (
      (ye.subscribe(() => {
        const { weakOrGray: e, darkTheme: s, autoTheme: t } = ye.getState()
        switch (e) {
          case 'gray':
            ;(document.body.style.filter = 'grayscale(1)'),
              Te('weakOrGray', e, 365),
              window.location.reload()
            break
          case 'weak':
            ;(document.body.style.filter = 'invert(80%)'),
              Te('weakOrGray', e, 365),
              window.location.reload()
            break
          case !1:
            document.body.style.removeProperty('filter'),
              Ee('weakOrGray', 365),
              window.location.reload()
        }
        s
          ? (Te('darkTheme', s, 365),
            ae(
              () => Promise.resolve({}),
              ['..\\css\\theme-dark.7e3c4058.css'],
              import.meta.url
            ),
            m.loading('正在切换深夜模式，请稍后'),
            window.location.reload())
          : 0 == s &&
            (ae(
              () => Promise.resolve({}),
              ['..\\css\\theme-default.e488dc54.css'],
              import.meta.url
            ),
            Ee('darkTheme', 365),
            m.loading('正在切换白天模式，请稍后'),
            window.location.reload())
      }),
      Re('weakOrGray'))
    ) {
      case 'gray':
        document.body.style.filter = 'grayscale(1)'
        break
      case 'weak':
        document.body.style.filter = 'invert(80%)'
        break
      default:
        document.body.style.removeProperty('filter')
    }
    Re('darkTheme') &&
      ae(
        () => Promise.resolve({}),
        ['..\\css\\theme-dark.7e3c4058.css'],
        import.meta.url
      )
  })()
  let e = Re('ThemeBgColor') || window.envConfig.ROOT_APP_COLOR
  if (e)
    switch (e) {
      case '#2f54eb':
        ae(
          () => Promise.resolve({}),
          ['..\\css\\2f54eb.bfd66f9c.css'],
          import.meta.url
        )
        break
      case '#f5222d':
        ae(
          () => Promise.resolve({}),
          ['..\\css\\f5222d.15748945.css'],
          import.meta.url
        )
        break
      case '#fa541c':
        ae(
          () => Promise.resolve({}),
          ['..\\css\\fa541c.508b07a7.css'],
          import.meta.url
        )
        break
      case '#faad14':
        ae(
          () => Promise.resolve({}),
          ['..\\css\\faad14.6b3bf40f.css'],
          import.meta.url
        )
        break
      case '#13C2C2':
        ae(
          () => Promise.resolve({}),
          ['..\\css\\13C2C2.a2a3933b.css'],
          import.meta.url
        )
        break
      case '#52c41a':
        ae(
          () => Promise.resolve({}),
          ['..\\css\\52c41a.2778e96a.css'],
          import.meta.url
        )
        break
      case '#a876ed':
        ae(
          () => Promise.resolve({}),
          ['..\\css\\a876ed.5efb2868.css'],
          import.meta.url
        )
    }
  else;
  return n.jsx(Q, {
    children: n.jsxs(z, {
      children: [
        n.jsx($, {
          path: '/',
          element: n.jsx(i, { to: '/dashboard/analysis' })
        }),
        n.jsx($, { path: '/login', element: n.jsx(Ge, {}) }),
        n.jsx($, {
          path: '/*',
          element: n.jsx(ne, { children: n.jsx(De, {}) })
        }),
        n.jsx($, { path: '/error404', element: n.jsx(Xe, {}) })
      ]
    })
  })
}
ee.createRoot(document.getElementById('root')).render(
  n.jsx(se, { locale: te, children: n.jsx(We, {}) })
)
export { Oe as C, ge as g, pe as r, ye as s }

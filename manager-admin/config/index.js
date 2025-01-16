// 项目信息配置相关
window.envConfig = {
  key: 0, //环境地址 0:开发 1:测试  2:生产
  proxy: true, //是否开启代理，允许跨域（只在开发环境有效 true/false)
  ROOT_APP_NAME: '佳能', //项目系统名称
  API_BASE_URL: '', //地址域名IP等(此处为空禁写，请在switch语句配置地址)
  API_BASE_PORT: '/admin-manager', //二级地址（可为空），用于拼接API_BASE_URL后面
  API_BASE_TIMEOUT: 10, //请求超时时间（单位/s）
  ROOT_APP_INFO: 'jianeng-info', //本地存储名称（用户信息、角色信息、菜单信息、token等）为避免项目冲突请给每个项目单独命名
  ROOT_APP_COLOR: '#1890ff' //主题色（浅蓝#1890ff、深蓝#2f54eb、火红#f5222d、浅红#fa541c、橙#faad14、青#13C2C2、绿#52c41a、紫#a876ed）
}

// 详细配置信息请查看文档：https://huoyueyi.gitee.io/react-admin-vite-press
const {
  envConfig: { key, proxy }
} = window
// API_BASE_URL配置
switch (key) {
  case 0:
    // 无需代理(禁止跨域)地址，如开启允许跨域，必须和vite.config.js配置文件下proxy的目标代理地址一致
    let noProxyUrl = 'https://huoyueyi.cn/'

    window.envConfig['API_BASE_URL'] = proxy ? '/api/' : noProxyUrl
    break
  case 1:
    window.envConfig['API_BASE_URL'] = '测试IP地址'
    break
  case 2:
    window.envConfig['API_BASE_URL'] = '生产IP地址'
    break
  default:
    break
}

//
//  ██████ ▒██    ██   ▄████▄  ░██ ▄█▀░       ██████╗  ██╗   ██╗  ██████╗       ██
// ░██    ▒ ██  ▒ ██▒░██▀  ▀██  ███▀	       ██╔══██╗ ██║   ██║ ██╔════╝       ██
// ▒██████ ░██   ▒██░░██░      ░██▄░          ██████╔╝ ██║   ██║ ██║  ███╗      ██
// ░██▒   ░░██  ░ ██░▒██▄  ▄██░▒██▀█▄░        ██╔══██╗ ██║   ██║ ██║   ██║
// ░██░    ▒▒██████ ▒ ░▀████▀   ██ ░▀█▄       ██████╔╝ ╚██████╔╝ ╚██████╔╝      ██
// ▒ ░   ░▒▒▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▒▒            ╚═════╝   ╚═════╝   ╚═════╝
// huoyueyi.cn░    ░  ░  ▒   ░ ░▒ ▒░
//  ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
//           ░     ░ ░      ░  ░

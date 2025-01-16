import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import topLevelAwait from 'vite-plugin-top-level-await'
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
import pxtovw from 'postcss-px-to-viewport'

//配置参数
const usePxtovw = pxtovw({
  viewportWidth: 1920,
  viewportUnit: 'vw'
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
    // topLevelAwait({
    //   promiseExportName: '__tla',
    //   promiseImportName: i => `__tla_${i}`
    // })
  ],
  // base: "https://huoyueyi-1303111066.cos.ap-nanjing.myqcloud.com/react-admin/",
  base: './',
  server: {
    host: '0.0.0.0', // 监听所有地址
    port: 3001, // 默认端口
    https: false, // 是否开启 https
    open: true, // 项目启动时是否打开浏览器
    cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
    base: '/', //用于代理 Vite 作为子文件夹时使用。
    headers: {}, //指定服务端响应的headers信息
    strictPort: true, //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    proxy: {
      //当有 /api开头的地址是，代理到target地址
      '/api': {
        target: 'https://huoyueyi.cn/', // 开发环境代理的目标地址
        changeOrigin: true, //是否改变请求源头
        rewrite: path => path.replace(/^\/api/, '') // 路径重写,
      }
    }
  },
  build: {
    // outDir: 'manager-admin', // 打包文件 默认dist
    minify: 'terser',
    chunkSizeWarningLimit: 2000, //文件大小，默认500kb，生成的一个或多个文件的大小超过该值时，Vite 会发出警告提示
    // 打包清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // 最小化拆分包
        manualChunks (id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'js/[name].[hash].js',
        // 用于命名代码拆分时创建的共享块的输出命名
        // 　　chunkFileNames: 'js/[name].[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: '[ext]/[name].[hash].[ext]',
        // 拆分js到模块文件夹
        chunkFileNames: chunkInfo => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/')
            : []
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
          return `js/${fileName}/[name].[hash].js`
        }
      }
    }
  },
  resolve: {
    // 路径别名
    alias: {
      '@': path.resolve(__dirnameNew, './src')
    }
  },
  // css配置
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          //全局样式  用法：color: @primary-color;
          // "primary-color": "#EAA516",
        }
      }
    },
    postcss: {
      plugins: [usePxtovw]
    }
  }
})

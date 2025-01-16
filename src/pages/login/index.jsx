import React, { useEffect, useState, useRef } from 'react'
import './index.less'
import { Form, Input, Button, Row, Col, Checkbox, message } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons'
import request from '@/api'
import { useNavigate } from 'react-router-dom'
import { passwordEncryption } from '@/utils/passwordEncryption'
import { encrypt, decrypt } from '@/utils/aes'
import logo from '@/assets/images/logo-react.png'
import xiangyang from '@/assets/images/xiangyang.png'
import Three from '@/components/Three'
import loginBg from '@/assets/images/login_bg1.png'
import { setCookies, getCookies, removeCookies } from '@/utils/cookies'
import GraphicCode from '@/components/GraphicCode'

import getMenu from '@/routes/routerConfig'
//用于获取状态
import store from '@/redux/store'

const Login = () => {
  const navigate = useNavigate()
  // 登录按钮loading
  let [loading, setLoading] = useState(false)
  let title = window.envConfig.ROOT_APP_NAME
  let [submitLoginName, setSubmitLoginName] = useState('登录')
  let [form] = Form.useForm()
  let [checked, setChecked] = useState(false)
  let GraphicCodeRef = useRef(null)
  // 确认登录
  const onFinish = async userInfo => {
    setLoading(true)
    setSubmitLoginName('正在登录...')

    // 模拟登陆（后端未部署）
    if (userInfo.username != 'admin') {
      setLoading(false)
      setSubmitLoginName('登录')
      return message.error('找不到该用户')
    }
    if (userInfo.password != 'hyy123') {
      setLoading(false)
      setSubmitLoginName('登录')
      return message.error('用户密码错误')
    }
    localStorage.setItem(
      window.envConfig['ROOT_APP_INFO'],
      JSON.stringify({
        roleInfo: userInfo.username,
        userInfo: userInfo.password,
        token: ''
      })
    )
    setTimeout(() => {
      navigate('/dashboard/analysis')
    }, 300)
    localStorage.setItem('huoyueyi', true)
    return
  }

  useEffect(() => {
    const appInfo = JSON.parse(
      localStorage.getItem(window.envConfig['ROOT_APP_INFO'])
    )
    if (appInfo) navigate('/dashboard/analysis')
    const loginChecked = getCookies('loginChecked')
    if (loginChecked) {
      let { checked, password, username } = JSON.parse(decrypt(loginChecked))
      setChecked(checked)
      form.setFieldsValue({
        username,
        password
      })
    }
  }, [checked])

  // 记住密码
  const onChange = async e => {
    const loginChecked = getCookies('loginChecked')
    if (loginChecked) {
      setChecked(false)
      removeCookies('loginChecked', 7)
    } else {
      let values = await form.validateFields()
      values.checked = e.target.checked
      setChecked(e.target.checked)
      setCookies('loginChecked', encrypt(JSON.stringify(values)), 7) //7天有效期
    }
  }

  // 验证码校验
  const validateInputCode = async (rule, value) => {
    if (value) {
      let verify = await GraphicCodeRef.current.verify(value)
      if (!verify) throw new Error('验证码错误！')
    }
  }
  return (
    <div className='login' style={{ backgroundImage: `url(${loginBg})` }}>
      {/* <Three /> */}
      <div className='login-content-box'>
        <div className='logo_left_top'>
          <img src={xiangyang} alt='' />
        </div>
        <section className='login-content'>
          <div className='haed'>
            {/* <img src={logo} alt="" className='logoImg' /> */}
            <h2>{title}</h2>
          </div>
          <div>
            <Form
              name='normal_login'
              className='login-form'
              form={form}
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: '请输入用户名!' },
                  { min: 3, message: '最少长度为3位' },
                  { max: 20, message: '最大长度为20位' },
                  {
                    pattern: /^[0-9a-zA-Z@~!#$%^&*`.-_]{1,}$/,
                    message: '包含非法字符'
                  }
                ]}
              >
                <Input
                  size='large'
                  placeholder='用户名'
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    whitespace: false,
                    message: '请输入登录密码!'
                  },
                  { min: 6, message: '最少长度为6位' },
                  { max: 18, message: '最大长度为18位' },
                  {
                    pattern: /^[0-9a-zA-Z@~!#$%^&*`_]{1,}$/,
                    message: '必须为数字，字母，特殊符号组成'
                  }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='密码'
                  size='large'
                />
              </Form.Item>
              <Form.Item
                name='inputCode'
                rules={[
                  { required: true, message: '请输入验证码!' },
                  { validator: validateInputCode }
                ]}
              >
                <Row justify='space-between'>
                  <Col className='yanzhengma'>
                    <Input
                      size='large'
                      placeholder='验证码'
                      prefix={
                        <SafetyCertificateOutlined className='site-form-item-icon' />
                      }
                    />
                  </Col>
                  <Col>
                    <GraphicCode ref={GraphicCodeRef} />
                  </Col>
                </Row>
              </Form.Item>
              <Checkbox onChange={onChange} checked={checked}>
                记住密码
              </Checkbox>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                  loading={loading}
                  disabled={loading}
                >
                  {submitLoginName}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
      <Author />
    </div>
  )
}

function Author () {
  return <div className='author'></div>
}

export default Login

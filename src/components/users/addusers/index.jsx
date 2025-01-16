import { Drawer, Form, Input, message, Select, DatePicker, Button } from 'antd'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import request from '@/api'
import moment from 'moment'
import './index.less'
const { Option } = Select

const Addusers = forwardRef((props, ref) => {
  let [isModalVisible, setIsModalVisible] = useState(false)
  let [isStatus, setIsStatus] = useState(1) //1 添加  2编辑 3详情
  let [form] = Form.useForm()
  let userInfo = JSON.parse(
    localStorage.getItem(window.envConfig['ROOT_APP_INFO'])
  )?.userInfo
  let [queryalllist, setQueryalllist] = useState([]) //角色列表
  let [DeptTree, setGetDeptTree] = useState([]) //机构
  let [showEle, setShowEle] = useState(true)
  let [userId, setUserId] = useState(null)
  //将子组件的方法 暴露给父组件
  useImperativeHandle(ref, () => ({
    setIsModalVisible,
    queryUserRole,
    getDeptTree,
    entiForm,
    setShowEle,
    setIsStatus
  }))
  // 弹出框确认
  const handleOk = async values => {
    try {
      const values = await form.validateFields()
      if (isStatus == 1) {
        const res = await request.addUser(values)
        if (res.data.code == 200) {
          message.success(res.data.message)
          setIsModalVisible(false)
          form.resetFields()
          props.getlist()
        }
      } else if (isStatus == 2) {
        const res = await request.userEdit({ ...values, id: userId })
        if (res.data.code == 200) {
          message.success(res.data.message)
          setIsModalVisible(false)
          form.resetFields()
          props.getlist()
        }
      }
    } catch (errorInfo) {
      //    错误
    }
  }
  // 获取角色
  const queryUserRole = async () => {
    const res = await request.getRoleList({})
    if (res.data.code == 0) {
      setQueryalllist(res.data.result)
    }
  }
  //获取机构
  const getDeptTree = async () => {
    const res = await request.getDeptTreeList({})
    if (res.data.errCode == 0) {
      let tmpDeptInfos =
        JSON.parse(res.data.bizContent)?.tmpDeptInfos || res.data.tmpDeptInfos
      setGetDeptTree(tmpDeptInfos)
    }
  }
  //校验用户名
  const validateUsername = async (rule, value) => {
    const params = {
      tableName: 'sys_user',
      fieldName: 'username',
      fieldVal: value,
      dataId: userId
    }
    const res = await request.duplicateCheck(params)
    if (res.data.code == 500) {
      throw new Error('用户名已存在!')
    }
  }
  //校验工号
  const validateWorkNo = async (rule, value) => {
    if (!value) {
      callback()
    } else {
      const params = {
        tableName: 'sys_user',
        fieldName: 'work_no',
        fieldVal: value,
        dataId: userId
      }
      const res = await request.duplicateCheck(params)
      if (res.data.code == 500) {
        throw new Error('工号已存在!')
      }
    }
  }
  //校验手机号
  const validatePhone = async (rule, value) => {
    if (new RegExp(/^1[3|4|5|7|8|9][0-9]\d{8}$/).test(value)) {
      const params = {
        tableName: 'sys_user',
        fieldName: 'phone',
        fieldVal: value,
        dataId: userId
      }
      const res = await request.duplicateCheck(params)
      if (res.data.code == 500) {
        throw new Error('手机号已存在!')
      }
    } else {
      throw new Error('请输入正确格式的手机号码!')
    }
  }
  //校验邮箱
  const validateEmail = async (rule, value) => {
    let reg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    if (reg.test(value)) {
      const params = {
        tableName: 'sys_user',
        fieldName: 'email',
        fieldVal: value,
        dataId: userId
      }
      const res = await request.duplicateCheck(params)
      if (res.data.code == 500) {
        throw new Error('邮箱已存在!')
      }
    } else {
      throw new Error('请输入正确格式的邮箱!')
    }
  }
  //编辑
  const entiForm = async data => {
    // 查询角色
    const res = await request.getRoleId({ userid: data.id })
    let selectedroles = null
    if (res.data.code == 0) {
      selectedroles = res.data.result[0]
    }
    form.setFieldsValue({
      username: data.username,
      realname: data.realname,
      workNo: data.workNo,
      selectedroles,
      orgCode: data.orgCode,
      birthday: data.birthday ? moment(data.birthday) : null,
      sex: data.sex ? String(data.sex) : null,
      email: data.email,
      phone: data.phone
    })
    setUserId(data.id)
  }

  return (
    <>
      <Drawer
        title={isStatus == 1 ? '添加用户' : isStatus == 2 ? '编辑用户' : '详情'}
        open={isModalVisible}
        onOk={handleOk}
        closable={false}
        onClose={() => {
          setIsModalVisible(false)
          form.resetFields()
        }}
        width='40%'
        footer={
          <>
            <Button
              onClick={() => {
                setIsModalVisible(false)
                form.resetFields()
              }}
              style={{ marginRight: '.5vw' }}
            >
              取消
            </Button>
            {isStatus != 3 ? (
              <Button type='primary' onClick={handleOk}>
                提交
              </Button>
            ) : (
              ''
            )}
          </>
        }
      >
        <Form
          name='basic'
          form={form}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label='用户账号'
            name='username'
            rules={[
              { required: true, message: '请输入用户账号!' },
              { validator: validateUsername }
            ]}
          >
            <Input placeholder='请输入用户账号' disabled={isStatus == 3} />
          </Form.Item>

          {showEle ? (
            <div>
              <Form.Item
                label='登录密码'
                name='password'
                rules={[
                  { required: true, message: '请输入登录密码!' },
                  {
                    pattern:
                      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{6,}$/,
                    message: '密码由至少6位数字、大小写字母和特殊符号组成!'
                  }
                ]}
              >
                <Input.Password placeholder='请输入登录密码' />
              </Form.Item>
              <Form.Item
                label='确认密码'
                name='confirmpassword'
                required
                rules={[
                  { required: true, message: '请确认密码!' },
                  ({ getFieldValue }) => ({
                    validator (_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      } else {
                        return Promise.reject('两次密码不一致，请重新输入')
                      }
                    }
                  })
                ]}
              >
                <Input.Password placeholder='请确认密码' />
              </Form.Item>
            </div>
          ) : (
            ''
          )}
          <Form.Item
            label='用户姓名'
            name='realname'
            rules={[{ required: true, message: '请输入用户姓名!' }]}
          >
            <Input placeholder='请输入用户姓名' disabled={isStatus == 3} />
          </Form.Item>
          <Form.Item
            label='工号'
            name='workNo'
            rules={[
              { required: true, message: '请输入工号!' },
              { validator: validateWorkNo }
            ]}
          >
            <Input placeholder='请输入工号' disabled={isStatus == 3} />
          </Form.Item>
          <Form.Item label='角色分配' name='selectedroles'>
            <Select
              placeholder='请选择角色'
              disabled={isStatus == 3}
              getPopupContainer={triggerNode =>
                triggerNode.parentElement || document.body
              }
            >
              {queryalllist.map((item, index) => {
                return (
                  <Option value={item.id} key={index}>
                    {item.roleName}
                  </Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item label='机构分配' name='orgCode'>
            <Select
              placeholder='请选择机构'
              disabled={isStatus == 3}
              getPopupContainer={triggerNode =>
                triggerNode.parentElement || document.body
              }
            >
              {DeptTree.map((item, index) => {
                return (
                  <Option value={item.deptNo} key={index}>
                    {item.deptName}
                  </Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item label='生日' name='birthday'>
            <DatePicker
              disabled={isStatus == 3}
              getPopupContainer={triggerNode =>
                triggerNode.parentElement || document.body
              }
              placeholder='请选择生日'
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item label='性别' name='sex'>
            <Select
              placeholder='请选择性别'
              disabled={isStatus == 3}
              getPopupContainer={triggerNode =>
                triggerNode.parentElement || document.body
              }
            >
              <Option value='1'>男</Option>
              <Option value='2'>女</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='邮箱'
            name='email'
            rules={[
              { required: true, message: '' },
              { validator: validateEmail }
            ]}
          >
            <Input placeholder='请输入邮箱' disabled={isStatus == 3} />
          </Form.Item>
          <Form.Item
            label='手机号码'
            name='phone'
            rules={[
              { required: true, message: '' },
              { validator: validatePhone }
            ]}
          >
            <Input placeholder='请输入手机号码' disabled={isStatus == 3} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
})

export default Addusers

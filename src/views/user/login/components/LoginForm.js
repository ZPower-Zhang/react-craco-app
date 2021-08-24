import React, { useState, useRef, useReducer } from 'react'
import PropTypes from 'prop-types';
import { Form, Input, Button, Select, message } from 'antd';
import { getTenantList } from '@/api/tenant'
import { asyncAwait, useAsyncEffect } from '@/utils/util'

const LoginForm = (props) => {
  const [ form ] = Form.useForm();
  const inputRef = useRef()

  const [ optionList, setOptionList ] = useState([])

  const [ initialValues, setInitialValues ] = useState({
    active: undefined,
    username: '',
    password: ''
  })

  const [ number , dispatchNumbner ] = useReducer((state,action)=>{
    const { payload , name  } = action
    /* return的值为新的state */
    switch(name){
      case 'add':
        return state + 1
      case 'sub':
        return state - 1 
      case 'reset':
        return payload
      default:
        break
    }
    return state
  },0)

  // const getData = async () =>{
  //   const res = await asyncAwait(getTenantList())
  //   const resData = (res && res.data) || []
  //   setOptionList(resData);
  //   form.setFieldsValue({...initialValues, active: (Array.isArray(resData) && resData[0] && resData[0].id) || undefined, username: 'nzhang' });
  //   setInitialValues({
  //     active: (Array.isArray(resData) && resData[0] && resData[0].id) || undefined,
  //     username: 'qweqe',
  //   })
  // }

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.password && values.username) {
      if (values.password !== values.username) {
        message.error('用户名或密码错误');
      } else {
        props.verifyLogin(values)
      }
      // values.password !== values.username && message.error('用户名或密码错误');
      // values.password === values.username && props.verifyLogin(values)
    }
    // props.verifyLogin(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (values) => {
    dispatchNumbner({ name:'add' })
  }

  const handleChangeInput = (evt) => {
    console.info('inputRef', inputRef)
    console.info('evtevtevt', evt)
    console.info('inputRef value', inputRef.current.state.value)
  }

  useAsyncEffect(async ()=> {
    const res = await asyncAwait(getTenantList())
    const resData = (res && res.data) || []
    setOptionList(resData);
    form.setFieldsValue({ ...initialValues, active: (Array.isArray(resData) && resData[ 0 ] && resData[ 0 ].id) || undefined, username: 'nzhang' });
    setInitialValues({
      active: (Array.isArray(resData) && resData[ 0 ] && resData[ 0 ].id) || undefined,
      username: 'qweqe'
    })
  }, [ getTenantList ])

  // useEffect(()=>{
  //   getData();
  // },[ optionList, getData ]);

  return (
    <Form
      form={ form }
      name="normal_login"
      className="login-form"
      initialValues={ initialValues }
      onFinish={ onFinish }
      onFinishFailed={ onFinishFailed }
      onValuesChange={ onValuesChange }>

      <Form.Item
      name="active"
      rules={ [ { required: true, message: '请选择组织!' } ] }>
        <Select placeholder="请选择组织">
          {optionList && optionList.map(ele => {
            return (
              <Select.Option key={ ele.id } value={ ele.id }>{ele.name}</Select.Option>
            )
          })
        }
        </Select>
      </Form.Item>
      <Form.Item
      name="username"
      rules={ [ { required: true, message: '请输入用户名!' } ] } >
        <Input placeholder="请输入用户名(nzhang)" ref={ inputRef } onKeyUp={ (evt) => handleChangeInput(evt) } />
      </Form.Item>

      <Form.Item
      name="password"
      rules={ [ { required: true, message: '请输入密码!' } ] } >
        <Input
        type="password"
        placeholder="请输入密码(nzhang)"
      />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登 录
        </Button>
      </Form.Item>
    </Form>
  )
}

LoginForm.propTypes = {
  verifyLogin: PropTypes.func
}

export default LoginForm

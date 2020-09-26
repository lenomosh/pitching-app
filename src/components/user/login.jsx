import React from 'react'
import Form from "antd/es/form";
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import Input from "antd/es/input";
import Checkbox from "antd/es/checkbox";
import Button from "antd/es/button";
import Axios from "axios";
import apiUrls from "../environment";
import {message} from "antd/es";

const UserLogin =()=>{
    const onFinish = values => {
        Axios.post(apiUrls.user_login, {
            password: values.password,
            username: values.username,
            remember:values.remember
        },{
            Accept:'application/json'
        }).then( res =>{
            console.log(res.data)
            message.success('Login was success!',10)
        }).catch(err =>{
            message.error(err.response.data.description,10)
            console.log(err.response)
        })

        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="/register">register now!</a>
            </Form.Item>
        </Form>
    )

}
export default UserLogin

import React, {useState} from 'react'
import {QuestionCircleOutlined} from '@ant-design/icons'
import {Alert,Form,Input,Tooltip, Checkbox, Button} from "antd";
import Axios from "axios";
import apiUrls from "../environment";
import {message} from "antd/es";


const UserCreate = () =>{
    const [form] = Form.useForm();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onFinish = (values) => {

        Axios.post(apiUrls.user_create, {
            name: values.name,
            email: values.email,
            password: values.password,
            username: values.username
        },{
            Accept:'application/json'
        }).then( res =>{
            console.log(res.data)
            message.success('Account created successfully.',10)
        }).catch(err =>{
            message.error(err.response.data.description,10)
            console.log(err.response)
        })
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            {/*<div className="p-4">*/}
            {/*    {error &&     <Alert type="error" message={error} banner />}*/}
            {/*</div>*/}
            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                layout={'vertical'}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Name is required',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="username"
                    label={
                        <span>
            Username&nbsp;
                            <Tooltip title="What do you want others to call you? This will be used to ">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                        },
                    ]}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default UserCreate

import React from 'react';
import { Form, Input, Button } from 'antd';

const Login = () => {
    const [form] = Form.useForm();

    const onFinish = async (values: { username: string; password: string }) => {
        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            console.log(data);
            // Handle success or error response
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Form form={form} onFinish={onFinish}>
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;

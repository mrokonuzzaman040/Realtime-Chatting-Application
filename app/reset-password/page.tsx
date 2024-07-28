"use client";
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = (values: { email: string }) => {
        // Implement reset password logic here
        console.log('Reset Password:', values);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
                <Form
                    name="reset-password"
                    initialValues={{ remember: true }}
                    onFinish={handleResetPassword}
                    layout="vertical"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ResetPassword;

"use client";
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (values: { email: string; password: string; confirmPassword: string }) => {
        // Implement sign-up logic here
        console.log('Sign Up:', values);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
                <Form
                    name="signup"
                    initialValues={{ remember: true }}
                    onFinish={handleSignUp}
                    layout="vertical"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please confirm your password!' }]}
                    >
                        <Input.Password
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;

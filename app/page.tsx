"use client";
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (values: { email: string; password: string }) => {
    // Implement login logic here
    console.log('Login:', values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
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

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="flex justify-between mt-4">
          <Link href="/signup">
            <p className="text-blue-500">Create Account</p>
          </Link>
          <Link href="/reset-password">
            <p className="text-blue-500">Forgot Password?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

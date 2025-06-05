import React, { useState } from 'react';
import { Form, Input, Button, message, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import styles from './LoginPage.module.css';

const { Title } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await login(values);
      localStorage.setItem('token', res.data.token);
      message.success('Login successful!');
      navigate('/');
    }catch (err) {
  const errors = err.response?.data?.errors;
  if (Array.isArray(errors)) {
    form.setFields(
    errors.map(error => ({
      name: error.param,  
      errors: [error.msg],
    }))
  );
  } else {
    message.error(err.response?.data?.message || 'Login failed');
  }
} finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item 
          label="Email" 
          name="email" 
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item 
          label="Password" 
          name="password" 
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item> 
          <Button 
            type="primary" 
            htmlType="submit" 
            loading={loading} 
            block 
            className={styles.submitButton}
          >
            Login
          </Button>
        </Form.Item>

        <Form.Item>
          <p className={styles.login}>
            Don't have an account? <a href='/register'>Register</a>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;

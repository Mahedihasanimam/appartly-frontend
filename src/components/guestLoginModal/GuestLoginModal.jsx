// ReusableLoginModal.js
import React, { useState } from 'react';
import { Modal, Input, Form, Button, Space } from 'antd';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import logo from "/public/images/footerlogo.svg"
import Image from 'next/image';

const GuestLoginModal = ({
  isVisible,
  onClose,
  title = "Log in",
  description = "Enter your email & password to log in",
  onLogin,
  onForgotPassword,
  onFacebookLogin,
  onGoogleLogin,
  showSocialButtons = true
}) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    if (onLogin) {
      onLogin(values);
    }
    form.resetFields();
  };

  return (
    <Modal
      title={null}
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      className="bg-[#060000]"
    >
      <div className="text-center">
          <Image src={logo} alt="Logo" className="mb-4 " height={200} width={200} />        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-white">{description}</p>

        {showSocialButtons && (
          <Space className="mt-4">
            <Button
              type="primary"
              className="w-48 flex items-center justify-center"
              icon={<FacebookOutlined />}
              style={{ backgroundColor: '#1877f2', borderColor: '#1877f2' }}
              onClick={onFacebookLogin}
            >
              Continue with Facebook
            </Button>
            <Button
              type="default"
              className="w-48 flex items-center justify-center"
              icon={<GoogleOutlined />}
              onClick={onGoogleLogin}
            >
              Continue with Google
            </Button>
          </Space>
        )}

        <Form form={form} onFinish={handleFinish} className="mt-4">
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input type="email" placeholder="Enter your Email" className="rounded-lg" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Enter your Password" className="rounded-lg" />
          </Form.Item>
          <div className="flex justify-between items-center">
            <a href="#" className="text-white" onClick={onForgotPassword}>
              Forgot password
            </a>
          </div>
          <Button type="primary" htmlType="submit" className="w-full mt-4 bg-[#EBCA7E] text-black">
            Log in
          </Button>
        </Form>
        <p className="mt-2 text-white">
          Don't have an account? <a href="#" className="text-[#EBCA7E]">Sign up</a>
        </p>
      </div>
    </Modal>
  );
};

export default GuestLoginModal;

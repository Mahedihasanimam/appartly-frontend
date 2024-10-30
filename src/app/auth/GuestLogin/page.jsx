'use client';
import React, { useState } from "react";
import { Input, Form, Button, Space } from "antd";
import logo from "/public/images/logo.svg";
import Image from "next/image";
import fbimage from "/public/icons/fb.svg";
import googleimg from "/public/icons/google.svg";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const GuestLogin = ({
  title = "Log in as Guest",
  description = "Enter your email & password which had used to create Appartali account",
  onLogin,
  onForgotPassword,
  onFacebookLogin,
  onGoogleLogin,
  showSocialButtons = true,
}) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleFinish = (values) => {
    if (onLogin) {
      onLogin(values);
    }

    Swal.fire({
      title: 'Login Successful!',
      text: 'You have logged in successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#EBCA7E',
    }).then(() => {
      router.push('/');
    });

    form.resetFields();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF1A] ">
      <div className="bg-[#060000] p-[40px] w-full max-w-xl rounded-lg space-y-4">
        <Image src={logo} alt="Logo" className="mb-4" height={200} width={200} />
        <h2 className="text-2xl font-bold text-center text-white pt-12">{title}</h2>
        <p className="text-[#FFFFFFE5] text-center max-w-2xl mx-auto opacity-70 text-sm">{description}</p>

        {showSocialButtons && (
          <Space className="pb-4 w-full pt-6">
            <Button
              type="primary"
              className="w-full flex items-center justify-center"
              style={{
                backgroundColor: "#1877f2",
                borderColor: "#1877f2",
                height: "44px",
              }}
              onClick={onFacebookLogin}
            >
              <Image src={fbimage} alt="Facebook" height={30} width={30} />
              Continue with Facebook
            </Button>
            <Button
              type="default"
              style={{ height: "44px" }}
              className="w-full p-4 flex items-center justify-center"
              onClick={onGoogleLogin}
            >
              <Image src={googleimg} alt="Google" height={30} width={30} />
              Continue with Google
            </Button>
          </Space>
        )}

        <Form form={form} onFinish={handleFinish} className="mt-4">
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input
              style={{
                height: "44px",
                backgroundColor: "#242424",
                border: "none",
                color: "#FFFFFF99",
              }}
              type="email"
              placeholder="Enter your Email"
              className="rounded-lg placeholder:text-[#FFFFFF99]"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              style={{
                height: "44px",
                backgroundColor: "#242424",
                border: "none",
                color: "#FFFFFF99",
              }}
              placeholder="Enter your Password"
              className="rounded-lg ant-input"
            />
          </Form.Item>
          <div className="flex justify-end items-center">
            <Link 
              href="/auth/verifyEmail"
              className="text-secoundary border-b border-secoundary hover:text-[#EBCA7E]"
              onClick={onForgotPassword}
            >
              Forgot password
            </Link>
          </div>
          <Button
            style={{
              height: "44px",
              backgroundColor: "#EBCA7E",
              border: "none",
              color: "#0F0F0F",
            }}
            type="primary"
            htmlType="submit"
            className="w-full mt-12 bg-[#EBCA7E] font-bold"
          >
            Log in
          </Button>
        </Form>
        <p className="mt-2 text-center text-sm text-white">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-[#EBCA7E]">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default GuestLogin;

"use client";
import React, { useState } from "react";
import { Input, Form, Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.svg";

const VerifyEmail = ({
  title = "Verify email",
  description = "We will send a 4-digit verification code to your email",
  onLogin,
  onForgotPassword,
  onFacebookLogin,
  onGoogleLogin,
  showSocialButtons = true,
}) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    if (onLogin) {
      onLogin(values);
    }
    form.resetFields();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF1A]">
      <div className="bg-[#060000] p-[40px] w-full max-w-xl rounded-lg space-y-4">
        <Image src={logo} alt="Logo" className="mb-4" height={200} width={200} />
        <h2 className="text-2xl font-bold text-center text-white pt-12">{title}</h2>
        <p className="text-[#FFFFFFE5] text-center max-w-xs mx-auto opacity-70 text-sm">{description}</p>

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
          <Link href="/auth/verifyOTP">
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
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default VerifyEmail;

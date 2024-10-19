"use client";
import React, { useState } from "react";
import { Input, Form, Button, Space } from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.svg";
const VerifyEmail = ({
  title = "Create new password",
  description = "You have to create a new password",
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
    <div className="flex  justify-center items-center min-h-screen bg-[#FFFFFF1A]">
      <div className=" bg-[#060000] p-[40px] w-full max-w-xl rounded-lg space-y-4 ">
        <Image
          src={logo}
          alt="Logo"
          className="mb-4"
          height={200}
          width={200}
        />
        <h2 className="text-2xl font-bold text-center text-white pt-12">{title}</h2>
        <p className="text-[#FFFFFFE5]  text-center max-w-xs mx-auto opacity-70 text-sm ">{description}</p>

        <Form form={form} onFinish={handleFinish} className="mt-4">
        <Form.Item
          className="w-full"
            name="newpassword"
            rules={[{ required: true, message: "Please enter your New password" }]}
          >
             <p className="text-[#FFFFFF] text-[16px] font-medium">New Password*</p>
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

        <Form.Item
          className="w-full"
            name="confirmpassword"
            rules={[{ required: true, message: "Please enter your Confirm password" }]}
          >
             <p className="text-[#FFFFFF] text-[16px] font-medium">Confirm Password*</p>
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
        <Link href="/">
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
          </Button></Link>
        </Form>
       
      </div>
    </div>
  );
};

export default VerifyEmail;

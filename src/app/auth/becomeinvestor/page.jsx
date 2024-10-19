"use client";
import React, { useState } from "react";
import { Input, Form, Button, Space, Checkbox, Flex } from "antd";
import logo from "/public/images/logo.svg";
import Image from "next/image";
import fbimage from "/public/icons/fb.svg";
import googleimg from "/public/icons/google.svg";
import Link from "next/link";
const Becomeinvestor = ({
  title = "Become an Investor",
  description = "Please fill the valid information to create appartali investor account",
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
      <div className=" bg-[#060000] p-[40px] w-full max-w-2xl rounded-lg space-y-4 ">
        <Image
          src={logo}
          alt="Logo"
          className="mb-4"
          height={200}
          width={200}
        />
        <h2 className="text-2xl font-bold text-center text-white pt-12">{title}</h2>
        <p className="text-[#FFFFFFE5]  text-center max-w-xs mx-auto opacity-70 text-sm ">{description}</p>

        <Form form={form} onFinish={handleFinish} className="mt-4 w-full">

            <div className="w-full flex gap-[20px] items-center justify-between"> 
                 <Form.Item
                 className="w-full"
               
            name="firstname"
            rules={[{ required: true, message: "Please Enter your last name" }]}
          >
            <p className="text-[#FFFFFF] text-[16px] font-medium">Contact number*</p>
            <Input
              style={{
                width: "100%",
                height: "44px",
                backgroundColor: "#242424",
                border: "none",
                color: "#FFFFFF99",
              }}
              type="text"
              placeholder="Enter your phone number"
              className="rounded-lg placeholder:text-[#FFFFFF99] w-full"
            />
        
    
          </Form.Item>
          
          
          
          </div>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
             <p className="text-[#FFFFFF] text-[16px] font-medium">Email*</p>
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
          


          <div className="w-full flex gap-[20px] items-center justify-between"> 
          <Form.Item
          className="w-full"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
             <p className="text-[#FFFFFF] text-[16px] font-medium">Property/Home Location*</p>
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
            name="contactnumber"
            rules={[{ required: true, message: "Please enter your Number of rooms*" }]}
          >
             <p className="text-[#FFFFFF] text-[16px] font-medium">Number of rooms*</p>
            <Input
              style={{
                height: "44px",
                backgroundColor: "#242424",
                border: "none",
                color: "#FFFFFF99",
              }}
              placeholder="Enter rooms number"
              className="rounded-lg ant-input"
            />
          </Form.Item>
          
          
          
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
           Submit
          </Button>
        </Form>
    
      </div>
    </div>
  );
};

export default Becomeinvestor;

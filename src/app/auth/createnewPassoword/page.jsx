"use client";
import React from "react";
import { Input, Form, Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const VerifyEmail = ({
  title = "Create New Password",
  description = "You have to create a new password",
  onLogin,
}) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleFinish = async (values) => {
    const { newpassword, confirmpassword } = values;
console.log(newpassword,confirmpassword)
    // Check if passwords match
    if (newpassword !== confirmpassword) {
      Swal.fire({
        title: 'Error',
        text: 'Passwords do not match. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#EBCA7E',
      });
      return;
    }

    // Call the password change function (if provided)
    if (onLogin) {
      try {
        // Assuming onLogin handles the password change request
        await onLogin({ newpassword });
      
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: error.message || 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#EBCA7E',
        });
      }
    }
    
    form.resetFields(); // Reset form fields
  };


  const handenewpass=()=>{
    Swal.fire({
      title: 'Password Changed!',
      text: 'Your password has been successfully created.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#EBCA7E',
    }).then(() => {
      router.push('/'); // Redirect to homepage
    });
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF1A]">
      <div className="bg-[#060000] p-[40px] w-full max-w-xl rounded-lg space-y-4">
        <Image
          src={logo}
          alt="Logo"
          className="mb-4"
          height={200}
          width={200}
        />
        <h2 className="text-2xl font-bold text-center text-white pt-12">{title}</h2>
        <p className="text-[#FFFFFFE5] text-center max-w-xs mx-auto opacity-70 text-sm">{description}</p>

        <Form form={form} onFinish={handleFinish} className="mt-4">
          <Form.Item
            className="w-full"
            name="newpassword"
            rules={[{ required: true, message: "Please enter your new password" }]}
          >
            <p className="text-[#FFFFFF] text-[16px] font-medium">New Password*</p>
            <Input.Password
              style={{
                height: "44px",
                backgroundColor: "#242424",
                border: "none",
                color: "#FFFFFF99",
              }}
              placeholder="Enter your new password"
              className="rounded-lg ant-input"
            />
          </Form.Item>

          <Form.Item
            className="w-full"
            name="confirmpassword"
            rules={[{ required: true, message: "Please confirm your password" }]}
          >
            <p className="text-[#FFFFFF] text-[16px] font-medium">Confirm Password*</p>
            <Input.Password
              style={{
                height: "44px",
                backgroundColor: "#242424",
                border: "none",
                color: "#FFFFFF99",
              }}
              placeholder="Confirm your password"
              className="rounded-lg ant-input"
            />
          </Form.Item>

          <Button
          onClick={handenewpass}
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

export default VerifyEmail;

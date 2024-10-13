"use client";
import React, { useState } from "react";
import { Input, Form, Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.svg";

const VerifyOTP = ({
  title = "OTP Verification",
  description = "We’ve sent you a verification code to ap...@gmail.com",
  onFinish,
}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [form] = Form.useForm();

  const handleFinish = () => {
    const otpValue = otp.join("");
    console.log("Success:", { otp: otpValue });
    // Call the onFinish prop if provided
    if (onFinish) {
      onFinish({ otp: otpValue });
    }
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value, index) => {
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    if (value.length === 1 && index < 3) {
      document.getElementById(`otpInput-${index + 1}`).focus();
    }
  };

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

        <Form
          layout="vertical"
          onFinish={handleFinish}
          onFinishFailed={onFinishFailed}
          form={form}
          style={{ maxWidth: "400px", width: "100%" }}
          className="mx-auto"
        >
          {/* OTP Input */}
          <div className="flex justify-between">
            {otp.map((digit, index) => (
              <Input
                placeholder="0"
                className=" text-[#D0D5DD]"
                key={index}
                id={`otpInput-${index}`}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                style={{
                  width: "80px",
                  height: "80px",
                  textAlign: "center",
                  fontSize: "24px",
                }}
              />
            ))}
          </div>
          
        <div className="text-end lg:mt-4">

<Link href="#">
  <span className="text-[#EBCA7E]   border-b border-[#EBCA7E] hover:text-[#EBCA7E]">
  Resend Code
  </span>
</Link>
</div>

          <Form.Item className="pt-6">
            <Link href="/auth/createnewPassoword">
              <Button
                className="text-[#FFFFFF] text-[16px] font-semibold p-6"
                size="large"
                type="primary"
                style={{backgroundColor: "#EBCA7E",color:"#060000"}}
                htmlType="submit"
                block
              >
                Submit
              </Button>
            </Link>
          </Form.Item>
        </Form>

      </div>
    </div>
  );
};

export default VerifyOTP;

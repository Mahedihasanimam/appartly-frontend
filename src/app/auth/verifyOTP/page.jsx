"use client";
import React, { useState, useEffect } from "react";
import { Input, Form, Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useOtpVerifyMutation, useVerifyEmailMutation } from "@/redux/features/users/UserApi";
import Swal from "sweetalert2";

const VerifyOTP = ({ title = "OTP Verification", onFinish }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [form] = Form.useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [verifyOTPCode, { isLoading: verifyotpcodeLoading }] = useOtpVerifyMutation();
  const [verifyEmail, { isLoading: resendLoading }] = useVerifyEmailMutation();

  // Extract email from query parameters
  useEffect(() => {
    const queryEmail = searchParams.get("email");
    if (queryEmail) {
      setEmail(queryEmail);
    }
  }, [searchParams]);

  const description = `We’ve sent you a verification code to ${email || "your email"}`;

  const handleFinish = async () => {
    const otpValue = otp.join("");
    console.log("Success:", { otp: otpValue });

    try {
      const respons = await verifyOTPCode({ email, emailVerifyCode: otpValue });

      if (respons.data?.success) {
        await Swal.fire({
          title: respons?.data?.message,
          text: "Email verified successfully",
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#EBCA7E',
        });
        router.push(`/auth/createnewPassoword?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      await Swal.fire({
        title: 'Something went wrong!',
        text: "Please try again later",
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#EBCA7E',
      });
    }

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

  const handleResendOtp = async () => {
    try {
      const response = await verifyEmail({ email }).unwrap();
      
      // Log response to inspect structure
      console.log('Resend OTP Response:', response);
  
      // Check for the success flag in the response data
      if (response?.success) {
        await Swal.fire({
          title: 'Code Resent!',
          text: response?.message || 'A new code has been sent to your email.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#EBCA7E',
        });
      } else {
        throw new Error(response?.message || 'Failed to resend code');
      }
    } catch (err) {
      console.error('Error during resend OTP:', err);
  
      // Make sure the error shown is relevant
      await Swal.fire({
        title: 'Resend Failed!',
        text: err?.message || 'An error occurred. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#EBCA7E',
      });
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF1A]">
      <div className="bg-[#060000] p-[40px] w-full max-w-xl rounded-lg space-y-4">
        <Image src={logo} alt="Logo" className="mb-4" height={200} width={200} />
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
          <div className="flex justify-between">
            {otp.map((digit, index) => (
              <Input
                placeholder="0"
                className="text-[#D0D5DD]"
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
            <button onClick={handleResendOtp}>
              <span className="text-[#EBCA7E] border-b border-[#EBCA7E] hover:text-[#EBCA7E]">
                {resendLoading ? "Sending code..." : "Resend Code"}
              </span>
            </button>
          </div>

          <Form.Item className="pt-6">
            <Button
              className="text-[#FFFFFF] text-[16px] font-semibold p-6"
              size="large"
              type="primary"
              style={{ backgroundColor: "#EBCA7E", color: "#060000" }}
              htmlType="submit"
              block
            >
              {verifyotpcodeLoading ? "Verifying..." : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default VerifyOTP;

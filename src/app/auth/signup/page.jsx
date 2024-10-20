"use client";
import React from "react";
import { Input, Form, Button, Space, Checkbox } from "antd";
import logo from "/public/images/logo.svg";
import Image from "next/image";
import fbimage from "/public/icons/fb.svg";
import googleimg from "/public/icons/google.svg";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Signup = ({
  title = "Sign UP",
  description = "Please fill in valid information to create an Appartali account",
  onLogin,
  onForgotPassword,
  onFacebookLogin,
  onGoogleLogin,
  showSocialButtons = true,
}) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleFinish = async (values) => {
    try {
      if (onLogin) {
        await onLogin(values); // Call the signup function (API request)
        handlesignup(); // Call the handlesignup function after successful signup
      }
    } catch (error) {
      Swal.fire({
        title: 'SignUp Failed',
        text: error.message || 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#EBCA7E',
      });
    }
  };

  const handlesignup = () => {
    Swal.fire({
      title: 'SignUp Successful!',
      text: 'You have signed up successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#EBCA7E',
    }).then(() => {
      router.push('/'); // Redirect to the homepage after success
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF1A]">
      <div className="bg-[#060000] p-[40px] w-full max-w-2xl rounded-lg space-y-4">
        <Image src={logo} alt="Logo" className="mb-4" height={200} width={200} />
        <h2 className="text-2xl font-bold text-center text-white pt-12">{title}</h2>
        <p className="text-[#FFFFFFE5] text-center max-w-xs mx-auto opacity-70 text-sm">{description}</p>

        {showSocialButtons && (
          <Space className="pb-4 w-full">
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

        <Form form={form} onFinish={handleFinish} className="mt-4 w-full">
          <div className="w-full flex gap-[20px] items-center justify-between">
            <Form.Item
              className="w-full"
              name="firstname"
              rules={[{ required: true, message: "Please enter your first name" }]}
            >
              <p className="text-[#FFFFFF] text-[16px] font-medium">First Name*</p>
              <Input
                style={{
                  height: "44px",
                  backgroundColor: "#242424",
                  border: "none",
                  color: "#FFFFFF99",
                }}
                placeholder="Enter your first name"
                className="rounded-lg placeholder:text-[#FFFFFF99]"
              />
            </Form.Item>
            <Form.Item
              className="w-full"
              name="lastname"
              rules={[{ required: true, message: "Please enter your last name" }]}
            >
              <p className="text-[#FFFFFF] text-[16px] font-medium">Last Name*</p>
              <Input
                style={{
                  height: "44px",
                  backgroundColor: "#242424",
                  border: "none",
                  color: "#FFFFFF99",
                }}
                placeholder="Enter your last name"
                className="rounded-lg placeholder:text-[#FFFFFF99]"
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
              <p className="text-[#FFFFFF] text-[16px] font-medium">Password*</p>
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
              rules={[{ required: true, message: "Please enter your contact number" }]}
            >
              <p className="text-[#FFFFFF] text-[16px] font-medium">Contact Number*</p>
              <Input
                style={{
                  height: "44px",
                  backgroundColor: "#242424",
                  border: "none",
                  color: "#FFFFFF99",
                }}
                placeholder="Enter your contact number"
                className="rounded-lg ant-input"
              />
            </Form.Item>
          </div>

          <div className="flex justify-start items-center space-x-2">
            <label htmlFor="termsCheckbox" className="flex items-center cursor-pointer">
              <Checkbox className="text-white opacity-70" id="termsCheckbox">
                By creating your account you agree to the <span className="text-secoundary">terms of use</span> & our <span className="text-secoundary">privacy policy.</span>
              </Checkbox>
            </label>
          </div>

          <Button
          onClick={handlesignup}
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
            Sign UP
          </Button>
        </Form>
        <p className="mt-2 text-center text-sm text-white">
          Already have an account?{" "}
          <Link href="/auth/GuestLogin" className="text-[#EBCA7E]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

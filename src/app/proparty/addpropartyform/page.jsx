"use client";
import React from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Input, Form, Button } from "antd";
import { Select } from 'antd';
import imageone from '/public/icons/home.png'
const { Option } = Select;
import TextArea from "antd/es/input/TextArea";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const [form] = Form.useForm(); // Initialize the form instance

  const handleFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission logic here
  };
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };
  return (
    <div className="container mx-auto text-white">
      <h2 className="text-[28px] flex space-x-2 items-center font-bold mt-12">
        <button onClick={() => router.back()} className="focus:outline-none">
          <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
        </button>
        Tell us about your place
      </h2>
      <div className="flex itemcs-center justify-between py-6">
      <p className="text-[#FFFFFFCC] pt-4">
        Share some basic info, like where it is and how many guests can stay.
      </p>
      <Image src={imageone} alt="image"/>
      </div>

      <div>
        <Form form={form} onFinish={handleFinish} className="mt-4 w-full">

        <Select
      showSearch
      placeholder="Enter property categories"
      style={{
        height: "64px",
        width: "100%",
        color:"#ffff",
      }}
      onChange={handleChange}
      suffixIcon={<DownOutlined className="text-lg text-white" />}
      className="custom-select text-white mb-4" // Add a custom class
    >
      <Option value="rooms">Rooms</Option>
      <Option value="countryside">Country side</Option>
      <Option value="Apartment">Apartment</Option>
      <Option value="Beachfront">Beachfront</Option>
    </Select>



        <div className="w-full flex gap-[20px] items-center justify-between">
            <Form.Item
              className="w-full"
              name="location"
              rules={[{ required: true, message: "Please enter your location" }]}
            >
              <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">Location</p>
              <Input
                style={{
                  height: "64px",
                  backgroundColor: "#242424",
                  border: "none",
                  color: "#FFFFFF99",
                }}
                placeholder="Please enter your location of property"
                className="rounded-lg ant-input"
              />
            </Form.Item>

        
          </div>
          <div className="w-full flex gap-[20px] items-center justify-between">
            
            <Form.Item
              className="w-full"
              name="numofrooms"
              rules={[{ required: true, message: "Please enter your Number of rooms" }]}
            >
              <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">Number of rooms</p>
              <Input
                style={{
                  width: "100%",
                  height: "64px",
                  backgroundColor: "#242424",
                  border: "none",
                  color: "#FFFFFF99",
                }}
                type="text"
                placeholder="Enter the total number of your rooms"
                className="rounded-lg placeholder:text-[#FFFFFF99]"
              />
            </Form.Item>
          </div>

          <Form.Item
            name="guest"
            rules={[{ required: true, message: "Please enter that how many guest can stay" }]}
          >
            <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">Guest</p>
            <Input
              style={{
                height: "64px",
                backgroundColor: "#242424",
                border: "none",
                color: "#FFFFFF99",
              }}
              type="email"
              placeholder="Please enter that how many guest can stay"
              className="rounded-lg placeholder:text-[#FFFFFF99]"
            />
          </Form.Item>
          <Form.Item
            name="decription"
            rules={[{ required: true, message: "Please Describe about your" }]}
          >
            <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">Describe </p>
            <TextArea
              style={{
                height: "189px",
                backgroundColor: "#242424",
                border: "none",
                color: "#FFFFFF99",
              }}
              type="email"
              placeholder="Please enter that how many guest can stay"
              className="rounded-lg placeholder:text-[#FFFFFF99]"
            />
          </Form.Item>

          

          <Button
          onClick={()=>router.push('/proparty/makeitstandout')}
            style={{
              height: "64px",
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

export default Page;

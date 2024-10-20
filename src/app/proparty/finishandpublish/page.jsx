"use client";
import React from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Input, Form, Button, DatePicker } from "antd";
import { Select } from "antd";
import imageone from "/public/icons/car.png";
const { Option } = Select;
import TextArea from "antd/es/input/TextArea";
import {
  CalendarFilled,
  CalendarOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Swal from "sweetalert2";

const Page = () => {
  const router = useRouter();
  const [form] = Form.useForm(); 

  const handleFinish = (values) => {
    console.log("Form values:", values);
    // Handle form submission logic here
  };
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const handlepublish=()=>{
    Swal.fire({
      title: 'Property Added!',
      text: 'You have added property successfully .',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#EBCA7E',
    }).then(() => {
      router.push('/');
    });
  }
  return (
    <div className="container mx-auto text-white">
      <h2 className="text-[28px] flex space-x-2 items-center font-bold mt-12">
        <button onClick={() => router.back()} className="focus:outline-none">
          <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
        </button>
        Finish up & publish
      </h2>
      <div className="flex itemcs-center justify-between py-6">
        <p className="text-[#FFFFFFCC] pt-4">
          Choose a starting price, verify a few details, then publish your
          listing.
        </p>
        <Image src={imageone} alt="image" />
      </div>

      <div>
        <Form form={form} onFinish={handleFinish} className="mt-4 w-full">
          <div className="w-full flex gap-[20px] items-center justify-between">
            <Form.Item
              className="w-full "
              name="cost"
              rules={[
                { required: true, message: "Please enter your Per night cost" },
              ]}
            >
              <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">
                Per night cost
              </p>
              <Input
                style={{
                  height: "64px",
                  backgroundColor: "#242424",
                  border: "none",
                  color: "#FFFFFF99",
                }}
                placeholder="Please enter your Per night cost "
                className="rounded-lg ant-input text-[#FFFFFF99]"
              />
            </Form.Item>
          </div>
          <div className="w-full flex gap-[20px] items-center justify-between">
            <Form.Item
              className="w-full"
              name="minimumnight"
              rules={[
                {
                  required: true,
                  message: "Please enter your Minimum night for stay",
                },
              ]}
            >
              <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">
                Minimum night for stay
              </p>
              <Input
                style={{
                  width: "100%",
                  height: "64px",
                  backgroundColor: "#242424",
                  border: "none",
                  color: "#FFFFFF99",
                }}
                type="text"
                placeholder="Please enter that how many guest can stay"
                className="rounded-lg placeholder:text-[#FFFFFF99]"
              />
            </Form.Item>
          </div>

          <Form.Item
            name="maxgust"
            rules={[{ required: true, message: "Please enter Maximum guest" }]}
          >
            <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">
              Maximum guest
            </p>
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

          <div>
            <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">
              Room availability
            </p>

            <div className="lg:flex flex-row items-center justify-between gap-6">
              <Form.Item
                className="w-full"
                name="startdate"
                rules={[
                  { required: true, message: "Please enter a start date" },
                ]}
              >
                <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">
                  Start Date
                </p>
                <DatePicker
                  style={{
                    height: "64px",
                    backgroundColor: "#242424",
                    border: "none",
                    color: "#FFFFFF99",
                    width: "100%", // Ensure it takes the full width
                  }}
                  placeholder="Start date - 01-08-2024"
                  className="rounded-lg"
                  suffixIcon={
                    <CalendarOutlined
                      className="text-xl"
                      style={{ color: "#FFFFFF99" }}
                    />
                  } // Customize the icon here
                />
              </Form.Item>

              <Form.Item
                className="w-full"
                name="startdate"
                rules={[{ required: true, message: "Please enter a end date" }]}
              >
                <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">
                  End Date
                </p>
                <DatePicker
                  style={{
                    height: "64px",
                    backgroundColor: "#242424",
                    border: "none",
                    color: "#FFFFFF99",
                    width: "100%", // Ensure it takes the full width
                  }}
                  placeholder="end date - 01-08-2024"
                  className="rounded-lg"
                  suffixIcon={
                    <CalendarOutlined
                      className="text-xl"
                      style={{ color: "#FFFFFF99" }}
                    />
                  } // Customize the icon here
                />
              </Form.Item>
            </div>
          </div>

          <p className="text-[#FFFFFF] text-[16px] font-medium pb-1">
            What service you offer for user?
          </p>
          <Select
            showSearch
            placeholder="Enter property categories"
            style={{
              height: "64px",
              width: "100%",
              color: "#ffff",
            }}
            onChange={handleChange}
            suffixIcon={<DownOutlined className="text-lg text-white" />}
            className="custom-select text-white mb-4" // Add a custom class
          >
            <Option value="door">Lock on bedroom door</Option>
            <Option value="wifi">Wifi</Option>
            <Option value="tv">Tv</Option>
            <Option value="laggage">Luggage dropoff allowed</Option>
            <Option value="refrigerator">Refrigerator</Option>
            <Option value="Kitchen">Kitchen</Option>
            <Option value="Dedicatedworkspace">Dedicated workspace</Option>
            <Option value="Washer">Washer</Option>
            <Option value="Hair dryer">Hair dryer</Option>
            <Option value="Iron machine">Iron machine</Option>
          </Select>

          <Button
            onClick={handlepublish}
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

"use client";
import {
  CameraFilled,
  CreditCardOutlined,
  MobileFilled,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import userimg from "/public/images/user.png";
import React from "react";
import { MdOutlineChevronLeft, MdOutlineWork } from "react-icons/md";
import { BsTranslate } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";

const Page = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto bg-transparent text-white py-12 min-h-[700px]">
      <h2 className="text-xl flex space-x-2 items-center font-semibold mb-6">
        <button onClick={() => router.back()} className="focus:outline-none">
          <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
        </button>
        My profile
      </h2>

      <div className="lg:flex flex-row lg:space-y-0 space-y-12  justify-between space-x-4 ">
        <div className="max-w-xl w-full">
          <div className="flex items-center space-x-4">
            <div className="relative w-fit">
              <Image
                className="rounded-full"
                src={userimg}
                width={80}
                height={80}
                alt="user"
              />
              <div className="bg-secoundary rounded-full w-[74px] h-[32px] flex justify-center items-center space-x-2 absolute -bottom-4 left-1 text-black font-bold ">
                <CameraFilled className="text-xl" />
                <span>Add</span>
              </div>
            </div>

            <div>
              <h3 className="text-[16px] font-medium text-white">
                junior lopez
              </h3>
              <p className="text-[#FFFFFFCC] font-normal text-[14px]">Guest</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[28px] font-bold pb-12">About Jenifer Lopez</h1>
          <div className=" flex items-center space-x-4 ">
            <div className="space-y-4">
              <Input
                prefix={
                  <MdOutlineWork className="text-[#FFFFFFCC] pr-2 text-3xl" />
                }
                size="large"
                placeholder="Enter your occupation"
                className="bg-[#242424] hover:bg-[#242424]  border-none text-[#FFFFFFCC] opacity-70 text-[16px]"
              />
              <Input
                prefix={
                  <BsTranslate className="text-[#FFFFFFCC] pr-2 text-3xl" />
                }
                size="large"
                placeholder="Enter suitable language"
                className="bg-[#242424] hover:bg-[#242424]  border-none text-[#FFFFFFCC] opacity-70 text-[16px]"
              />
            </div>
            <div className="space-y-4">
              <Input
                prefix={
                  <MobileFilled className="text-[#FFFFFFCC] pr-2 text-2xl" />
                }
                size="large"
                placeholder="Enter your contact number"
                className="bg-[#242424] hover:bg-[#242424]  border-none text-[#FFFFFFCC] opacity-70 text-[16px]"
              />
              <Input
                prefix={<CiGlobe className="text-[#FFFFFFCC] pr-2 text-3xl" />}
                size="large"
                placeholder="Enter your address"
                className="bg-[#242424] hover:bg-[#242424]  border-none text-[#FFFFFFCC] opacity-70 text-[16px]"
              />
            </div>
          </div>

          <Button
            style={{
              backgroundColor: "#EBCA7E",
              width: "240px",
              height: "44px",
              color: "#000000",
            }}
            type="primary"
            className=" border-none text-black font-bold mt-12"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;

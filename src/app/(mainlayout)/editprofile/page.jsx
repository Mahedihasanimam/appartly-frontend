"use client";
import {
  CameraFilled,
  MobileFilled,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import userimg from "/public/images/user.png";
import React, { useRef, useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

const Page = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(userimg);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [blogImage, setBlogImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBlogImage(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setBlogImage(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    // Handle the submission logic here, e.g., sending the data to a server
    console.log({ firstName, lastName, contactNumber, address, blogImage });
  };

  return (
    <div className="container mx-auto bg-transparent text-white py-12 min-h-[700px]">
      <h2 className="text-xl flex space-x-2 items-center font-semibold mb-6">
        <button onClick={() => router.back()} className="focus:outline-none">
          <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
        </button>
        My profile
      </h2>

      <div className="lg:flex flex-row lg:space-y-0 space-y-12 justify-between space-x-4">
        <div className="max-w-xl w-full">
          <div className="flex items-center space-x-4">
            <div className="relative w-fit">
              <Image
                className="rounded-full"
                src={selectedImage}
                width={80}
                height={80}
                alt="user"
              />
              <div className="bg-secoundary rounded-full w-[74px] h-[32px] flex justify-center items-center space-x-2 absolute -bottom-4 left-1 text-black font-bold">
                <label htmlFor="imageUpload" className="cursor-pointer">
                  <CameraFilled className="text-xl" />
                  <span>Add</span>
                </label>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageUpload}
                />
              </div>
            </div>

            <div>
              <h3 className="text-[16px] font-medium text-white">Junior Lopez</h3>
              <p className="text-[#FFFFFFCC] font-normal text-[14px]">Guest</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-[28px] font-bold pb-12">About You</h1>
          <div className="space-y-4 w-full">
            <div className="lg:flex flex-row items-center space-x-4">
              <Input
                size="large"
                style={{ backgroundColor: "#242424" }}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#242424] text-[#FFFFFFCC] opacity-70 text-[16px]"
              />
              <Input
                style={{ backgroundColor: "#242424" }}
                placeholder="Last Name"
                size="large"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#242424] text-[#FFFFFFCC] opacity-70 text-[16px]"
              />
            </div>
            <div className="lg:flex flex-row items-center space-x-4">
              <Input
                style={{ backgroundColor: "#242424" }}
                prefix={<MobileFilled className="text-[#FFFFFFCC] pr-2 text-2xl" />}
                size="large"
                placeholder="Enter your contact number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="bg-[#242424] text-[#FFFFFFCC] opacity-70 text-[16px]"
              />
              <Input
                style={{ backgroundColor: "#242424" }}
                prefix={<CiGlobe className="text-[#FFFFFFCC] pr-2 text-3xl" />}
                size="large"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-[#242424] text-[#FFFFFFCC] opacity-70 text-[16px]"
              />
            </div>

            <div>
            
              <div
                className='w-full p-6 bg-[#242424] text-white rounded border-2 border-dashed border-gray-500 flex justify-center items-center cursor-pointer'
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={handleDivClick}
              >
                {blogImage ? (
                  <p>{blogImage.name}</p>
                ) : (
                  <p className="text-[#FFFFFFCC] opacity-70">Drag & drop an image here or click to upload</p>
                )}
                <input
                  type='file'
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className='hidden'
                  accept='image/*'
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#EBCA7E",
              width: "240px",
              height: "44px",
              color: "#000000",
            }}
            type="primary"
            className="border-none text-black font-bold mt-12"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;

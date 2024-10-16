"use client";
import React, { useState } from "react";
import { Card, Button, Tabs, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import imageone from "/public/images/about.png";
import imagetow from "/public/images/user.png";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";

const UserCard = ({ user }) => {
  const router = useRouter({ user });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Card
        onClick={showModal}
        className="bg-[#242424] border-none text-white w-full rounded-lg shadow-lg  my-6 w-full text-white"
      >
        <div className="lg:flex flex-row lg:space-y-0 space-y-6 items-center">
          <Image
            src={user.image}
            alt="User"
            className="w-[400px]  h-[164px] rounded-lg  object-cover"
          />
          <div className="ml-6 flex justify-around  w-full items-center text-white">
            <div className="space-y-2 text-[16px] text-[#FFFFFFB2]">
              <p>Name:</p>
              <p>Email:</p>
              <p>Contact:</p>
              <p>Location: </p>
            </div>
            <div className="space-y-2 text-[16px] text-[#FFFFFFB2]">
              <p> {user.name}</p>
              <p>{user.email}</p>
              <p> {user.contact}</p>
              <p>{user.location}</p>
            </div>
          </div>
          <div className="ml-6 flex justify-around  w-full items-center text-white">
            <div className="space-y-2 text-[16px] text-[#FFFFFFB2]">
              <p>Name:</p>
              <p>Email:</p>
              <p>Contact:</p>
              <p>Location: </p>
            </div>
            <div className="space-y-2 text-[16px] text-[#FFFFFFB2]">
              <p> Md. Riyazul Hasan</p>
              <p>riyazu012@gmail.com</p>
              <p> +880-2154522525</p>
              <p> Melbourne, Australia</p>
            </div>
          </div>
        </div>
      </Card>

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        closeIcon={<MdClose className="text-white" />}
        className="custom-modal"
        bodyStyle={{
          backgroundColor: "#242424",
          padding: "20px",
          borderRadius: "8px",
        }}
        style={{
          backgroundColor: "#242424", // Black overlay with some opacity
        }}
      >
        <div className="text-white">
          <Image
            src={user.image}
            alt={user.name}
            className="w-[164px] h-[164px] rounded-lg mx-auto mb-4"
          />
          <h3 className="text-lg font-bold mb-2 text-center">{user.name}</h3>
         <div className="flex items-center justify-between py-6 space-x-4">
         <div className="text-sm space-y-2 text-[#FFFFFFB2] ">
            <strong>Email:</strong>
            <p>Contact:</p>
            <p>Location:</p>
            <p>Check-in date:</p>
            <p>Stay for:</p>
            <p>Guests:</p>
            <p>Pay:</p>
          </div>
          <div className="text-sm space-y-2 text-[#FFFFFFB2]">
            <p>{user.email}</p>
            <p>{user.contact}</p>
            <p>{user.location}</p>
            <p>{user.checkInDate || 'noname'}</p>
            <p>{user.stay || 'noname'}</p>
            <p>{user.guests || 'noname'}</p>
            <p>{user.pay || 'noname'}</p>
          </div>
         </div>

          <button
            onClick={handleCancel}
            className="bg-secoundary text-black mt-4 w-full py-2 rounded-md font-semibold"
          >
            Complete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UserCard;

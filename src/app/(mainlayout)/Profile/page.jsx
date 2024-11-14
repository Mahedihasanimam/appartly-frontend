"use client";
import React, { useState } from "react";
import { Card, Button, Table, Rate, Modal } from "antd";
import { MdOutlineChevronLeft, MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineEdit, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import imageone from "/public/images/user.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaLanguage } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";
import { MobileOutlined } from "@ant-design/icons";
import Link from "next/link";
import { PiSprayBottleDuotone } from "react-icons/pi";
import { IoKeySharp } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
const Profile = () => {
  

  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ratings, setRatings] = useState({
    cleanliness: 0,
    checkIn: 0,
    communication: 0,
    value: 0,
  });

  const handleReviewClick = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    console.log("Ratings:", ratings);
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleRatingChange = (field, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [field]: value,
    }));
  };

  const data = [
    {
      key: "1",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "---",
      review: <a onClick={handleReviewClick} className="text-[#EBCA7E]">Give review</a>,
    },
    {
      key: "2",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "3",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "---",
      review: <a onClick={handleReviewClick} className="text-[#EBCA7E]">Give review</a>,
    },
    {
      key: "4",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "5",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "6",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "7",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "8",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "---",
      review: <a onClick={handleReviewClick}   className="text-[#EBCA7E]">Give review</a>,
    },
    {
      key: "49",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "10",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
  ];


  const columns = [
    {
      title: "Room Id",
      dataIndex: "roomId",
      key: "roomId",
      render: (text) => (
        <div className="flex items-center space-x-2">
          <Image
            src={imageone}
            alt="Room"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Check in",
      dataIndex: "checkIn",
      key: "checkIn",
    },
    {
      title: "Check out",
      dataIndex: "checkOut",
      key: "checkOut",
    },
    {
      title: "Review",
      dataIndex: "review",
      key: "review",
    },
  ];

  return (
    <div className="p-4 container mx-auto text-white">
      {/* Header */}
      <h2 className="text-xl flex space-x-2 items-center font-semibold mb-6">
        <button onClick={() => router.back()} className="focus:outline-none">
          <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
        </button>
        My profile
      </h2>

     
     


      <div className="lg:flex flex-row space-x-6 mb-8 ">
        <Card className="bg-[#2C2C2E] w-full max-w-sm  w-full p-4 border-none h-fit">
          <div className="text-white flex items-center w-fit mx-auto space-x-2 ">
            <Image
              src={imageone}
              alt="User"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Jenifer Lopez</h3>
              <p className="text-[#FFFFFF66]">Guest</p>
            </div>
          </div>
          <p className="text-[#FFFFFFCC] font-medium text-center ">1</p>
          <p className="text-[#FFFFFFCC] font-medium  mt-2 text-center">
            {" "}
            Month on Appartali
          </p>
        </Card>
        <Card className="bg-transparent lg:w-2/3 w-full p-4 border-none h-fit text-[#FFFFFF]">
          <h3 className="text-[28px] font-bold text-[#FFFFFF] mb-4">
            About Jenifer Lopez
          </h3>
          <Button
          onClick={() => router.push("/editprofile")}
            style={{ backgroundColor: "transparent", color: "#EBCA7E" }}
            className="bg-transparent border-[1px] border-secoundary rounded-[4px] w-fit px-4 py-2 text-sm font-semibold text-secoundary font-bold  mb-4"
          >
            Edit Profile
          </Button>
          <div className="space-y-4 lg:flex flex-row items-center justify-between">
            <div className="space-y-3">
              <p className="flex gap-3  text-[16px] text-white font-medium">
                {" "}
                <MdOutlineWorkOutline className="text-[24px]" /> My work:{" "}
                <span className="text-white opacity-70">F&B Business</span>
              </p>
              <p className="flex gap-3 text-[16px] text-white font-medium">
                {" "}
                <FaLanguage className="text-[24px]" /> Language:{" "}
                <span className="text-white opacity-70">English & Spanish</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex gap-3  text-[16px] text-white font-medium">
                {" "}
                <MobileOutlined className="text-[24px]" /> Contact number:{" "}
                <span className="text-white opacity-70"> +8801-5659545</span>
              </p>
              <p className="flex gap-3 text-[16px] text-white font-medium">
                {" "}
                <CiGlobe className="text-[24px]" /> Lives in:{" "}
                <span className="text-white opacity-70">
                  {" "}
                  Times Square, USA
                </span>
              </p>
            </div>
          </div>
        </Card>
      </div>


































      {/* Booking List */}
      <div className="p-2 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold mb-4">Booking list</h3>
          <Button
            onClick={() => router.push("/bookingList")}
            style={{ backgroundColor: "transparent", color: "#EBCA7E" }}
            className="bg-transparent border-[1px] border-secoundary rounded-[4px] w-fit px-4 py-2 text-sm font-semibold text-secoundary font-bold mb-4"
          >
            See all
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="custom-table"
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>

      {/* Review Modal */}
      <Modal
      width={700}
      className="custom-modal text-white"
       
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button className="hidden" key="cancel"  style={{ backgroundColor: "#ccc", color: "#000" }}>
            Cancel
          </Button>,
        
        <Button className="mt-6"  key="submit" onClick={handleModalOk} style={{ backgroundColor: "#EBCA7E",height:"44px",width:"100%", color: "#0F0F0F",fontWeight:700 }}>
        Submit
      </Button>,
        ]}
      
        
      >
        <div className="lg:flex md:flex flex-row items-center justify-between space-y-4 pt-6">
          <div className="space-y-2 pt-4 ">
          <PiSprayBottleDuotone className="text-xl block mx-auto" />


            <p className="text-[16px] font-medium text-center">Cleanliness:</p>
            <Rate
              onChange={(value) => handleRatingChange("cleanliness", value)}
              value={ratings.cleanliness}
            />
          </div>
          <div className="space-y-2">
          <IoKeySharp className="text-xl block mx-auto" />

            <p className="text-[16px] font-medium text-center">Check in:</p>
            <Rate
              onChange={(value) => handleRatingChange("checkIn", value)}
              value={ratings.checkIn}
            />
          </div>
          <div className="space-y-2">
          <BiMessageRoundedDetail className="text-xl block mx-auto" />

            <p className="text-[16px] font-medium text-center">Communication:</p>
            <Rate
              onChange={(value) => handleRatingChange("communication", value)}
              value={ratings.communication}
            />
          </div>
          <div className="space-y-2">
          <RiCircleLine className="text-xl block mx-auto"  />
            <p className="text-[16px] font-medium text-center">Value:</p>
            <Rate
              onChange={(value) => handleRatingChange("value", value)}
              value={ratings.value}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;

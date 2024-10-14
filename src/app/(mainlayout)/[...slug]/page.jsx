"use client";

import React, { useState } from "react";
import { Carousel, DatePicker, InputNumber, Button, Rate } from "antd";
import Image from "next/image";
import slideimage from "/public/images/Rectangle 67.png";
import slideimage2 from "/public/images/Rectangle 68.png";
import {
  CheckCircleFilled,
  FileOutlined,
  HeartOutlined,
  HomeFilled,
  LeftOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import favimg from "/public/icons/fevorite.png";
const { RangePicker } = DatePicker;

import {
  WifiOutlined,
  LockOutlined,
  CoffeeOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import { MdLiveTv, MdLuggage } from "react-icons/md";
import { LuRefrigerator } from "react-icons/lu";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiSolidWasher } from "react-icons/bi";
import { PiHairDryerLight } from "react-icons/pi";
import { TbIroning1 } from "react-icons/tb";

import { Card, Avatar, List, Divider, Progress, Tooltip } from "antd"; // Import from Ant Design
import profileimg from "/public/images/about.png";

const Page = ({ params }) => {
  console.log(params);

  const [activeSlide, setActiveSlide] = useState(0);
  const [dates, setDates] = useState(null);
  const [guests, setGuests] = useState(2);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const perNightRate = 560;
  const cleaningFee = 80;
  const serviceFee = 80;

  const images = [slideimage, slideimage2];

  const handleDateChange = (dateRange) => {
    setDates(dateRange);
    calculateTotal(dateRange, guests);
    console.log("Selected Dates:", dateRange);
  };

  const handleGuestsChange = (value) => {
    setGuests(value);
    calculateTotal(dates, value);
    console.log("Number of Guests:", value);
  };

  const calculateTotal = (dateRange, guests) => {
    if (dateRange) {
      const [checkIn, checkOut] = dateRange;
      const nights = checkOut.diff(checkIn, "day");
      const roomTotal = perNightRate * nights;
      const calculatedTotal = roomTotal + cleaningFee + serviceFee;

      setTotal(calculatedTotal);
      console.log("Total Calculation:", {
        nights,
        roomTotal,
        cleaningFee,
        serviceFee,
        total: calculatedTotal,
      });
    } else {
      setTotal(0);
      console.log("Total Calculation: $0.00 (no dates selected)");
    }
  };

  const handlePreviewClick = (index) => {
    setActiveSlide(index);
  };

  const handleReserveClick = () => {
    console.log("Reservation Details:");
    console.log("Selected Dates:", dates);
    console.log("Number of Guests:", guests);
    console.log("Total Amount:", total);
  };

  const handleRateChange = (newValue) => {
    if (isRated && newValue === value) {
      setValue(0);
      setIsRated(false);
    } else {
      setValue(newValue);
      setIsRated(true);
    }
  };

  return (
    <div className="bg-[]">
      <div className="container mx-auto mt-8 text-white flex items-center justify-between p-4  ">
        <Link className="text-lg font-medium" href="/">
          {" "}
          <LeftOutlined /> Stylish ensuite double bedroom in trendy Dalston
        </Link>
        <div className="text-[16px] font-medium">
          <Rate
            value={value}
            count={1}
            onChange={handleRateChange}
            character={
              <HeartOutlined style={{ color: isRated ? "red" : "white" }} />
            }
            style={{ color: isRated ? "red" : "white" }} // Change the color based on state
            className="custom-rate"
          />
          <span className="pl-2 ">Save</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-white lg:p-2 md:p-2 p-8 lg:p-16 container mx-auto">
        {/* Image Carousel */}
        <div className="lg:w-2/3">
          <Carousel
            afterChange={(current) => setActiveSlide(current)}
            ref={(carousel) => {
              if (carousel) {
                carousel.goTo(activeSlide);
              }
            }}
          >
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`Room Slide ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </Carousel>
          {/* Preview Section */}
          <div className="mt-4 flex space-x-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  activeSlide === index ? "border-2 border-yellow-500" : ""
                }`}
                onClick={() => handlePreviewClick(index)}
              >
                <Image
                  src={image}
                  alt={`Preview ${index + 1}`}
                  width={150}
                  height={100}
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-[24px] font-bold text-[#FFFFFF]">
            Room in Clichy, France
          </p>
          <p className="text-sm">Room id: 569845</p>
        </div>

        {/* Booking Form */}
        <div className="lg:w-1/3 lg:ml-8 mt-8 lg:mt-0 bg-[#1B1B1B] h-fit pb-20 rounded-lg space-y-8 p-6">
          <h2 className="text-2xl  font-semibold">
            ${perNightRate.toFixed(2)}{" "}
            <span className="text-base font-light">Per night</span>
          </h2>

          <div className="mt-4">
            <RangePicker
              style={{
                height: "44px",
                backgroundColor: "#4B4B4B",
                border: "none",
                color: "white",
              }}
              className="w-full text-[16px] font-medium"
              placeholder={["Check-in", "Check-out"]}
              onChange={handleDateChange}
            />
          </div>

          <div className="mt-4">
            <InputNumber
              min={1}
              max={10}
              defaultValue={2}
              className="w-full text-[16px] font-medium custom-input" // Add custom class
              placeholder="Guests"
              onChange={handleGuestsChange}
            />
          </div>

          <Button
            style={{
              height: "44px",
              backgroundColor: "#EBCA7E",
              border: "none",
              color: "#0F0F0F",
            }}
            type="primary"
            className="mt-4 w-full text-[16px] font-bold bg-yellow-500 font-bold text-black"
            onClick={handleReserveClick} // Attach the click handler here
          >
            Reserve
          </Button>
          <p className="mt-4 text-sm text-[#FFFFFFB2] font-medium text-center py-8">
            You won’t be charged yetz
          </p>
          {/* Pricing Breakdown */}
          <div className="mt-8 text-[16px] font-medium text-[#FFFFFFCC] ">
            {dates ? (
              <div className="text-[#FFFFFF] font-medium space-y-3">
                <p className="flex justify-between ">
                  <span>
                    ${perNightRate} * {dates[1].diff(dates[0], "day")} nights
                  </span>
                  <span>${perNightRate * dates[1].diff(dates[0], "day")}</span>
                </p>
                <p className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>${cleaningFee}</span>
                </p>
                <p className="flex justify-between">
                  <span>Appartali service fee</span>
                  <span>${serviceFee}</span>
                </p>
                <hr className="my-2 " />
                <p className="flex pt-2 justify-between font-medium text-[#FFFFFF]">
                  <span>Total before taxes</span>
                  <span>${total.toFixed(2)}</span>
                </p>
              </div>
            ) : (
              <div className="text-[#FFFFFF] font-medium space-y-3">
                <p className="flex justify-between">
                  <span>$0.00 * 0 nights</span>
                  <span>$0.00</span>
                </p>
                <p className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>$0.00</span>
                </p>
                <p className="flex justify-between">
                  <span>Appartali service fee</span>
                  <span>$0.00</span>
                </p>
                <hr className="my-2 border-dashed border-1 border-gray-600" />
                <p className="flex pt-2 justify-between text-[#FFFFFF] font-medium">
                  <span>Total before taxes</span>
                  <span>$0.00</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-[#1B1B1B]  lg:flex flex-wrap space-y-6 text-center items-center justify-between p-4 my-8 rounded-lg">
        <div className="text-[#FFFFFF] font-bold text-[28px] flex items-center justify-arround p-4 w-fit gap-4 lg:mx-0  mx-auto">
          <Image
            src={favimg}
            alt="Favourite"
            width={30}
            height={30}
            className="mr-2"
          />
          <span className="text-white font-medium">
            Guest <br /> favorite
          </span>
          <Image
            src={favimg}
            alt="Favourite"
            width={30}
            height={30}
            className="mr-2"
          />
        </div>
        <div>
          <p className="text-[#FFFFFFCC] font-medium text-[16px]  ">
            One of the most loved homes <br /> on Appartali, according to guest
          </p>
        </div>

        <div className="text-[#FFFFFFCC]">
          <h1 className="text-[24px] font-bold pl-4">4.91</h1>
          <Rate style={{ color: "white" }} disabled defaultValue={4.9} />
        </div>
        <div className="text-[#FFFFFFCC] ">
          <h1 className="text-[24px] font-bold">110</h1>
          <p className="underline">Reviews </p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="lg:flex md:flex flex-row items-center justify-between p-4 my-8 border border-[#424242] rounded-lg">
          {/* Profile Section */}
          <Card className="w-full bg-transparent text-white" bordered={false}>
            <div className="flex items-center">
              <Avatar
                size="large"
                icon={
                  <Image
                    height={96}
                    width={96}
                    src={profileimg}
                    alt="Profile"
                  />
                }
              />
              <div className="ml-4">
                <h2 className="text-xl  font-bold">Stay with David</h2>
                <p className="text-sm text-[#FFFFFFCC]">
                  Superhost • 12 years hosting
                </p>
              </div>
            </div>
            <br />
            <h2 className="text-xl  font-bold py-4">About this place</h2>
            <p className="text-[#FFFFFFCC] text-[16px] font-normal leading-6 max-w-lg">
              I rent a small room in my house, it is new and cosy. House is
              quite light, modern and guest can cook. Bathroom will be shared.
              House is 6 minutes from lines 14 and 13, RER and tram. it takes 20
              minutes to go to City center. many restaurants, bars, supermarkets
              around my house.
            </p>
          </Card>

          {/* About Room Section */}
          <Card
            className="w-full bg-transparent text-white mt-4"
            bordered={false}
          >
            <h2 className="text-xl  font-bold py-4">About room</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <HomeOutlined className="text-xl" />{" "}
                <div>
                  <h3 className="text-lg  font-bold text-[#FFFFFF]">
                    Room in a town house
                  </h3>{" "}
                  <p className="text-sm text-[#FFFFFFCC] font-normal">
                    Your own room in a home, plus access to shared spaces.
                  </p>{" "}
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <HomeFilled className="text-xl" />{" "}
                <div>
                  <h3 className="text-lg  font-bold text-[#FFFFFF]">
                    Shared common spaces
                  </h3>{" "}
                  <p className="text-sm text-[#FFFFFFCC] font-normal">
                    You'll share parts of the home with the Host.
                  </p>{" "}
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <ShopOutlined className="text-xl" />{" "}
                <div>
                  <h3 className="text-lg  font-bold text-[#FFFFFF]">
                    Shared bathroom
                  </h3>{" "}
                  <p className="text-sm text-[#FFFFFFCC] font-normal">
                    You’ll share the bathroom with others.
                  </p>{" "}
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircleFilled className="text-xl" />{" "}
                <div>
                  <h3 className="text-lg  font-bold text-[#FFFFFF]">
                    David is a superhost
                  </h3>{" "}
                  <p className="text-sm text-[#FFFFFFCC] font-normal">
                    Superhosts are experienced, highly rated Hosts.
                  </p>{" "}
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div className=" container mx-auto  border-b-2 border-[#424242]  my-6">
        <h2 className="text-xl text-white  font-bold">
          What this places offers
        </h2>
        <div className="lg:flex md:flex flex-row items-center justify-between p-4 my-8 lg:max-w-4xl w-full">
          <div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4 text-[#FFFFFFCC]  font-normal">
                <LockOutlined className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal text-[16px]">
                  Lock on bedroom door
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <WifiOutlined className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal    text-[16px]">
                  Free Wi-Fi
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <MdLiveTv className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal    text-[16px]">
                  Tv
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <MdLuggage className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal    text-[16px]">
                  Luggage dropoff allowed
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <LuRefrigerator className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal    text-[16px]">
                  Refrigerator
                </p>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <CoffeeOutlined className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                  Kitchen
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <BsPersonWorkspace className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                Dedicated workspace
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <BiSolidWasher className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                Washer
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <PiHairDryerLight className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                Hair dryer
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <TbIroning1 className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                Iron machine
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

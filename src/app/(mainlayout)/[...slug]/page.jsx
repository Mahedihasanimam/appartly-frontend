"use client";

import React, { useState } from "react";
import { Carousel, DatePicker, InputNumber, Button, Rate } from "antd";
import Image from "next/image";
import slideimage from "/public/images/Rectangle 67.png";
import slideimage2 from "/public/images/Rectangle 68.png";
import { HeartOutlined, LeftOutlined } from "@ant-design/icons";
import Link from "next/link";

const { RangePicker } = DatePicker;

const Page = ({ params }) => {
  const { slug } = params;

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
    <div>

        <div className="container mx-auto mt-8 text-white flex items-center justify-between p-4  ">
            <Link className="text-lg font-medium" href="/"> <LeftOutlined /> Stylish ensuite double bedroom in trendy Dalston</Link>
           <div className="text-[16px] font-medium">
           <Rate
            value={value}
            count={1}
            onChange={handleRateChange}
            character={<HeartOutlined style={{ color: isRated ? 'red' : 'white' }} />}
            style={{ color: isRated ? 'red' : 'white' }} // Change the color based on state
            className="custom-rate"
        />
         <span className="pl-2 ">Save</span>
           </div>
        </div>
      <div className="flex flex-col lg:flex-row bg-black text-white lg:p-2 md:p-2 p-8 lg:p-16 container mx-auto">
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
          <p className="mt-4 text-[24px] font-bold text-[#FFFFFF]">Room in Clichy, France</p>
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
          <p className="mt-4 text-sm text-[#FFFFFFB2] font-medium text-center py-8">You won’t be charged yetz</p>
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
    </div>
  );
};

export default Page;

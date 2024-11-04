'use client'; // Ensure this component uses client-side rendering
import { Button, DatePicker, Image, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Carousel } from 'antd';
import { useState } from "react";
import dayjs from 'dayjs';
import heroimg1 from "/public/images/heroimg.png";


const Hero = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState('');
  const [isCheckInVisible, setIsCheckInVisible] = useState(false);
  const [isCheckOutVisible, setIsCheckOutVisible] = useState(false);

  const handleSearch = () => {
    console.log({
      destination,
      checkInDate: checkInDate ? dayjs(checkInDate).format('YYYY-MM-DD') : '',
      checkOutDate: checkOutDate ? dayjs(checkOutDate).format('YYYY-MM-DD') : '',
      guestCount,
    });
  };

  return (
    <div className="relative w-full min-h-[407px] container mx-auto ">
      {/* Hero section with carousel background */}
      <Carousel autoplay className="absolute top-0 left-0 w-full h-full z-0">
        <div className="w-full">
          <Image src={heroimg1.src} alt="HeroImage1" className="w-full min-h-[600px]  h-full object-cover" />
        </div>
        <div>
          <Image src={heroimg1.src} alt="Hero Image 2" className="w-full min-h-[600px]  h-full object-cover" />
        </div>
        <div>
          <Image src={heroimg1.src} alt="Hero Image 3" className="w-full min-h-[600px]  h-full object-cover" />
        </div>
      </Carousel>

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center  z-20 px-4 sm:px-6 lg:px-0">
        <div className="max-w-4xl text-center">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold">
            Experience Unforgettable Stays <br /> with Our Easy Room Booking
          </h1>
          <p className="text-white text-lg leading-tight mt-4">
            Discover the perfect accommodation tailored just for you, whether it’s a weekend getaway or a business trip.
          </p>
        </div>

        {/* Search input */}
        <div className="lg:flex md:flex sm:flex hidden items-center bg-[#FFFFFF99] rounded-xl shadow-lg px-4 sm:px-6 lg:px-8 py-4 space-y-4 sm:space-y-0 sm:space-x-4 lg:max-w-4xl w-full mx-auto my-6 lg:mt-20 mt-8">
          <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out">
            <p className="text-[16px] text-[#000000] pl-2">Where</p>
            <Input
              placeholder="Add destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              bordered={false}
              className="text-sm text-gray-700"
            />
          </div>
          <div className="h-12 border-r border-gray-500"></div>
          <div
            className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsCheckInVisible(true)}
            onMouseLeave={() => setIsCheckInVisible(false)}
          >
            <p className="text-[16px] text-[#000000] pl-2">Check In</p>
            {isCheckInVisible ? (
              <DatePicker
                className="w-full"
                open={isCheckInVisible}
                onOpenChange={(open) => setIsCheckInVisible(open)}
                onChange={(date) => setCheckInDate(date)}
              />
            ) : (
              <Input
                placeholder="Add Dates"
                value={checkInDate ? dayjs(checkInDate).format('YYYY-MM-DD') : ''}
                bordered={false}
                className="text-sm text-gray-700"
                readOnly
              />
            )}
          </div>
          <div className="h-12 border-r border-gray-400"></div>
          <div
            className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsCheckOutVisible(true)}
            onMouseLeave={() => setIsCheckOutVisible(false)}
          >
            <p className="text-[16px] text-[#000000] pl-2">Check Out</p>
            {isCheckOutVisible ? (
              <DatePicker
                className="w-full"
                open={isCheckOutVisible}
                onOpenChange={(open) => setIsCheckOutVisible(open)}
                onChange={(date) => setCheckOutDate(date)}
              />
            ) : (
              <Input
                placeholder="Add Dates"
                value={checkOutDate ? dayjs(checkOutDate).format('YYYY-MM-DD') : ''}
                bordered={false}
                className="text-sm text-gray-700"
                readOnly
              />
            )}
          </div>
          <div className="h-12 border-r border-gray-400"></div>
          <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out">
            <p className="text-[16px] text-[#000000] pl-4">Who</p>
            <Input
              placeholder="Add Guest"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              bordered={false}
              className="text-sm text-gray-700"
            />
          </div>
          <button
            className="bg-[#EBCA7E] h-[48px] w-[48px] rounded-[40px] text-white flex items-center justify-center"
            onClick={handleSearch}
          >
            <SearchOutlined className="text-lg text-black" />
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;

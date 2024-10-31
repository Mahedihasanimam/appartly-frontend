'use client'
import React, { useState } from 'react';
import Hero from '@/components/Home/Hero';
import Proparty from '@/components/Home/Proparty';
import Rooms from '@/components/Home/Rooms';
import { SearchOutlined } from '@ant-design/icons';
import { Input, DatePicker } from 'antd';
import dayjs from 'dayjs';

const Page = () => {
    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guestCount, setGuestCount] = useState('');

    const [isCheckInVisible, setIsCheckInVisible] = useState(false);
    const [isCheckOutVisible, setIsCheckOutVisible] = useState(false);

    const handleSearch = () => {
        // Log all collected data to the console
        console.log({
            destination,
            checkInDate: checkInDate ? dayjs(checkInDate).format('YYYY-MM-DD') : '',
            checkOutDate: checkOutDate ? dayjs(checkOutDate).format('YYYY-MM-DD') : '',
            guestCount,
        });
    };

    return (
        <div>
          {/* Search input ------------------------ */}
          <div className="lg:flex md:flex sm:flex hidden items-center bg-[#FFFFFF99] rounded-xl shadow-lg px-6 space-x-4 max-w-4xl mx-auto my-6">
            <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out my-2">
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
              className="bg-yellow-400 h-[48px] w-[48px] rounded-lg text-white"
              onClick={handleSearch}
            >
              <SearchOutlined className="text-lg" />
            </button>
          </div>

          <Rooms />
          <Proparty />
        </div>
    );
};

export default Page;

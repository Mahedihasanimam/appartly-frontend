import Hero from '@/components/Home/Hero';
import Proparty from '@/components/Home/Proparty';
import Rooms from '@/components/Home/Rooms';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import React from 'react';

const page = () => {
    return (
        <div>
          {/* search input ------------------------ */}
          <div className="flex items-center bg-[#FFFFFF99] rounded-xl shadow-lg px-6 space-x-4 max-w-4xl mx-auto my-6 ">
            <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out my-2">
              <p className="text-[16px] text-[#000000] pl-2 ">Where</p>
              <Input
                placeholder="Add destination"
                bordered={false}
                className="text-sm text-gray-700"
              />
            </div>
            <div className="h-12 border-r border-gray-500"></div>
            <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out">
              <p className="text-[16px] text-[#000000] pl-2 ">Check In</p>
              <Input
                placeholder="Add Dates"
                bordered={false}
                className="text-sm text-gray-700"
              />
            </div>
            <div className="h-12 border-r border-gray-400"></div>
            <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out">
              <p className="text-[16px] text-[#000000] pl-2 ">Check Out</p>
              <Input
                placeholder="Add Dates"
                bordered={false}
                className="text-sm text-gray-700"
              />
            </div>
            <div className="h-12 border-r border-gray-400"></div>
            <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out">
              <p className="text-[16px] text-[#000000] pl-4 ">Who</p>
              <Input
                placeholder="Add Guest"
                bordered={false}
                className="text-sm text-gray-700"
              />
            </div>
            <button className="bg-yellow-400 h-[48px] w-[48px] rounded-lg text-white">
              <SearchOutlined className="text-lg" />
            </button>
          </div>
    
          <Rooms/>
          <Proparty/>
        </div>
    );
};

export default page;
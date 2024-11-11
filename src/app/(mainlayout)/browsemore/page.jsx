"use client";

import React, { useState } from "react";
import { Input, DatePicker, Button, Tabs, Pagination } from "antd";
import dayjs from "dayjs";
import { SearchOutlined } from "@ant-design/icons";
import RoomsCard from "@/components/ui/RoomsCard";
import roomimage from "/public/images/roomimage.png";
import { useGetRoomsQuery } from "@/redux/features/Propertyapi/page";


const Page = () => {
  const { data, isError, isLoading, refetch } = useGetRoomsQuery({}, {
    refetchOnFocus: true
  });


  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState("");
  const [activeKey, setActiveKey] = useState("1");
  const [isCheckInVisible, setIsCheckInVisible] = useState(false);
  const [isCheckOutVisible, setIsCheckOutVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // Adjust page size as needed

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading rooms data</div>;
  }
  const handleSearch = () => {
    console.log({
      destination,
      checkInDate: checkInDate ? dayjs(checkInDate).format("YYYY-MM-DD") : "",
      checkOutDate: checkOutDate
        ? dayjs(checkOutDate).format("YYYY-MM-DD")
        : "",
      guestCount,
    });
  };
  // Log the data structure to verify its contents
  console.log("property data: ", data?.properties);

  // Extract properties from the data for easier handling
  const roomsData = data?.properties || [];
  console.log(roomsData);

  // Create a unique list of categories with "All Category" at the beginning
  const uniqueCategories = Array.from(new Set(roomsData.map((room) => room.category)));
  const categories = ['All Category', ...uniqueCategories];

  // Function to handle tab change
  const handleTabChange = (key) => {
    setActiveKey(key);
    setCurrentPage(1); // Reset to page 1 when category changes
  };

  // Function to filter rooms by category
  const filterRoomsByCategory = (category) => {
    if (category === "All Category") return roomsData;
    return roomsData.filter((room) => room.category.toLowerCase() === category.toLowerCase());
  };

  // Get rooms for the active category
  const filteredRooms = filterRoomsByCategory(categories[parseInt(activeKey) - 1]);

  // Calculate paginated data
  const paginatedRooms = filteredRooms.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      {/* Search input section */}
      <div className="flex items-center bg-[#FFFFFF99] rounded-xl shadow-lg px-6 space-x-4 max-w-4xl mx-auto my-6">
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
              value={checkInDate ? dayjs(checkInDate).format("YYYY-MM-DD") : ""}
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
              value={checkOutDate ? dayjs(checkOutDate).format("YYYY-MM-DD") : ""}
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

      <div className="container mx-auto py-16 px-4">
        <h1 className="xl:text-[56px] lg:text-[56px] font-black leading-none text-2xl text-white font-Merriweather text-center pb-12">
          Explore Amazing Rooms
        </h1>

        {/* Tabs for categories */}
        <Tabs activeKey={activeKey} onChange={handleTabChange} tabBarStyle={{ borderBottom: "none" }}>
          {categories.map((category, index) => (
            <Tabs.TabPane
              tab={
                <button
                  className={`category-button ${
                    activeKey === String(index + 1) ? "active-tab" : ""
                  }`}
                >
                  {category}
                </button>
              }
              key={index + 1}
            >
              {/* Room cards for each category */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-8">
                {paginatedRooms.map((room) => (
                  <RoomsCard key={room.id} data={room} />
                ))}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>

        {/* Pagination controls */}
        <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
          <div className="flex justify-between items-center gap-4 w-full">
            <div className="text-center text-white mt-2">
              Page {currentPage} of {Math.ceil(roomsData.length / pageSize)}
            </div>
            <Pagination
              current={currentPage}
              total={filteredRooms.length}
              pageSize={pageSize}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
              className="text-center"
            />
          </div>
          <div className="flex justify-end items-center gap-4 w-full">
            <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
              Previous
            </Button>
            <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(roomsData.length / pageSize)))}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

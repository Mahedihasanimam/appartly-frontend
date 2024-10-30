"use client";
import React, { useState } from "react";
import { Input, DatePicker, Button, Tabs, Pagination } from "antd";
import dayjs from "dayjs";
import { SearchOutlined } from "@ant-design/icons";
import RoomsCard from "@/components/ui/RoomsCard";
import roomimage from "/public/images/roomimage.png";

const Page = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState("");
  const [activeKey, setActiveKey] = useState("1");
  const [isCheckInVisible, setIsCheckInVisible] = useState(false);
  const [isCheckOutVisible, setIsCheckOutVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // Adjust page size as needed

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

  // Sample data for categories
  const categories = ["All Category", "Apartment", "Studio", "Villa", "House", "Cottage"];

  // Sample data for rooms
  // Sample data for rooms
  const roomsData = [
    {
      id: "1",
      location: "Clichy, France",
      host: "Stay with Sourav",
      price: "$560.00",
      rating: 4.74,
      roomId: "569845",
      date: "Feb 10 - Feb 15",
      category: "Apartment",
      image: roomimage,
    },
    {
      id: "2",
      location: "Paris, France",
      host: "Stay with Marie",
      price: "$620.00",
      rating: 4.82,
      roomId: "678912",
      date: "Mar 5 - Mar 10",
      category: "Studio",
      image: roomimage,
    },
    {
      id: "3",
      location: "Nice, France",
      host: "Stay with Pierre",
      price: "$480.00",
      rating: 4.68,
      roomId: "345678",
      date: "Apr 1 - Apr 6",
      category: "Villa",
      image: roomimage,
    },
    {
      id: "4",
      location: "Lyon, France",
      host: "Stay with Lucas",
      price: "$530.00",
      rating: 4.71,
      roomId: "789012",
      date: "May 15 - May 20",
      category: "House",
      image: roomimage,
    },
    {
      id: "5",
      location: "Marseille, France",
      host: "Stay with Chloe",
      price: "$600.00",
      rating: 4.8,
      roomId: "234567",
      date: "Jun 10 - Jun 15",
      category: "Apartment",
      image: roomimage,
    },
    {
      id: "6",
      location: "Bordeaux, France",
      host: "Stay with Anne",
      price: "$550.00",
      rating: 4.76,
      roomId: "890123",
      date: "Jul 20 - Jul 25",
      category: "Cottage",
      image: roomimage,
    },
    {
      id: "7",
      location: "Strasbourg, France",
      host: "Stay with Mathieu",
      price: "$450.00",
      rating: 4.65,
      roomId: "567891",
      date: "Aug 5 - Aug 10",
      category: "Apartment",
      image: roomimage,
    },
    {
      id: "8",
      location: "Toulouse, France",
      host: "Stay with Pauline",
      price: "$500.00",
      rating: 4.7,
      roomId: "123456",
      date: "Sep 12 - Sep 17",
      category: "House",
      image: roomimage,
    },
    {
      id: "9",
      location: "Lille, France",
      host: "Stay with Jean",
      price: "$475.00",
      rating: 4.69,
      roomId: "890567",
      date: "Oct 22 - Oct 27",
      category: "Cottage",
      image: roomimage,
    },
    {
      id: "10",
      location: "Nantes, France",
      host: "Stay with Camille",
      price: "$510.00",
      rating: 4.75,
      roomId: "456789",
      date: "Nov 1 - Nov 6",
      category: "Apartment",
      image: roomimage,
    },
    {
      id: "11",
      location: "Montpellier, France",
      host: "Stay with Clara",
      price: "$520.00",
      rating: 4.73,
      roomId: "234567",
      date: "Dec 5 - Dec 10",
      category: "Studio",
      image: roomimage,
    },
    {
      id: "12",
      location: "Rennes, France",
      host: "Stay with Jacques",
      price: "$530.00",
      rating: 4.78,
      roomId: "098765",
      date: "Jan 15 - Jan 20",
      category: "House",
      image: roomimage,
    },
    {
      id: "13",
      location: "Toulon, France",
      host: "Stay with Laurence",
      price: "$570.00",
      rating: 4.8,
      roomId: "890123",
      date: "Feb 25 - Mar 2",
      category: "Villa",
      image: roomimage,
    },
    {
      id: "14",
      location: "Dijon, France",
      host: "Stay with Olivier",
      price: "$480.00",
      rating: 4.66,
      roomId: "123789",
      date: "Mar 20 - Mar 25",
      category: "Cottage",
      image: roomimage,
    },
    {
      id: "15",
      location: "Grenoble, France",
      host: "Stay with Lucie",
      price: "$590.00",
      rating: 4.77,
      roomId: "456123",
      date: "Apr 10 - Apr 15",
      category: "Apartment",
      image: roomimage,
    },
    {
      id: "16",
      location: "Le Havre, France",
      host: "Stay with Simon",
      price: "$495.00",
      rating: 4.69,
      roomId: "789456",
      date: "May 5 - May 10",
      category: "House",
      image: roomimage,
    },
    {
      id: "17",
      location: "Reims, France",
      host: "Stay with Margaux",
      price: "$530.00",
      rating: 4.74,
      roomId: "567234",
      date: "Jun 15 - Jun 20",
      category: "Studio",
      image: roomimage,
    },
    {
      id: "18",
      location: "Perpignan, France",
      host: "Stay with Francois",
      price: "$520.00",
      rating: 4.71,
      roomId: "876543",
      date: "Jul 8 - Jul 13",
      category: "Villa",
      image: roomimage,
    },
    {
      id: "19",
      location: "Tours, France",
      host: "Stay with Gerard",
      price: "$545.00",
      rating: 4.76,
      roomId: "654321",
      date: "Aug 12 - Aug 17",
      category: "Cottage",
      image: roomimage,
    },
    {
      id: "20",
      location: "Caen, France",
      host: "Stay with Sophie",
      price: "$600.00",
      rating: 4.79,
      roomId: "567123",
      date: "Sep 22 - Sep 27",
      category: "House",
      image: roomimage,
    },
  ];

  // Function to filter rooms by category
  const filterRoomsByCategory = (category) => {
    if (category === "All Category") return roomsData;
    return roomsData.filter((room) => room.category === category);
  };

  // Function to handle tab change
  const handleTabChange = (key) => {
    setActiveKey(key);
    setCurrentPage(1); // Reset to page 1 when category changes
  };

  // Get rooms for the active category
  const filteredRooms = filterRoomsByCategory(
    categories[parseInt(activeKey) - 1]
  );

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
              value={
                checkInDate ? dayjs(checkInDate).format("YYYY-MM-DD") : ""
              }
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
              value={
                checkOutDate ? dayjs(checkOutDate).format("YYYY-MM-DD") : ""
              }
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

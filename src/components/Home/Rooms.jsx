'use client';
import { Button, Tabs } from 'antd';
import React, { useState } from 'react';
import RoomsCard from '../ui/RoomsCard';
import roomimage from '/public/images/roomimage.png';

const Rooms = () => {
  // Sample data for categories
  const categories = ["All Category", "Apartment", "Studio", "Villa", "House", "Cottage"];

  // State to manage the active tab key
  const [activeKey, setActiveKey] = useState("1");

  // Function to handle tab change
  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  // Sample data for rooms
  const roomsData = [
    {
      "id": "1",
      "location": "Clichy, France",
      "host": "Stay with Sourav",
      "price": "$560.00",
      "rating": 4.74,
      "roomId": "569845",
      "date": "Feb 10 - Feb 15",
      "category": "Apartment",
      "image": roomimage
    },
    {
      "id": "2",
      "location": "Paris, France",
      "host": "Stay with Marie",
      "price": "$620.00",
      "rating": 4.82,
      "roomId": "678912",
      "date": "Mar 5 - Mar 10",
      "category": "Studio",
      "image": roomimage
    },
    {
      "id": "3",
      "location": "Nice, France",
      "host": "Stay with Pierre",
      "price": "$480.00",
      "rating": 4.68,
      "roomId": "345678",
      "date": "Apr 1 - Apr 6",
      "category": "Villa",
      "image": roomimage
    },
    {
      "id": "4",
      "location": "Lyon, France",
      "host": "Stay with Lucas",
      "price": "$530.00",
      "rating": 4.71,
      "roomId": "789012",
      "date": "May 15 - May 20",
      "category": "House",
      "image": roomimage
    },
    {
      "id": "5",
      "location": "Marseille, France",
      "host": "Stay with Chloe",
      "price": "$600.00",
      "rating": 4.80,
      "roomId": "234567",
      "date": "Jun 10 - Jun 15",
      "category": "Apartment",
      "image": roomimage
    },
    {
      "id": "6",
      "location": "Bordeaux, France",
      "host": "Stay with Anne",
      "price": "$550.00",
      "rating": 4.76,
      "roomId": "890123",
      "date": "Jul 20 - Jul 25",
      "category": "Cottage",
      "image": roomimage
    },
    {
      "id": "7",
      "location": "Marseille, France",
      "host": "Stay with Chloe",
      "price": "$600.00",
      "rating": 4.80,
      "roomId": "234567",
      "date": "Jun 10 - Jun 15",
      "category": "Apartment",
      "image": roomimage
    },
    {
      "id": "8",
      "location": "Bordeaux, France",
      "host": "Stay with Anne",
      "price": "$550.00",
      "rating": 4.76,
      "roomId": "890123",
      "date": "Jul 20 - Jul 25",
      "category": "Cottage",
      "image": roomimage
    }
  ];

  // Function to filter rooms by category
  const filterRoomsByCategory = (category) => {
    if (category === "All Category") {
      return roomsData; // Return all rooms for "All Category"
    }
    return roomsData.filter((room) => room.category === category);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="xl:text-[56px] lg:text-[56px] font-black leading-none text-2xl text-white font-Merriweather text-center pb-12">
      Explore Amazing Rooms
      </h1>

      {/* Tabs for categories */}
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey}
        onChange={handleTabChange}
        tabBarStyle={{
          borderBottom: "none",
        }}
      >
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
            className="pt-8"
            key={index + 1}
          >
            {/* Room cards for each category */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-8">
              {filterRoomsByCategory(category).map((item) => (
                <RoomsCard key={item.id} data={item} />
              ))}
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
<br />
      <Button style={{backgroundColor: "secoundary",height:"48px"}}  className="mt-12 block mx-auto px-8  font-bold text-black bg-secoundary hover:bg-secoundary">Browse more</Button>
    </div>
  );
};

export default Rooms;

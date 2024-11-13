'use client';
import { Button, Tabs } from 'antd';
import RoomsCard from '../ui/RoomsCard';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import { useGetRoomsQuery } from '@/redux/features/Propertyapi/page';

const Rooms = ({title}) => {
  const router = useRouter();
  const { data, isError, isLoading,refetch } = useGetRoomsQuery({}, {
    refetchOnFocus: true
  });
  const [activeKey, setActiveKey] = useState("1");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading rooms data</div>;
  }

  // Log the data structure to verify its contents
  console.log("property data: ",data?.properties);

  // Extract properties from the data for easier handling
  const roomsData = data?.properties || [];
  console.log(roomsData);

  // Create a unique list of categories with "All Category" at the beginning
  const uniqueCategories = Array.from(new Set(roomsData.map((room) => room.category)));
  const categories = ['All Category', ...uniqueCategories];

  // Function to handle tab change
  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  // Function to filter rooms by category
  const filterRoomsByCategory = (category) => {
    if (category === "All Category") {
      return roomsData; // Return all rooms for "All Category"
    }
    return roomsData.filter((room) => room.category.toLowerCase() === category.toLowerCase());
  };

  
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="xl:text-[56px] lg:text-[56px] font-black leading-none text-2xl text-white font-Merriweather text-center pb-12 max-w-2xl mx-auto">
       {title}
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
                className={`category-button ${activeKey === String(index + 1) ? "active-tab" : ""}`}
              >
                {category}
              </button>
            }
            className="pt-8"
            key={index + 1}
          >
            {/* Room cards for each category */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-8">
              {filterRoomsByCategory(category).slice(-8).map((item, itemIndex) => (
                <RoomsCard key={item._id} data={item} />
              )).slice(-8, category === 'All Category' ? undefined : 7)}
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>

      <Button
        onClick={() => router.push('/browsemore')}
        style={{ backgroundColor: "#EBCA7E", color: 'black', height: "48px", width: '200px' }}
        className="mt-12 block mx-auto px-8 font-bold text-black bg-secoundary hover:bg-secoundary"
      >
        Browse More
      </Button>
    </div>
  );
};

export default Rooms;




"use client";
import { Button, Rate, Table, Pagination, DatePicker } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import imageone from "/public/images/user.png";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

const Page = () => {
  const router = useRouter();
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Set your desired page size here
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [showDatePicker, setShowDatePicker] = useState(false); 
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const data = [
    {
      key: "1",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "---",
      review: <a className="text-[#EBCA7E]">Give review</a>,
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
      review: <a className="text-[#EBCA7E]">Give review</a>,
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
      review: <a className="text-[#EBCA7E]">Give review</a>,
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
    {
      key: "11",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "---",
      review: <a className="text-[#EBCA7E]">Give review</a>,
    },
    {
      key: "12",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "13",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "---",
      review: <a className="text-[#EBCA7E]">Give review</a>,
    },
    {
      key: "14",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "15",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "16",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "17",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "18",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "---",
      review: <a className="text-[#EBCA7E]">Give review</a>,
    },
    {
      key: "19",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "20",
      roomId: "125658",
      checkIn: "24 Aug, 2024",
      checkOut: "29 Aug, 2024",
      review: <Rate style={{ color: "#EBCA7E" }} disabled defaultValue={4} />,
    },
    {
      key: "21",
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
  // Calculate paginated data
  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="container mx-auto my-12">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-xl flex text-white space-x-2 items-center font-semibold mb-6">
            <button onClick={() => router.back()} className="focus:outline-none">
              <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
            </button>
            My profile
          </h2>
        </div>
        <div>
          <DatePicker 
            onChange={handleDateChange} 
            format="DD MMM YYYY"
            value={selectedDate}
            style={{
              border: '1px solid #EBCA7E', // Remove default border
              backgroundColor: 'transparent', // Match Ant Design primary color
              color: 'white', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              fontSize: '16px', // Font size
            }} 
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={false} // Disable default pagination
          className="custom-table2 text-red-500"
          scroll={{ x: "max-content" }}
        />
      </div>
      {/* Pagination Component */}
      <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="text-center text-white mt-2">
            Page {currentPage} of {Math.ceil(data.length / pageSize)}
          </div>
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
            className="text-center"
          />
        </div>
        <div className="flex justify-end items-center gap-4 w-full">
          <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
            Previous
          </Button>
          <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(data.length / pageSize)))}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;

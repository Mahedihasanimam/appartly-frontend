"use client";
import UserCard from "@/components/ui/UserCard";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Pagination } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import imageone from "/public/images/about.png";
import imagetow from "/public/images/user.png";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Dummy data
  const users = [
    {
      id: 1,
      name: "Md. Riyazul Hasan",
      email: "riyazu012@gmail.com",
      contact: "+880-2154522525",
      location: "Melbourne, Australia",
      image: imageone,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      contact: "+1-555-123456",
      location: "New York, USA",
      image: imagetow,
    },
    {
      id: 3,
      name: "John Smith",
      email: "john.smith@example.com",
      contact: "+44-207-1234567",
      location: "London, UK",
      image: imageone,
    },
    {
      id: 4,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      contact: "+34-911-223344",
      location: "Madrid, Spain",
      image: imagetow,
    },
    {
      id: 5,
      name: "Liu Wei",
      email: "liu.wei@example.com",
      contact: "+86-10-12345678",
      location: "Beijing, China",
      image: imageone,
    },
    {
      id: 6,
      name: "Amina Khan",
      email: "amina.khan@example.com",
      contact: "+91-9876543210",
      location: "Delhi, India",
      image: imagetow,
    },
    {
      id: 7,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      contact: "+1-650-9876543",
      location: "San Francisco, USA",
      image: imageone,
    },
    {
      id: 8,
      name: "Fatima Ali",
      email: "fatima.ali@example.com",
      contact: "+971-4-1234567",
      location: "Dubai, UAE",
      image: imageone,
    },
    {
      id: 9,
      name: "Hans Muller",
      email: "hans.muller@example.com",
      contact: "+49-30-1234567",
      location: "Berlin, Germany",
      image: imagetow,
    },
    {
      id: 10,
      name: "Isabelle Dupont",
      email: "isabelle.dupont@example.com",
      contact: "+33-1-23456789",
      location: "Paris, France",
      image: imageone,
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const router = useRouter();
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-12">
        <h2 className="text-[28px] flex space-x-2 items-center font-bold mb-6 text-white">
          <button onClick={() => router.back()} className="focus:outline-none">
            <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
          </button>
          My Profile
        </h2>
        <Button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#EBCA7E",
          }}
          className="text-sm font-semibold underline"
        >
          All Reservations
        </Button>
      </div>

      <Input
        prefix={<SearchOutlined />}
        style={{
            backgroundColor: "transparent",
            border: "1px solid #FFFFFF",
            color: "#EBCA7E",
            height: "40px",
        }}
        placeholder="Search by user name"
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        <Button style={{backgroundColor: "#EBCA7E", fontWeight: "bold",color:"black"}}>Checking in (7)</Button>

      <div>
        {paginatedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

         {/* Pagination Component */}
         <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="text-center text-white mt-2">
            Page {currentPage} of {Math.ceil(filteredUsers.length / pageSize)}
          </div>
          <Pagination
            current={currentPage}
            total={filteredUsers.length}
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
          <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredUsers.length / pageSize)))}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;

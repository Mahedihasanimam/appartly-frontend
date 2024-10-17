'use client'
import { Button, Card, Rate } from "antd";
import React from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import propartyimage from "/public/images/proparty.png";
import ownerImage from "/public/images/user.png";
import PropartyCard from "../ui/PropartyCard";
import { useRouter } from "next/navigation";

const Proparty = () => {
  // Sample property data
  const router=useRouter()
  const proparty = [
    {
      id: "1",
      name: "Robert Bruce",
      rating: 4.74,
      review:
        "‘’Feeling grateful for the extra income from my rental. It’s funding my next adventure! ✈️’’",
      satisfiedGuest: 45,
      revenue: "$985.5k",
      image: ownerImage,
      propertyImage: propartyimage,
    },
    {
      id: "2",
      name: "Emma Stone",
      rating: 4.85,
      review:
        "‘’Feeling grateful for the extra income from my rental. It’s funding my next adventure! ✈️’’",
      satisfiedGuest: 58,
      revenue: "$1.2M",
      image: ownerImage,
      propertyImage: propartyimage,
    },
    {
      id: "3",
      name: "Michael Johnson",
      rating: 4.68,
      review:
        "‘’Feeling grateful for the extra income from my rental. It’s funding my next adventure! ✈️’’",
      satisfiedGuest: 37,
      revenue: "$890.7k",
      image: ownerImage,
      propertyImage: propartyimage,
    },
    {
      id: "4",
      name: "Sophia Brown",
      rating: 4.9,
      review:
        "Thanks to my rental, I’ve been able to renovate my home and make it even better!",
      satisfiedGuest: 62,
      revenue: "$1.35M",
      image: ownerImage,
      propertyImage: propartyimage,
    },
    {
      id: "5",
      name: "David Lee",
      rating: 4.72,
      review:
        "Hosting is not just about money; it's about creating memorable experiences.",
      satisfiedGuest: 40,
      revenue: "$930.2k",
      image: ownerImage,
      propertyImage: propartyimage,
    },
    {
      id: "6",
      name: "Emily Clark",
      rating: 4.88,
      review:
        "Hosting has brought new life to my property and given me financial freedom.",
      satisfiedGuest: 68,
      revenue: "$1.5M",
      image: ownerImage,
      propertyImage: propartyimage,
    },
    {
      id: "7",
      name: "Emily Clark",
      rating: 4.88,
      review:
        "Hosting has brought new life to my property and given me financial freedom.",
      satisfiedGuest: 68,
      revenue: "$1.5M",
      image: ownerImage,
      propertyImage: propartyimage,
    },
    {
      id: "8",
      name: "Emily Clark",
      rating: 4.88,
      review:
        "Hosting has brought new life to my property and given me financial freedom.",
      satisfiedGuest: 68,
      revenue: "$1.5M",
      image: ownerImage,
      propertyImage: propartyimage,
    },
  ];
  return (
    <div className="container mx-auto py-12 ">
      <div>
        <h1 className="xl:text-[36px] lg:text-[36px] font-black  text-2xl text-white font-Merriweather text-center pb-12 leading-10">
          Transform your property into a lucrative <br /> experience for
          travelers
        </h1>
        <p></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {proparty.map((item) => (
          <PropartyCard item={item} key={item.id} />
        ))}
      </div>

      <Button onClick={()=>router.push('/addpropartytrailer')} style={{backgroundColor: "#EBCA7E",color:'black',height:"48px",width:'200px'}}  className="mt-12 block mx-auto px-8  font-bold text-black bg-secoundary hover:bg-secoundary">Add a property</Button>
    </div>
  );
};

export default Proparty;

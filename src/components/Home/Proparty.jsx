'use client';
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import ownerImage from "/public/images/user.png";
import propartyimage from "/public/images/proparty.png";
import PropartyCard from "../ui/PropartyCard";
import Image from "next/image";
import whatsapplogo from '/public/images/wlogo.gif'

const Proparty = ({title}) => {
  const router = useRouter();
  
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

  const whatsappNumber = '+8801860650703';
  const message = 'Hello, I would like to chat!';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="container mx-auto py-12">
      <div>
        <h1 className="xl:text-[36px] lg:text-[36px] font-black text-2xl text-white font-Merriweather text-center pb-12 leading-10 max-w-2xl mx-auto">
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {proparty.map((item) => (
            <PropartyCard item={item} key={item.id} />
          ))}
        </div>
        <Button
          onClick={() => router.push('/proparty/addpropartytrailer')}
          style={{ backgroundColor: "#EBCA7E", color: 'black', height: "48px", width: '200px' }}
          className="mt-12 block mx-auto px-8 font-bold text-black bg-secoundary hover:bg-secoundary"
        >
          Add a property
        </Button>
      </div>
    
        <div
          onClick={() => {
            window.open(whatsappLink, '_blank');
          }}
          className="fixed bottom-[5%] right-[5%] rounded-full cursor-pointer h-[70px] w-[70px] shadow-lg shadow-black z-[9999]"
        >
         <Image src={whatsapplogo} alt="Whatsapp logo" width={70} height={70} />
        </div>
   
    </div>
  );
};

export default Proparty;

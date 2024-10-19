import { Card, Rate } from "antd";
import { React, useState } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
const RoomsCard = ({ data }) => {

  return (
    <div>
      <Link href={`/${data.id}`}>

      <Card
        hoverable
        className="rounded-lg bg-gray-800  overflow-hidden shadow-lg border-none"
        cover={
          <Image
            alt={data.location}
            src={data.image}
            className="h-48 w-full object-cover "
          />
        }
        bodyStyle={{ padding: "16px", backgroundColor: "#3B3B3B", color: "white" }}
      >
        <div className="flex justify-between items-center mb-2 border-none">
        <div>
        <h2 className="text-lg font-medium">{data.location}</h2>
          <p className="text-[16px] font-medium">{data.host}</p>
         <p className="text-lg font-medium mb-2">{data.price} Per Night</p>
        </div>
          <div>
            <div className="flex items-center space-x-1">
              <Rate
                disabled
                count={1}
                value={data.rating}
                className="text-[#FDB022] text-lg"
              />
              <span className="text-white text-xl font-medium">{data.rating}</span>
            </div>
            <div>
              <p className="text-[16px] font-medium">Room id: {data.roomId}</p>
              <p className="text-lg font-medium">{data.date}</p>
            </div>
          </div>
        </div>
      

     
      </Card>
      </Link>
    </div>
  );
};

export default RoomsCard;

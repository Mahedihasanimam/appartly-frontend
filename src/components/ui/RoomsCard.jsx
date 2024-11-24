import { Card, Rate } from "antd";
import { React, useState } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/redux/api/ApiSlice";
const RoomsCard = ({ data }) => {

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div >
      <Link href={`/propertyDetails/${data._id}`}>

      <Card
        hoverable
        className="rounded-lg bg-gray-800  overflow-hidden shadow-lg border-none"
        cover={
          <Image
            width={300}
            height={200}
            alt={data.location}
            src={ imageUrl+ data.images?.[0]}
            className=" w-full object-cover max-h-[200px] min-h-[200px] "
          />
        }
        bodyStyle={{ padding: "16px", backgroundColor: "#3B3B3B", color: "white" }}
      >
        <div className="flex justify-between items-center mb-2 border-none">
        <div>
        <h2 className="text-lg font-medium">{data?.location?.slice(0,15)}</h2>
          <p className="text-[16px] font-medium">{data?.owner?.firstName || 'no name'}</p>
         <p className="text-lg font-medium mb-2"> $ {data.pricePerNight} Per Night</p>
        </div>
          <div>
            <div className="flex items-center space-x-1">
              <Rate
                disabled
                count={1}
                value={data?.totalRatings }
                className="text-[#FDB022] text-lg"
              />
              <span className="text-white text-xl font-medium">{data?.totalRatings }</span>
            </div>
            <div>
              <p className="text-[16px] font-medium">Room id: {data?._id?.slice(0,6)}</p>
            <div className="flex items-center space-x-2">
            <p className="text-lg font-medium"> {formatDate(data?.startDate)}</p> -
            <p className="text-lg font-medium"> {formatDate(data?.endDate)}</p>
            </div>
            </div>
          </div>
        </div>
      

     
      </Card>
      </Link>
    </div>
  );
};

export default RoomsCard;

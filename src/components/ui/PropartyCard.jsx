import { Card, Rate } from "antd";
import React from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import guest from "/public/icons/guest.svg";
import revinue from "/public/icons/revinue.svg";
import userimg from "/public/images/user.png";
const PropartyCard = ({ item }) => {
  return (
    <Card
      key={item.id}
      hoverable
      className="rounded-lg overflow-hidden shadow-lg"
      cover={
        <Image
          alt={item.name}
          src={item.propertyImage}
          className="h-48 w-full object-cover"
        />
      }
      //   bodyStyle={{ padding: "16px", backgroundColor: "#3B3B3B", color: "white" }}
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="flex items-center justify-between space-x-1 mb-2">
            <div className="flex items-center space-x-2 py-4">
              <Image
                alt={item.ownerName}
                src={item.image}
                className="h-8 w-8 object-cover rounded-full"
              />
              <h2 className="text-lg font-medium">{item.name}</h2>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <Rate
                  disabled
                  count={1}
                  value={item.rating}
                  className="text-[#FDB022] text-lg"
                />
                <span className="text-xl font-medium">{item.rating}</span>
              </div>
            </div>
          </div>
          <p className="text-[16px] font-medium text-[#000000] pl-6">
            {item.review}
          </p>
          <div className="text-lg mt-4 font-medium flex items-center justify-between">
            <div className='flex items-center space-x-4 '>
            <Image
                alt="revinue"
                src={guest}
                className="h-4 w-4 object-contain"
              />{" "}
              <span className="text-[16px] text-[#000000CC]"> Satisfied Guests:</span>
            </div>
            {item.satisfiedGuest}
          </div>
          <div className="text-lg font-medium mb-2 flex items-center justify-between">
            <div className="flex items-center space-x-4 mb-2">
              {" "}
              <Image
                alt="revinue"
                src={guest}
                className="h-4 w-4 object-contain"
              />{" "}
              <span className="text-[16px] text-[#000000CC]">Revenue</span>
            </div>{" "}
            {item.revenue}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropartyCard;

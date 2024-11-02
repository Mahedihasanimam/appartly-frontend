import { Card, Rate } from "antd";
import React from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import guest from "/public/icons/guest.svg";
import revinue from "/public/icons/revinueicon.svg";
import userimg from "/public/images/user.png";
import Link from "next/link";
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
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 0.572266C3.56717 0.572266 2 2.13794 2 4.07031C2 6.00268 3.56717 7.56835 5.5 7.56835C7.43283 7.56835 9 6.00268 9 4.07031C9 2.13794 7.43283 0.572266 5.5 0.572266Z" fill="#1F0000"/>
<path d="M3.5 9.56641C1.56711 9.56641 0 11.1328 0 13.0659V15.5631H11V13.0659C11 11.1328 9.43289 9.56641 7.5 9.56641H3.5Z" fill="#1F0000"/>
<path d="M12.5 10.5723H12V15.5723H15V13.0723C15 11.6916 13.8807 10.5723 12.5 10.5723Z" fill="#1F0000"/>
<path d="M11.5 4.57227C10.1193 4.57227 9 5.69155 9 7.07227C9 8.45298 10.1193 9.57227 11.5 9.57227C12.8807 9.57227 14 8.45298 14 7.07227C14 5.69155 12.8807 4.57227 11.5 4.57227Z" fill="#1F0000"/>
</svg>

              <span className="text-[16px] text-[#000000CC]"> Satisfied Guests:</span>
            </div>
            {item.satisfiedGuest}
          </div>
          <div className="text-lg font-medium mb-2 flex items-center justify-between">
            <div className="flex items-center space-x-4 mb-2">
              {" "}
              <Image
                alt="revinue"
                src={revinue}
               
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

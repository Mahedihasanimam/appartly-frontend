import { Input } from "antd";
import React from "react";
import heroimg from "/public/images/aboutimg.png";

import titleimg from "/public/images/sign.png";
import imageone from "/public/images/Group 11.png";
import imagetow from "/public/images/Group 11 (1).png";
import Image from "next/image";
const page = () => {
  return (
    <div>
      {/* Hero section with image and search bar and category dropdown  */}
      <div
        style={{ backgroundImage: `url(${heroimg.src})` }}
        className="w-full min-h-[540px] bg-cover py-6"
      >
        <div className="lg:pt-28 md:pt-28 py-12 px-6">
          <div className=" s-mobile:py-6  items-center  max-w-5xl  mx-auto ">
            <h1 className="text-white  text-[48px] leading-tight font-bold text-center ">
              Know Our History...
            </h1>
            <p className="text-white text-[36px] font-medium leading-[45px] mt-4 ">
              At Appartali we believe that every journey begins with a place to
              call home, and we’re dedicated to making your stay unforgettable.
            </p>
          </div>
        </div>
      </div>
      {/* End of Hero section  */}



      <div className="container mx-auto p-4">
          {/* first card ------------ */}
        <div>
          {/* title -------------- */}
          <div className="mx-auto w-fit py-6">
            <h1 className="text-[#FFFFFF] text-[48px] font-medium">
              Booking room anytime
            </h1>
            <Image src={titleimg} className="mx-auto mt-4" alt="signimage" />
          </div>
          <div className="lg:flex md:flex flex-row items-center justify-around py-12">
            <div className="text-white max-w-xl ">
              <h1 className="text-[36px] font-semibold leading-[45px] border-b-2 border-[#FFFFFF] w-fit pb-4">
                Developing Confident and <br />
                Successful Learners
              </h1>
              <p className="text-[20px] text-[#848383] font-normal  leading-[30px] py-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut al
              </p>
            </div>
            <div className="">
              <Image src={imageone} className="w-full" alt="imageone" />
            </div>
          </div>
        </div>


        <div>
          {/* title -------------- */}
          <div className="mx-auto w-fit py-6">
            <h1 className="text-[#FFFFFF] text-[48px] font-medium">
            Invest your property
            </h1>
            <Image src={titleimg} className="mx-auto mt-4" alt="signimage" />
          </div>
          <div className="lg:flex md:flex flex-row items-center justify-around py-12">
            <div className="text-white max-w-xl ">
              <h1 className="text-[36px] font-semibold leading-[45px] border-b-2 border-[#FFFFFF] w-fit pb-4">
                Developing Confident and <br />
                Successful Learners
              </h1>
              <p className="text-[20px] text-[#848383] font-normal  leading-[30px] py-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut al
              </p>
            </div>
            <div className="">
              <Image src={imagetow} className="w-full" alt="imageone" />
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default page;

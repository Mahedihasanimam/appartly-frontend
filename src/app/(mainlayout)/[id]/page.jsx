"use client";

import React, { useState } from "react";
import { Carousel, DatePicker, InputNumber, Button, Rate } from "antd";
import Image from "next/image";
import slideimage from "/public/images/Rectangle 67.png";
import slideimage2 from "/public/images/Rectangle 68.png";
import profile from "/public/images/user.png";
import {
  CheckCircleFilled,
  ClearOutlined,
  FileOutlined,
  HeartOutlined,
  HomeFilled,
  LeftOutlined,
  MessageOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import favimg from "/public/icons/fevorite.png";
const { RangePicker } = DatePicker;

import {
  WifiOutlined,
  LockOutlined,
  CoffeeOutlined,
  HomeOutlined,
  StarFilled,
} from "@ant-design/icons";

import { MdLiveTv, MdLuggage } from "react-icons/md";
import { LuRefrigerator } from "react-icons/lu";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiSolidWasher } from "react-icons/bi";
import { PiHairDryerLight } from "react-icons/pi";
import { TbIroning1 } from "react-icons/tb";
import { PiSprayBottle } from "react-icons/pi";
import { IoIosKey } from "react-icons/io";
import { FaCircleNotch } from "react-icons/fa";
import userimg from "/public/images/user.png";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";


import { Card, Avatar, List, Divider, Progress, Tooltip } from "antd"; // Import from Ant Design
import profileimg from "/public/images/about.png";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  console.log(params);
  const reviews = [
    {
      id: 1,
      name: "Cheng Chuang",
      years: 6,
      stayType: "Apartotel",
      date: "August 2024",
      rating: 5,
      review:
        "This was an astonishing stay in a gorgeous place. The taste in decorations and internal design is something else. I cannot fault anything. Sai Nana is beautiful and so is the house. The room was clean and comfortable with all the necessary amenities. The staff was incredibly welcoming, making our stay truly unforgettable.",
      shortReview:
        "This was an astonishing stay in a gorgeous place. The taste in decorations...",
      imageUrl: profileimg,
    },
    {
      id: 2,
      name: "Ayesha Khan",
      years: 4,
      stayType: "Apartotel",
      date: "July 2024",
      rating: 4,
      review:
        "I had a great time staying here. The staff were friendly, and the location was perfect for sightseeing. The interiors were modern and clean, though a bit small for a family. Overall, I’d recommend it to anyone visiting the area.",
      shortReview:
        "I had a great time staying here. The staff were friendly, and the location...",
      imageUrl: profileimg,
    },
    {
      id: 3,
      name: "John Doe",
      years: 2,
      stayType: "Hotel",
      date: "June 2024",
      rating: 3,
      review:
        "The hotel was decent, but I had some issues with the air conditioning. The location was good, but the service could use some improvement.",
      shortReview:
        "The hotel was decent, but I had some issues with the air conditioning.",
      imageUrl: profileimg,
    },
    {
      id: 4,
      name: "Emma Watson",
      years: 5,
      stayType: "Apartotel",
      date: "August 2024",
      rating: 5,
      review:
        "Absolutely loved my stay here! The decor was stunning and the staff were incredibly helpful. I can't wait to return!",
      shortReview: "Absolutely loved my stay here! The decor was stunning...",
      imageUrl: profileimg,
    },
    {
      id: 5,
      name: "Michael Smith",
      years: 3,
      stayType: "Hotel",
      date: "September 2024",
      rating: 4,
      review:
        "Very comfortable stay. The bed was cozy, and the breakfast was delicious. I would recommend this hotel to anyone.",
      shortReview: "Very comfortable stay. The bed was cozy...",
      imageUrl: profileimg,
    },
    {
      id: 6,
      name: "Sophia Johnson",
      years: 1,
      stayType: "Resort",
      date: "October 2024",
      rating: 2,
      review:
        "The resort was beautiful, but the service was lacking. I expected more from such a high-end place.",
      shortReview: "The resort was beautiful, but the service was lacking.",
      imageUrl: profileimg,
    },
    {
      id: 7,
      name: "William Brown",
      years: 7,
      stayType: "Apartotel",
      date: "July 2024",
      rating: 5,
      review:
        "Best stay ever! Everything was perfect, from the cleanliness to the friendly staff. Highly recommend!",
      shortReview: "Best stay ever! Everything was perfect...",
      imageUrl: profileimg,
    },
    {
      id: 8,
      name: "Olivia Davis",
      years: 2,
      stayType: "Hotel",
      date: "September 2024",
      rating: 4,
      review:
        "I enjoyed my stay here, especially the pool area. The staff were nice, and the food was great.",
      shortReview: "I enjoyed my stay here, especially the pool area...",
      imageUrl: profileimg,
    },
   
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [dates, setDates] = useState(null);
  const [guests, setGuests] = useState(2);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(8); // Initially display 4 reviews
  const [expandedReviewIds, setExpandedReviewIds] = useState([]);
  const router=useRouter()
  const perNightRate = 560;
  const cleaningFee = 80;
  const serviceFee = 80;

  const images = [slideimage, slideimage2];

  const handleDateChange = (dateRange) => {
    setDates(dateRange);
    calculateTotal(dateRange, guests);
    console.log("Selected Dates:", dateRange);
  };

  const handleGuestsChange = (value) => {
    setGuests(value);
    calculateTotal(dates, value);
    console.log("Number of Guests:", value);
  };

  const calculateTotal = (dateRange, guests) => {
    if (dateRange) {
      const [checkIn, checkOut] = dateRange;
      const nights = checkOut.diff(checkIn, "day");
      const roomTotal = perNightRate * nights;
      const calculatedTotal = roomTotal + cleaningFee + serviceFee;

      setTotal(calculatedTotal);
      console.log("Total Calculation:", {
        nights,
        roomTotal,
        cleaningFee,
        serviceFee,
        total: calculatedTotal,
      });
    } else {
      setTotal(0);
      console.log("Total Calculation: $0.00 (no dates selected)");
    }
  };

  const handlePreviewClick = (index) => {
    setActiveSlide(index);
  };

  const handleReserveClick = () => {
    console.log("Reservation Details:");
    console.log("Selected Dates:", dates);
    console.log("Number of Guests:", guests);
    console.log("Total Amount:", total);
    router.push('/payment')
  };

  const handleRateChange = (newValue) => {
    if (isRated && newValue === value) {
      setValue(0);
      setIsRated(false);
    } else {
      setValue(newValue);
      setIsRated(true);
    }
  };

  // Toggle show more for a specific review
  const toggleShowMore = (id) => {
    if (expandedReviewIds.includes(id)) {
      setExpandedReviewIds(
        expandedReviewIds.filter((reviewId) => reviewId !== id)
      );
    } else {
      setExpandedReviewIds([...expandedReviewIds, id]);
    }
  };

  // Show all reviews
  const handleShowAll = () => {
    router.push('/showAllReview')

  };
  return (
    <div className="bg-[]">
      <div className="container mx-auto mt-8 text-white flex items-center justify-between p-4  ">
        <Link className="text-lg font-medium" href="/">
          {" "}
          <LeftOutlined /> Stylish ensuite double bedroom in trendy Dalston
        </Link>
        <div className="text-[16px] font-medium">
          <Rate
            value={value}
            count={1}
            onChange={handleRateChange}
            character={
              <HeartOutlined style={{ color: isRated ? "red" : "white" }} />
            }
            style={{ color: isRated ? "red" : "white" }} // Change the color based on state
            className="custom-rate"
          />
          <span className="pl-2 ">Save</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-white lg:p-2 md:p-2 p-8  container mx-auto">
        {/* Image Carousel */}
        <div className="lg:w-2/3">
          <Carousel
            afterChange={(current) => setActiveSlide(current)}
            ref={(carousel) => {
              if (carousel) {
                carousel.goTo(activeSlide);
              }
            }}
          >
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`Room Slide ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </Carousel>
          {/* Preview Section */}
          <div className="mt-4 flex space-x-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  activeSlide === index ? "border-2 border-yellow-500" : ""
                }`}
                onClick={() => handlePreviewClick(index)}
              >
                <Image
                  src={image}
                  alt={`Preview ${index + 1}`}
                  width={150}
                  height={100}
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-[24px] font-bold text-[#FFFFFF]">
            Room in Clichy, France
          </p>
          <p className="text-sm">Room id: 569845</p>
        </div>

        {/* Booking Form */}
        <div className="lg:w-1/3 lg:ml-8 mt-8 lg:mt-0 bg-[#1B1B1B] h-fit pb-20 rounded-lg space-y-8 p-6">
          <h2 className="text-2xl  font-semibold">
            ${perNightRate.toFixed(2)}{" "}
            <span className="text-base font-light">Per night</span>
          </h2>

          <div className="mt-4">
            <RangePicker
              style={{
                height: "44px",
                backgroundColor: "#4B4B4B",
                border: "none",
                color: "white",
              }}
              className="w-full text-[16px] font-medium"
              placeholder={["Check-in", "Check-out"]}
              onChange={handleDateChange}
            />
          </div>

          <div className="mt-4">
            <InputNumber
              min={1}
              max={10}
              defaultValue={2}
              className="w-full text-[16px] font-medium custom-input" // Add custom class
              placeholder="Guests"
              onChange={handleGuestsChange}
            />
          </div>

          <Button
            style={{
              height: "44px",
              backgroundColor: "#EBCA7E",
              border: "none",
              color: "#0F0F0F",
            }}
            type="primary"
            className="mt-4 w-full text-[16px] font-bold bg-yellow-500  text-black"
            onClick={handleReserveClick} // Attach the click handler here
          >
            Reserve
          </Button>
          <p className="mt-4 text-sm text-[#FFFFFFB2] font-medium text-center py-8">
            You won’t be charged yetz
          </p>
          {/* Pricing Breakdown */}
          <div className="mt-8 text-[16px] font-medium text-[#FFFFFFCC] ">
            {dates ? (
              <div className="text-[#FFFFFF] font-medium space-y-3">
                <p className="flex justify-between ">
                  <span>
                    ${perNightRate} * {dates[1].diff(dates[0], "day")} nights
                  </span>
                  <span>${perNightRate * dates[1].diff(dates[0], "day")}</span>
                </p>
                <p className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>${cleaningFee}</span>
                </p>
                <p className="flex justify-between">
                  <span>Appartali service fee</span>
                  <span>${serviceFee}</span>
                </p>
                <hr className="my-2 " />
                <p className="flex pt-2 justify-between font-medium text-[#FFFFFF]">
                  <span>Total before taxes</span>
                  <span>${total.toFixed(2)}</span>
                </p>
              </div>
            ) : (
              <div className="text-[#FFFFFF] font-medium space-y-3">
                <p className="flex justify-between">
                  <span>$0.00 * 0 nights</span>
                  <span>$0.00</span>
                </p>
                <p className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>$0.00</span>
                </p>
                <p className="flex justify-between">
                  <span>Appartali service fee</span>
                  <span>$0.00</span>
                </p>
                <hr className="my-2 border-dashed border-1 border-gray-600" />
                <p className="flex pt-2 justify-between text-[#FFFFFF] font-medium">
                  <span>Total before taxes</span>
                  <span>$0.00</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-[#1B1B1B]  lg:flex flex-wrap space-y-6 text-center items-center justify-between p-4 my-8 rounded-lg">
        <div className="text-[#FFFFFF] font-bold text-[28px] flex items-center justify-arround p-4 w-fit gap-4 lg:mx-0  mx-auto">
          <Image
            src={favimg}
            alt="Favourite"
            width={30}
            height={30}
            className="mr-2"
          />
          <span className="text-white font-medium">
            Guest <br /> favorite
          </span>
          <Image
            src={favimg}
            alt="Favourite"
            width={30}
            height={30}
            className="mr-2"
          />
        </div>
        <div>
          <p className="text-[#FFFFFFCC] font-medium text-[16px]  ">
            One of the most loved homes <br /> on Appartali, according to guest
          </p>
        </div>

        <div className="text-[#FFFFFFCC]">
          <h1 className="text-[24px] font-bold pl-4">4.91</h1>
          <Rate style={{ color: "white" }} disabled defaultValue={4.9} />
        </div>
        <div className="text-[#FFFFFFCC] ">
          <h1 className="text-[24px] font-bold">110</h1>
          <p className="underline">Reviews </p>
        </div>
      </div>

      {/* about room section-------------------------- */}
      <div className="container mx-auto">
        <div className="lg:flex md:flex flex-row items-center justify-between p-4 my-8 border border-[#424242] rounded-lg">
          {/* Profile Section */}
          <Card className="w-full bg-transparent text-white" bordered={false}>
            <div className="flex items-center">
              <Avatar
                size="large"
                icon={
                  <Image
                    height={96}
                    width={96}
                    src={profileimg}
                    alt="Profile"
                  />
                }
              />
              <div className="ml-4">
                <h2 className="text-xl  font-bold">Stay with David</h2>
                <p className="text-sm text-[#FFFFFFCC]">
                  Superhost • 12 years hosting
                </p>
              </div>
            </div>
            <br />
            <h2 className="text-xl  font-bold py-4">About this place</h2>
            <p className="text-[#FFFFFFCC] text-[16px] font-normal leading-6 max-w-lg">
              I rent a small room in my house, it is new and cosy. House is
              quite light, modern and guest can cook. Bathroom will be shared.
              House is 6 minutes from lines 14 and 13, RER and tram. it takes 20
              minutes to go to City center. many restaurants, bars, supermarkets
              around my house.
            </p>
          </Card>

          {/* About Room Section */}
          <Card
            className="w-full bg-transparent text-white mt-4"
            bordered={false}
          >
            <h2 className="text-xl  font-bold py-4">About room</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <HomeOutlined className="text-xl" />{" "}
                <div>
                  <h3 className="text-lg  font-bold text-[#FFFFFF]">
                    Room in a town house
                  </h3>{" "}
                  <p className="text-sm text-[#FFFFFFCC] font-normal">
                    Your own room in a home, plus access to shared spaces.
                  </p>{" "}
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <HomeFilled className="text-xl" />{" "}
                <div>
                  <h3 className="text-lg  font-bold text-[#FFFFFF]">
                    Shared common spaces
                  </h3>{" "}
                  <p className="text-sm text-[#FFFFFFCC] font-normal">
                    You {'`'}ll share parts of the home with the Host.
                  </p>{" "}
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <ShopOutlined className="text-xl" />{" "}
                <div>
                  <h3 className="text-lg  font-bold text-[#FFFFFF]">
                    Shared bathroom
                  </h3>{" "}
                  <p className="text-sm text-[#FFFFFFCC] font-normal">
                    You`ll share the bathroom with others.
                  </p>{" "}
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircleFilled className="text-xl" />{" "}
                <div>
                  <h3 className="text-lg  font-bold text-[#FFFFFF]">
                    David is a superhost
                  </h3>{" "}
                  <p className="text-sm text-[#FFFFFFCC] font-normal">
                    Superhosts are experienced, highly rated Hosts.
                  </p>{" "}
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* what this places offers section-------------------- */}
      <div className=" container mx-auto  border-b-2 border-[#424242]  my-6 p-4">
        <h2 className="text-xl text-white  font-bold">
          What this places offers
        </h2>
        <div className="lg:flex md:flex flex-row items-center justify-between p-4 my-8 lg:max-w-4xl w-full">
          <div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4 text-[#FFFFFFCC]  font-normal">
                <LockOutlined className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal text-[16px]">
                  Lock on bedroom door
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <WifiOutlined className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal    text-[16px]">
                  Free Wi-Fi
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <MdLiveTv className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal    text-[16px]">
                  Tv
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <MdLuggage className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal    text-[16px]">
                  Luggage dropoff allowed
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <LuRefrigerator className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal    text-[16px]">
                  Refrigerator
                </p>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <CoffeeOutlined className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                  Kitchen
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <BsPersonWorkspace className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                  Dedicated workspace
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <BiSolidWasher className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                  Washer
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <PiHairDryerLight className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                  Hair dryer
                </p>
              </li>
              <li className="flex items-center space-x-4 text-[#FFFFFFCC] font-normal">
                <TbIroning1 className="text-xl text-white" />{" "}
                <p className="text-sm text-[#FFFFFFCC] font-normal  text-[16px]">
                  Iron machine
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* guest fevorite section -------------------- */}
      <div className=" border-b-2 border-[#424242]  my-6 container mx-auto p-4">
        <div className="space-y-2 py-8">
          <div className="text-[#FFFFFFCC] mx-auto w-fit">
            <h1 className="text-[24px] font-bold pl-4">4.91</h1>
            <Rate style={{ color: "white" }} disabled defaultValue={4.9} />
          </div>
          <h1 className="text-2xl text-white  font-bold  text-center">
            Guest favorite
          </h1>
          <p className="text-[16px] text-[#FFFFFFCC] font-normal max-w-md mx-auto text-center">
            One of the most loved homes on Airbnb based on ratings, reviews, and
            reliability
          </p>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2   space-x-4 my-12">
          <div className="border-r border-[#424242]  pr-8 mb-4 w-full max-w-xs text-center space-y-3">
            <h3 className="text-lg  font-medium text-[#FFFFFF]">
              Overall rating
            </h3>
            <Progress
              percent={100}
              width={100}
              format={(percent) => (
                <span style={{ color: "white" }}>{percent - 95}</span>
              )}
            />
            <Progress
              percent={99}
              width={100}
              format={(percent) => (
                <span style={{ color: "white" }}>{percent - 95}</span>
              )}
            />
            <Progress
              percent={98}
              width={100}
              format={(percent) => (
                <span style={{ color: "white" }}>{percent - 95}</span>
              )}
            />
            <Progress
              percent={97}
              width={100}
              format={(percent) => (
                <span style={{ color: "white" }}>{percent - 95}</span>
              )}
            />
            <Progress
              percent={96}
              width={100}
              format={(percent) => (
                <span style={{ color: "white" }}>{percent - 95}</span>
              )}
            />
          </div>

          <div className="border-r border-[#424242]  pr-8 mb-4 space-y-2 w-full max-w-xs text-center">
            <h3 className="text-lg  font-medium text-[#FFFFFF]">Cleanliness</h3>
            <h3 className="text-xl font-bold text-center text-[#FFFFFF]">
              4.0
            </h3>
            <PiSprayBottle className="text-6xl text-white text-center block mx-auto" />
          </div>
          <div className="border-r border-[#424242]  pr-8 mb-4 space-y-2 w-full max-w-xs text-center">
            <h3 className="text-lg  font-medium text-[#FFFFFF]">Check In</h3>
            <h3 className="text-xl font-bold text-center text-[#FFFFFF]">
              4.0
            </h3>
            <IoIosKey className="text-6xl text-white text-center block mx-auto" />
          </div>

          <div className="border-r border-[#424242]  pr-8 mb-4 space-y-2 w-full max-w-xs text-center">
            <h3 className="text-lg  font-medium text-[#FFFFFF]">
              Communication
            </h3>
            <h3 className="text-xl font-bold text-center text-[#FFFFFF]">
              4.0
            </h3>
            <MessageOutlined className="text-6xl text-white text-center block mx-auto" />
          </div>

          <div className=" space-y-2 w-full max-w-xs text-center">
            <h3 className="text-lg  font-medium text-[#FFFFFF]">Value</h3>
            <h3 className="text-xl font-bold text-center text-[#FFFFFF]">
              4.0
            </h3>
            <FaCircleNotch className="text-6xl text-white text-center block mx-auto" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" text-white py-8 px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.slice(0, visibleReviews).map((review) => (
              <Card
                key={review.id}
                className="bg-[#1c1c1c] text-white"
                style={{ border: "none" }}
              >
                <div className="flex items-center mb-2">
                  <Image
                    src={review.imageUrl}
                    alt="Avatar"
                    className="bg-gray-700 rounded-full w-10 h-10"
                  />

                  <div className="ml-2">
                    <p className="text-[16px] text-[#FFFFFF] font-bold">
                      {review.name}
                    </p>
                    <p className="text-[12px] text-[#FFFFFFCC] font-normal">
                      {review.years} years on {review.stayType}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Rate
                    disabled
                    defaultValue={review.rating}
                    className="mb-1"
                  />
                  <p className="text-[12px] font-medium text-[#FFFFFF] pb-4">
                    <span className="text-4xl font-bold">. </span>
                    {review.date}
                  </p>
                </div>
                <p className="text-sm mt-2">
                  {expandedReviewIds.includes(review.id)
                    ? review.review
                    : review.shortReview}
                </p>
                <Button
                  type="link"
                  className="text-yellow-500 p-0"
                  onClick={() => toggleShowMore(review.id)}
                >
                  {expandedReviewIds.includes(review.id)
                    ? "Show less"
                    : "Show more"}
                </Button>
              </Card>
            ))}
          </div>
     
            <div className="mt-4 text-center w-full flex items-center justify-end">
              <Button
               style={{backgroundColor: "#EBCA7E",width: "240px", height: "44px", color: "#000000"}}
               className=" border-none text-black font-bold"
                type="primary"
                onClick={handleShowAll}
    
              >
                Show all
              </Button>
            </div>
     
        </div>
      </div>

      <div className="container mx-auto border-t-2 border-[#424242]  my-12 p-4">
      <h3 className="text-[24px]  font-bold text-[#FFFFFF] py-6">Meet your host</h3>
        <div className=" text-white  flex  items-center">
          <Card
            className="w-full bg-transparent lg:p-8"
            bordered={false}
            bodyStyle={{ padding: 0 }}
          >
            <div className="lg:flex md:flex flex-row gap-8 ">
              {/* Left Section: Host Info */}
              <div className="bg-[#242424] h-fit rounded-lg p-6 w-full max-w-md ">
                <div className="flex items-center pb-4">
                  {/* Avatar and Name */}
                  <Avatar size={80} className="bg-gray-400">
                    <Image src={userimg} alt="Avatar" />
                  </Avatar>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-white">
                      Jenifer Lopez
                    </h2>
                    <Tooltip title="Superhost">
                      <span className="text-[#FFFFFFCC] text-sm font-semibold">
                        Superhost
                      </span>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex items-center justify-around pb-4">
                  <div className="mt-2">
                    <div className="text-sm text-gray-400 mt-2">
                      {" "}
                      <p className="text-[#FFFFFF] text-2xl pb-1 font-bold">
                        939
                      </p>{" "}
                      Reviews
                    </div>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="text-sm text-gray-400 mt-2">
                      <p className="text-[#FFFFFF] text-2xl pb-1 font-bold">
                        939 *
                      </p>{" "}
                      Ratings
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    <p className="text-[#FFFFFF] text-2xl pb-1 font-bold">
                      7 years
                    </p>{" "}
                    Hosting
                  </div>
                </div>
              </div>

              {/* Right Section: Host Details */}
              <div className="w-full">
                <div className="mb-4">
                  <h3 className="text-[20px] font-medium text-white">
                    Bua is a Superhost:
                  </h3>
                  <p className="text-sm text-[#FFFFFFCC] opacity-70 py-4">
                    Superhosts are experienced, highly rated hosts who are
                    committed to <br /> providing great stays for guests.
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-[20px] font-medium text-[#FFFFFFCC] pb-3">
                    Co-Host:
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div>
                      <Avatar size={30} className="bg-gray-400">
                        <Image src={userimg} alt="Avatar" />
                      </Avatar>
                    </div>
                    <div>
                      <p className="text-[20px] font-[300] opacity-70 text-[#FFFFFFCC]">
                        Riyad Hasan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between" >
                  <div>
                    <h3 className="text-[20px] font-medium text-[#FFFFFFCC] pb-3">
                      Host Details:
                    </h3>

                    <p className="text-[20px] font-[300] opacity-70 text-[#FFFFFFCC]">
                      Response Rate: 87%
                    </p>
                    <p className="text-[20px] font-[300] opacity-70 text-[#FFFFFFCC]">
                      Response within one hour
                    </p>
                  </div>
                     {/* Message Button */}
              <Button
              style={{backgroundColor: "#EBCA7E",width: "240px",height: "44px", color: "#000000"}}
                type="primary"
                className=" border-none text-black font-bold"
              >
                Message
              </Button>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="mt-6 flex justify-between items-center">
              {/* Work and Languages */}
              <div className="text-sm space-y-2">
                <p className="flex gap-3  text-[16px] text-white font-medium"> <MdOutlineWorkOutline  className="text-[24px]" /> My work: <span className="text-white opacity-70">F&B Business</span></p>
                <p className="flex gap-3 text-[16px] text-white font-medium"> <FaLanguage className="text-[24px]" /> Language: <span className="text-white opacity-70">English & Spanish</span></p>
                <p className="flex gap-3  text-[16px] text-white font-medium"> <FaLocationPinLock className="text-[24px]"  />Lives in: <span className="text-white opacity-70">Times Square, USA</span></p>
              </div>
         
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;

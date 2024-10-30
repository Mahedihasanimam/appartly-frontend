

"use client";
import { Avatar, Button, Card, Pagination, Rate, Tooltip } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { FaLanguage } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import userimg from "/public/images/user.png";
import profileimg from "/public/images/about.png";
import Link from "next/link";

const Page = () => {
  const [expandedReviewIds, setExpandedReviewIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

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
            {
              id: 9,
              name: "Liam Wilson",
              years: 4,
              stayType: "Hostel",
              date: "August 2024",
              rating: 3,
              review:
                "It was a decent hostel experience. The facilities were basic, but it was clean and affordable.",
              shortReview:
                "It was a decent hostel experience. The facilities were basic...",
              imageUrl: profileimg,
            },
            {
              id: 10,
              name: "Isabella Martinez",
              years: 3,
              stayType: "Apartotel",
              date: "June 2024",
              rating: 5,
              review:
                "This place exceeded my expectations! The attention to detail was remarkable, and I loved every moment of my stay.",
              shortReview:
                "This place exceeded my expectations! The attention to detail was remarkable...",
              imageUrl: profileimg,
            },
            {
              id: 11,
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
              id: 12,
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
              id: 13,
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
              id: 14,
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
            {
              id: 15,
              name: "Liam Wilson",
              years: 4,
              stayType: "Hostel",
              date: "August 2024",
              rating: 3,
              review:
                "It was a decent hostel experience. The facilities were basic, but it was clean and affordable.",
              shortReview:
                "It was a decent hostel experience. The facilities were basic...",
              imageUrl: profileimg,
            },
            {
              id: 16,
              name: "Isabella Martinez",
              years: 3,
              stayType: "Apartotel",
              date: "June 2024",
              rating: 5,
              review:
                "This place exceeded my expectations! The attention to detail was remarkable, and I loved every moment of my stay.",
              shortReview:
                "This place exceeded my expectations! The attention to detail was remarkable...",
              imageUrl: profileimg,
            },
          ];

  const toggleShowMore = (id) => {
    if (expandedReviewIds.includes(id)) {
      setExpandedReviewIds(expandedReviewIds.filter((reviewId) => reviewId !== id));
    } else {
      setExpandedReviewIds([...expandedReviewIds, id]);
    }
  };

  // Calculate the reviews to display for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedReviews = reviews.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(reviews.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
         <div className="container mx-auto   my-12 p-4">
        <h3 className="text-[24px]  font-bold text-[#FFFFFF] py-6">
          Meet your host
        </h3>
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
                <div className="mb-4 flex items-center justify-between">
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
             {/* <Link href={"/message"}	> 
             <Button
              style={{backgroundColor: "#EBCA7E",width: "240px",height: "44px", color: "#000000"}}
                type="primary"
                className=" border-none text-black font-bold"
              >
                Message
              </Button></Link> */}
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="mt-6 flex justify-between items-center">
              {/* Work and Languages */}
              <div className="text-sm space-y-2">
                <p className="flex gap-3  text-[16px] text-white font-medium">
                  {" "}
                  <MdOutlineWorkOutline className="text-[24px]" /> My work:{" "}
                  <span className="text-white opacity-70">F&B Business</span>
                </p>
                <p className="flex gap-3 text-[16px] text-white font-medium">
                  {" "}
                  <FaLanguage className="text-[24px]" /> Language:{" "}
                  <span className="text-white opacity-70">
                    English & Spanish
                  </span>
                </p>
                <p className="flex gap-3  text-[16px] text-white font-medium">
                  {" "}
                  <FaLocationPinLock className="text-[24px]" />
                  Lives in:{" "}
                  <span className="text-white opacity-70">
                    Times Square, USA
                  </span>
                </p>
              </div>
            </div>
          </Card>

        </div>
      </div>
      <div className="container mx-auto border-t-2 border-[#424242] my-12 p-4">
        <h3 className="text-[24px] font-bold text-[#FFFFFF] py-6">Meet your host</h3>
        <div className="text-white flex items-center">
          <Card className="w-full bg-transparent lg:p-8" bordered={false} bodyStyle={{ padding: 0 }}>
            {/* Host information and details */}
            {/* Content here */}

            {/* Reviews Section */}
            <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedReviews.map((review) => (
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
                    className="mb-1 text-secoundary"
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

              {/* Pagination Component */}
              <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
              
             <div className="flex justify-between items-center gap-4 w-full">
                      {/* Page information */}
              <div className="text-center text-white mt-2">
                Page {currentPage} of {Math.ceil(reviews.length / pageSize)}
              </div>
                <Pagination
                  current={currentPage}
                  total={reviews.length}
                  pageSize={pageSize}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                  className="text-center"
                  style={{ color: "#FFFFFF" }}
                />
             </div>
                 <div className="flex justify-end items-center gap-4 w-full">
                 <Button onClick={handlePrevious} >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  
                >
                  Next
                </Button>
                 </div>
              </div>

           
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;

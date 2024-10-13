import { Button, Dropdown, Input } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import heroimg from "/public/images/heroimg.png";
const Hero = () => {
  return (
    <div>
      {/* Hero section with image and search bar and category dropdown  */}
      <div
        style={{ backgroundImage: `url(${heroimg.src})` }}
        className="w-full min-h-[407px] bg-cover py-6"
      >
        <div className="lg:pt-28 md:pt-28 py-12 px-6">
          <div className=" s-mobile:py-6  items-center  max-w-4xl text-center mx-auto ">
            <h1 className="text-white  text-[48px] leading-tight font-bold ">
              Experience Unforgettable Stays <br /> with Our Easy Room Booking
            </h1>
            <p className="text-white text-[16px] leading-tight mt-4">
              Discover the perfect accommodation tailored just for you, whether
              it’s a weekend getaway or a business trip.
            </p>
          </div>

          {/* search input ------------------------ */}
          <div className="flex items-center bg-[#FFFFFF99] rounded-xl shadow-lg px-6 space-x-4 max-w-4xl mx-auto my-6 ">
            <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out my-2">
              <p className="text-[16px] text-[#000000] pl-2 ">Where</p>
              <Input 
                placeholder="Add destination"
                bordered={false}
                className="text-sm text-gray-700"
              />
            </div>
            <div className="h-12 border-r border-gray-500"></div>
            <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out">
              <p className="text-[16px] text-[#000000] pl-2 ">Check In</p>
              <Input
                placeholder="Add Dates"
                bordered={false}
                className="text-sm text-gray-700"
              />
            </div>
            <div className="h-12 border-r border-gray-400"></div>
            <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out">
              <p className="text-[16px] text-[#000000] pl-2 ">Check Out</p>
              <Input
                placeholder="Add Dates"
                bordered={false}
                className="text-sm text-gray-700"
              />
            </div>
            <div className="h-12 border-r border-gray-400"></div>
            <div className="flex-1 hover:bg-white rounded-lg p-2 transition-all duration-300 ease-in-out">
              <p className="text-[16px] text-[#000000] pl-4 ">Who</p>
              <Input
                placeholder="Add Guest"
                bordered={false}
                className="text-sm text-gray-700"
              />
            </div>
            <button className="bg-yellow-400 h-[48px] w-[48px] rounded-lg text-white">
              <SearchOutlined className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      {/* End of Hero section  */}
    </div>
  );
};

export default Hero;

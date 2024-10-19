"use client";
import { useState } from "react";
import { Input, Button, Dropdown, Menu, Drawer, Modal, Select } from "antd";
import { MenuOutlined, NotificationFilled } from "@ant-design/icons";
import logo from "/public/images/logo.svg";
import gloval from "/public/icons/gloval.svg";
import user from "/public/icons/user.svg";
import Image from "next/image";
import Link from "next/link";

import imageone from '/public/images/user.png'
const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [isowner, setisowner] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const showLanguageModal = () => {
    setLanguageModalVisible(true);
  };

  const handleLanguageModalCancel = () => {
    setLanguageModalVisible(false);
  };

  const handleSwitch = () => {
    setisowner(!isowner);
    console.log("the owner is", isowner);
  };


  const profileMenu = (
    <Menu
      style={{
        width: 200,
        backgroundColor: "#060000",
        color: "#ffffff !important",
      }}
    >
      <Menu.Item key="1" style={{ color: "#ffffff" }}>
        <Link href="/auth/GuestLogin"> Guest Log in</Link>
      </Menu.Item>
      <Menu.Item key="2" style={{ color: "#ffffff" }}>
        <Link href="/auth/OwnarLogin">Owner Log in</Link>
      </Menu.Item>
      <Menu.Item key="3" style={{ color: "#ffffff" }}>
        <a href="/Bookyourstay">Book your stay</a>
      </Menu.Item>
      <Menu.Item key="4" style={{ color: "#ffffff" }}>
        <a href="/FAQ">FAQ</a>
      </Menu.Item>
      <Menu.Item key="5" style={{ color: "#ffffff" }}>
        {isowner ? (
          <Link href="/Profile">My Profile</Link>
        ) : (
          <Link href="/ownerProfile">Owner profile</Link>
        )}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-primary">
      <nav className="w-full p-4 container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-4 ">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Middle: Search bar with category button (Hidden on small screens) */}
        <div className="hidden w-full  lg:flex item-center justify-start  space-x-2 px-2">
          <ul className="space-x-2 list-none flex item-center gap-[24px] text-[16px] font-medium text-white py-4">
            <li>
              <Link href="/" className="text-[16px] hover:text-secoundary">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-[16px] hover:text-secoundary"
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-[16px] hover:text-secoundary">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[16px] hover:text-secoundary">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Links (Hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-6">
          {isowner ? (
          <Link href={'#'}>  <Button
          onClick={handleSwitch}
          style={{ backgroundColor: "#EBCA7E", color: "#000000" }}
          className="bg-[#EBCA7E] text-[#000000] font-bold text-[16px] p-5"
          type="primary"
        >
          Estimate my property
        </Button></Link>
          ) : (
            <Button
              onClick={handleSwitch}
              style={{ backgroundColor: "#EBCA7E", color: "#000000" }} 
              className="bg-[#EBCA7E] text-[#000000] font-bold text-[16px] p-5"
              type="primary"
            >
              Switch to Guest profile
            </Button>
          )}

          <div className="w-full flex gap-6 items-center justify-center">
            <div className="w-full">
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid black",
                }}
                onClick={showLanguageModal}
                className="w-[60px] h-[60px] flex items-center justify-center"
              >
                <Image src={gloval} alt="gloval" width={44} height={44} />
              </Button>
            </div>
            <div>
              {/* notification ---------------- */}
              <Link href={'/allnotifications'}><div className="cursor-pointer " >
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 18.0371H0V16.0371H1V9.06811C1 4.08011 5.03 0.0371094 10 0.0371094C14.97 0.0371094 19 4.08011 19 9.06811V16.0371H20V18.0371ZM7.5 19.0371H12.5C12.5 19.7001 12.2366 20.336 11.7678 20.8049C11.2989 21.2737 10.663 21.5371 10 21.5371C9.33696 21.5371 8.70107 21.2737 8.23223 20.8049C7.76339 20.336 7.5 19.7001 7.5 19.0371Z"
                    fill="#EDEDED"
                  />
                </svg>
              </div></Link>
             <div>
          
             </div>
            </div>
            <div>
              <Dropdown
                className="text-white"
                overlay={profileMenu}
                trigger={["hover"]}
              >
                <Button
                  style={{
                    backgroundColor: "#EBCA7E",
                    border: "1px solid black",
                  }}
                  className="rounded-2xl w-[60px] h-[60px]  flex items-center justify-center"
                  onClick={(e) => e.preventDefault()}
                >
                  <Image src={user} alt="user" width={44} height={44} />
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button (Visible on small screens) */}
        <div className="lg:hidden">
          <MenuOutlined
            className="text-2xl text-white"
            onClick={() => setDrawerVisible(true)}
          />
        </div>

        {/* Modal for language selection */}
        <Modal
          visible={languageModalVisible}
          onCancel={handleLanguageModalCancel}
          footer={null}
        >
          <h2 className="text-lg font-semibold mb-4">
            Choose Your Preferred Language
          </h2>
          <Select
            className="h-[44px]"
            placeholder="Select Language"
            style={{ width: "100%", marginBottom: "1rem" }}
          >
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="gr">Greek</Select.Option>
            {/* Add other languages as needed */}
          </Select>
          <p className="mb-4 text-sm text-gray-500">
            Note: Changing the language will refresh the page to apply your
            selection.
          </p>
        </Modal>

        {/* Drawer for mobile menu */}
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
        >
          <ul className="space-y-2 py-4">
            <li>
              <Link href="/" className="text-[16px] hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-[16px] hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-[16px] hover:text-primary">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[16px] hover:text-primary">
                About
              </Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-4">
            <Link href={"/auth/signup"}>
              <Button
                className="text-[#FFFFFF] font-semibold text-[16px] p-5"
                type="primary"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";
import { useState, useEffect } from "react";
import { Input, Button, Dropdown, Menu, Drawer, Modal, Select } from "antd";
import {
  ShoppingCartOutlined,
  MenuOutlined,
  SearchOutlined,
  DownOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import logo from "/public/images/logo.svg";
import gloval from "/public/icons/gloval.svg";
import user from "/public/icons/user.svg";
import Image from "next/image";
import Link from "next/link";
// import { useLocale, useTranslations } from "next-intl";
// import { Option } from "antd/es/mentions";
// import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [language, setLanguage] = useState("en"); // Default to 'en'
  const [isModalVisible, setIsModalVisible] = useState(false);
  //   const t = useTranslations();
  //   const cookieMiya = new Cookies();
  const router = useRouter();

  //   useEffect(() => {
  //     // const savedLang = cookieMiya.get("NEXT_LOCALE") || "en";
  //     setLanguage(savedLang);
  //   }, []);

  //   const handleChange = (lang) => {
  //     if (lang && lang !== language) {
  //       setLanguage(lang);
  //     //   cookieMiya.set("NEXT_LOCALE", lang, { path: "/" });
  //       router.refresh(); // Refresh the data and re-render the page content
  //       setIsModalVisible(false); // Close the modal after selection
  //     }
  //   };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const categoryMenu = (
    <Menu>
      <Menu.Item key="1">Category 1</Menu.Item>
      <Menu.Item key="2">Category 2</Menu.Item>
      <Menu.Item key="3">Category 3</Menu.Item>
    </Menu>
  );

  return (
   <div className="bg-primary">
     <nav className="w-full p-4 container mx-auto  flex justify-between items-center">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Middle: Search bar with category button (Hidden on small screens) */}
      <div className="hidden  w-fit lg:flex items-center space-x-2 px-2">
        {/* Add the new menu items */}
        <ul className="space-x-2 list-none flex item-center gap-[24px] text-[16px] font-medium text-white py-4" >
            <li>
              <Link
                href="/"
                className=" text-[16px] hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/services"
                className=" text-[16px] hover:text-primary"
              >
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/blogs"
                className=" text-[16px] hover:text-primary"
              >
                Blogs
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/about"
                className=" text-[16px] hover:text-primary"
              >
                About
              </Link>
            </li>
          </ul>
      </div>

      {/* Right Side: Links (Hidden on small screens) */}
      <div className="hidden lg:flex items-center space-x-6">
        <Button
        style={{ backgroundColor: "#EBCA7E"}}
          className=" bg-[#EBCA7E]  text-[#000000]  font-bold text-[16px] p-5"
          type="primary"
        >
          <Link href="/estimateMyProperty" className="text-[16px]">
            Estimate my property
          </Link>
        </Button>

        <Button style={{ backgroundColor: "transparent",border: "1px solid black" }}  onClick={showModal} size="large">
          
        <Image src={gloval} alt="gloval" width={24} height={24} />
        </Button>

        <Button style={{ backgroundColor: "#EBCA7E",border: "1px solid black" }} className={"rounded-2xl py-6"}  onClick={showModal} size="large">
        <Image src={user} alt="gloval" width={24} height={24} />
        </Button>
      </div>

      {/* Mobile Menu Button (Visible on small screens) */}
      <div className="lg:hidden">
        <MenuOutlined className="text-2xl text-white" onClick={showDrawer} />
      </div>

      {/* Modal for language selection */}
      <Modal visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <h2 className="text-lg font-semibold mb-4">
          Choose Your Preferred Language
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Select a language from the dropdown to change the language of the
          website.
        </p>
        <Select
          className="h-[44px] "
          placeholder="Select Language"
          // value={language}
          style={{ width: "100%", marginBottom: "1rem" }}
          // onChange={handleChange}
        >
          <Select.Option className=" mb-2" value="en">
            English
          </Select.Option>
          <Select.Option value="gr">Greek</Select.Option>
          {/* Add other languages as needed */}
        </Select>
        <p className=" text-sm text-gray-500">
          Note: Changing the language will refresh the page to apply your
          selection.
        </p>
        <p className="mb-4 text-sm text-gray-500">
          If you encounter any issues, please try reloading the page manually.
        </p>
      </Modal>

      {/* Drawer for mobile menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        <div>
          {/* Add the new menu items */}
          <ul className="space-y-2 py-4" >
            <li>
              <Link
                href="/"
                className=" text-[16px] hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/services"
                className=" text-[16px] hover:text-primary"
              >
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/blogs"
                className=" text-[16px] hover:text-primary"
              >
                Blogs
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/about"
                className=" text-[16px] hover:text-primary"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href={"/auth/login"}
            className="text-[16px] font-semibold text-[#475467]"
          >
            LogIn
          </Link>
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

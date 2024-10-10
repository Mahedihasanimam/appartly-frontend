"use client";
import { useState } from "react";
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
import { useRouter } from "next/navigation";
import GuestLoginModal from "../guestLoginModal/GuestLoginModal";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [guestLoginModalVisible, setGuestLoginModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  
  const router = useRouter();

  const showLanguageModal = () => {
    setLanguageModalVisible(true);
  };

  const handleLanguageModalCancel = () => {
    setLanguageModalVisible(false);
  };

  const showGuestLoginModal = () => {
    setGuestLoginModalVisible(true);
  };

  const handleGuestLoginModalClose = () => {
    setGuestLoginModalVisible(false);
  };

  const showLoginModal = () => {
    setLoginModalVisible(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalVisible(false);
  };

  const handleLogin = (values) => {
    console.log('Login values:', values);
    setLoginModalVisible(true);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const handleFacebookLogin = () => {
    console.log('Login with Facebook');
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const profileMenu = (
    <Menu style={{ width: 200, backgroundColor: "#060000", color: "#ffffff !important" }}>
      <Menu.Item key="1" style={{ color: "#ffffff" }}>
        <button onClick={showGuestLoginModal}>Guest Log in</button>
      </Menu.Item>
      <Menu.Item key="2" style={{ color: "#ffffff" }}>
        <a href="/OwnerLogin">Owner Log in</a>
      </Menu.Item>
      <Menu.Item key="3" style={{ color: "#ffffff" }}>
        <a href="/Bookyourstay">Book your stay</a>
      </Menu.Item>
      <Menu.Item key="4" style={{ color: "#ffffff" }}>
        <a href="/FAQ">FAQ</a>
      </Menu.Item>
      <Menu.Item key="5" style={{ color: "#ffffff" }}>
        <a href="/myprofile">My Profile</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-primary">
      <nav className="w-full p-4 container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Middle: Search bar with category button (Hidden on small screens) */}
        <div className="hidden w-fit lg:flex items-center space-x-2 px-2">
          <ul className="space-x-2 list-none flex item-center gap-[24px] text-[16px] font-medium text-white py-4">
            <li>
              <Link href="/" className="text-[16px] hover:text-primary">Home</Link>
            </li>
            <li>
              <Link href="/services" className="text-[16px] hover:text-primary">Services</Link>
            </li>
            <li>
              <Link href="/blogs" className="text-[16px] hover:text-primary">Blogs</Link>
            </li>
            <li>
              <Link href="/about" className="text-[16px] hover:text-primary">About</Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Links (Hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Button
            style={{ backgroundColor: "#EBCA7E" }}
            className="bg-[#EBCA7E] text-[#000000] font-bold text-[16px] p-5"
            type="primary"
          >
            <Link href="/estimateMyProperty" className="text-[16px]">Estimate my property</Link>
          </Button>

          <Button style={{ backgroundColor: "transparent", border: "1px solid black" }} onClick={showLanguageModal} size="large">
            <Image src={gloval} alt="gloval" width={24} height={24} />
          </Button>

          <Dropdown className="text-white" overlay={profileMenu} trigger={['hover']}>
            <Button
              style={{ backgroundColor: "#EBCA7E", border: "1px solid black" }}
              className={"rounded-2xl w-[60px] py-6"}
              onClick={(e) => e.preventDefault()} // Prevents page from refreshing when clicking on the button
              size="large"
            >
              <Image src={user} alt="user" width={24} height={24} />
            </Button>
          </Dropdown>
        </div>

        {/* Mobile Menu Button (Visible on small screens) */}
        <div className="lg:hidden">
          <MenuOutlined className="text-2xl text-white" onClick={() => setDrawerVisible(true)} />
        </div>

        {/* Modal for language selection */}
        <Modal visible={languageModalVisible} onCancel={handleLanguageModalCancel} footer={null}>
          <h2 className="text-lg font-semibold mb-4">Choose Your Preferred Language</h2>
          <Select
            className="h-[44px]"
            placeholder="Select Language"
            style={{ width: "100%", marginBottom: "1rem" }}
          >
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="gr">Greek</Select.Option>
            {/* Add other languages as needed */}
          </Select>
          <p className="mb-4 text-sm text-gray-500">Note: Changing the language will refresh the page to apply your selection.</p>
        </Modal>

        {/* Guest Login Modal */}
        <GuestLoginModal
          isVisible={guestLoginModalVisible}
          onClose={handleGuestLoginModalClose}
          onLogin={handleLogin}
          onForgotPassword={handleForgotPassword}
          onFacebookLogin={handleFacebookLogin}
          onGoogleLogin={handleGoogleLogin}
          title="Log in as Guest"
          description="Enter your email & password which you used to create an Appartali account"
          logoSrc="/path-to-your-logo.png"
        />

        {/* Login Modal */}
        <Modal
          visible={loginModalVisible}
          onCancel={handleLoginModalClose}
          footer={null}
          title="Login"
        >
          {/* Your login form goes here */}
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
              <Link href="/" className="text-[16px] hover:text-primary">Home</Link>
            </li>
            <li>
              <Link href="/services" className="text-[16px] hover:text-primary">Services</Link>
            </li>
            <li>
              <Link href="/blogs" className="text-[16px] hover:text-primary">Blogs</Link>
            </li>
            <li>
              <Link href="/about" className="text-[16px] hover:text-primary">About</Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-4">
            <Link href={"/auth/login"} className="text-[16px] font-semibold text-[#475467]">LogIn</Link>
            <Link href={"/auth/signup"}>
              <Button className="text-[#FFFFFF] font-semibold text-[16px] p-5" type="primary">Sign Up</Button>
            </Link>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;

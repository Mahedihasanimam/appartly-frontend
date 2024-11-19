"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineChevronLeft } from "react-icons/md";
import imageone from '/public/images/user.png'
import Link from "next/link";
import { useSelector } from "react-redux";
import { useGetNotifiByUserIdQuery } from "@/redux/features/users/UserApi";
const Notification = () => {
  const [isOpen, setIsOpen] = useState(true); // Manage the modal open state
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
const {isLoading,data}=useGetNotifiByUserIdQuery(user?._id)




const notifications=data?.notifications



  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  if (!isOpen) return null;
if(isLoading){
  return <h1>loading...</h1>
}
  return (
    <div className=" min-h-screen text-white bg-black p-4 z-50">
      <div className="modal-content w-full container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-xl flex text-white space-x-2 items-center font-semibold mb-6">
           <Link href={'/'}> <button  className="focus:outline-none">
              <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
            </button></Link>
            Notification
          </h2>
          <p className="text-secondary border-b border-secondary">Read all</p>
        </div>
        {notifications?.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li
                className="flex items-center space-x-4 border-2 border-[#242424] rounded-lg cursor-pointer p-1"
                key={index}
              >
                <Image
                  className="rounded-full"
                  height={40}
                  width={40}
                  // src={notification.image}
                  alt="image"
                />
                <div>
                  <strong className="text-[18px] font-normal">
                    {notification.name}
                  </strong>
                  :{" "}
                  <strong className="text-[#FFFFFFB2]">
                    {notification.message}
                  </strong>
                  <p className="timestamp text-[#FFFFFFB2]">
                    {notification.timestamp}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No new notifications</p>
        )}
      </div>
    </div>
  );
};

export default Notification;

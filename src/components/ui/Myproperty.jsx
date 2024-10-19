import { Card, Rate, Dropdown, Menu, Modal } from "antd";
import { React, useState } from "react";
import { DeleteOutlined, EditOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import { useRouter } from "next/navigation";

const Myproperty = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
const router=useRouter()
  const handleMenuClick = ({ key }) => {
    if (key === "edit") {
      router.push('/proparty/editproperty')
      console.log("Edit clicked");
    } else if (key === "delete") {
      // Show the confirmation modal when delete is clicked
      setIsModalVisible(true);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="edit"> <EditOutlined className="text-[16px] pr-2"/>  Edit</Menu.Item>
      <Menu.Item key="delete"> <DeleteOutlined className="text-[16px] pr-2"/> Delete</Menu.Item>
    </Menu>
  );

  const handleOk = () => {
    // Handle the deletion logic here
    console.log("Deleted");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Card
        hoverable
        className="rounded-lg bg-gray-800 overflow-hidden shadow-lg border-none"
        cover={
          <Image
            alt={data.location}
            src={data.image}
            className="h-48 w-full object-cover"
          />
        }
        bodyStyle={{ padding: "16px", backgroundColor: "#3B3B3B", color: "white" }}
      >
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full"
            >
              <HiDotsVertical className="text-gray-800 text-[16px]" />
            </button>
          </Dropdown>
        <div className="flex justify-between items-center mb-2 border-none relative">
          <div>
            <h2 className="text-lg font-medium">{data.location}</h2>
            <p className="text-[16px] font-medium">{data.host}</p>
            <p className="text-lg font-medium mb-2">{data.price} Per Night</p>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <Rate
                disabled
                count={1}
                value={data.rating}
                className="text-[#FDB022] text-lg"
              />
              <span className="text-white text-xl font-medium">{data.rating}</span>
            </div>
            <div>
              <p className="text-[16px] font-medium">Room id: {data.roomId}</p>
              <p className="text-lg font-medium">{data.date}</p>
            </div>
          </div>
      
        </div>
      </Card>

      <Modal
        title="Confirm Deletion"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes, Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this property?</p>
      </Modal>
    </div>
  );
};

export default Myproperty;

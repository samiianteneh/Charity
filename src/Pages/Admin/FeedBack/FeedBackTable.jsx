import { Space, Table } from "antd";
import { Link } from "lucide-react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import FeedBackModal from "./FeedBackModal";

function FeedBackTable({ Comments, type }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      className: " font-poppins font-normal text-[13px]",
    },
    {
      title: "email	",
      dataIndex: "email",
      className: " font-poppins font-normal text-[13px]",
    },
    {
      title: "message",
      className: " font-poppins font-normal text-[13px]",
      render: (_, record) => (
        <Space size="middle">
          <div className="  font-normal py-2 px-4 rounded   ">
            {record.message?.length < 50
              ? record.message
              : record.message?.slice(0, 50) + "..."}
          </div>
        </Space>
      ),
    },

    {
      title: "Action",
      key: "action",
      className: " font-poppins font-normal text-[13px]",

      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => openModal(record)}
            className="text-green-500 hover:text-green-800 text-xl font-bold py-2 px-4 rounded   "
          >
            <FaEdit />
          </a>
        </Space>
      ),
    },
  ];

  const customPagination = {
    showSizeChanger: true,
    pageSizeOptions: ["2", "10"],
    showTotal: (total, range) =>
      `Showing ${range[0]}-${range[1]} of ${total} items`,
  };
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(false);
  const openModal = (record) => {
    setIsOpen(true);
    setData(record);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="container mx-auto mt-8">
        <h2 className="text-lg font-medium mb-4 text-[#43a440] border-b-[1px]">
          {type == "active" ? "Seen" : type === "inActive" ? "UnSeen" : ""}{" "}
          FeedBacks{" "}
        </h2>{" "}
        <Table
          columns={columns}
          dataSource={Comments}
          pagination={customPagination}
        />
      </div>
      {isOpen && <FeedBackModal closeModal={closeModal} data={data} />}
    </div>
  );
}

export default FeedBackTable;

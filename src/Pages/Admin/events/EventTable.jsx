import { Space, Table } from "antd";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EventEdit from "./edit/EditEvent";

function EventTable({ charity, type }) {
  const columns = [
    {
      title: "",
      dataIndex: "imageUrl",
      className:
        "font-poppins font-normal text-[13px] text-center w-[200px] h-[150px]",
      render: (imageUrl) => <img src={imageUrl} alt="Event" className="" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      className: " font-poppins font-normal text-[13px]",
    },
    {
      title: "Event Address	",
      dataIndex: "eventAddress",
      className: " font-poppins font-normal text-[13px]",
    },
    {
      title: "Date",
      dataIndex: "date",
      className: "font-poppins font-normal text-[13px]",
      render: (date) => (date ? date.slice(0, 10) : null),
    },
    {
      title: "Aid Address",
      dataIndex: "charityAddress",
      className: " font-poppins font-normal text-[13px]",
    },
    {
      title: "Description",
      dataIndex: "description",
      className: " font-poppins font-normal text-[13px]",
    },

    {
      title: "Action",
      key: "action",
      className: " font-poppins font-normal text-[13px]",

      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => openModal(record)}
            className="text-green-500 hover:text-green-800  text-xl font-bold py-2 px-4 rounded  "
          >
            <FaEdit />
          </a>
        </Space>
      ),
    },
  ];

  const customPagination = {
    showSizeChanger: true,
    pageSizeOptions: ["3"],
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
  console.log(data, "dataxdata");
  return (
    <div>
      <div className="container mx-auto mt-8">
        <h2 className="text-lg font-medium mb-4 text-[#43a440] border-b-[1px] overflow-auto">
          {type == "active" ? "Active" : type === "inActive" ? "Inactive" : ""}{" "}
          Event List
        </h2>
        <div className="max-w-[90%]  m-3 overflow-auto">
          <Table
            columns={columns}
            dataSource={charity}
            pagination={customPagination}
          />{" "}
        </div>
      </div>
      {isOpen && <EventEdit closeModal={closeModal} data={data} />}
    </div>
  );
}

export default EventTable;

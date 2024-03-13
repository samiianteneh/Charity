import { Space, Table } from "antd";
import { Link } from "lucide-react";
import { FaEdit } from "react-icons/fa";

const columns = [
  {
    title: "Name",
    dataIndex: "charity",
    className: " font-poppins font-normal text-[13px]",
  },
  {
    title: "Event Address	",
    dataIndex: "charityAddress",
    className: " font-poppins font-normal text-[13px]",
  },
  {
    title: "Date",
    dataIndex: "date",
    className: " font-poppins font-normal text-[13px]",
  },
  {
    title: "Address",
    dataIndex: "location",
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
          href={`./editEvent/${record?.eventId}`}
          className="text-green-500 hover:text-3xl text-xl font-bold py-2 px-4 rounded"
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
function EventTable({ charity, type }) {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <h2 className="text-lg font-medium mb-4 text-[#43a440] border-b-[1px]">
          {type == "active" ? "Active" : type === "inActive" ? "Inactive" : ""}{" "}
          Event List
        </h2>{" "}
        <Table
          columns={columns}
          dataSource={charity}
          pagination={customPagination}
        />
      </div>
    </div>
  );
}

export default EventTable;

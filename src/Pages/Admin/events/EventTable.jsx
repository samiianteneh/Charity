import { Space, Table } from "antd";
import { Link } from "lucide-react";
import { FaEdit } from "react-icons/fa";

const columns = [
  {
    title: "Name",
    dataIndex: "charity",
  },
  {
    title: "Event Address	",
    dataIndex: "charityAddress",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Address",
    dataIndex: "location",
  },
  {
    title: "Description",
    dataIndex: "description",
  },

  {
    title: "Action",
    key: "action",
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
function EventTable({ charity, type }) {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4 text-[#43a440]">
          {type == "active" ? "Active" : type == "inActive" ? "inActive" : ""}{" "}
          Event List
        </h2>{" "}
        <Table columns={columns} dataSource={charity} />
      </div>
    </div>
  );
}

export default EventTable;

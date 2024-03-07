import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../Layout/dashboardHeader";
import Layout from "../../../Layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../../Store";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    email: 32,
    phone: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    email: 42,
    phone: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    email: 32,
    phone: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const MemberNew = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  console.log(users, "userReducer");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const totalPages = Math.ceil(users.length / perPage);

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Layout>
      <div className="font-poppins grid  gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className=" py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className="container mx-auto mt-8">
            <div className="overflow-x-auto m-3">
              <Table columns={columns} dataSource={data} />
            </div>

            {/* Pagination */}
            <div className="flex justify-end mr-2 mt-4 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-3 py-1 text-sm rounded-md focus:outline-none ${
                      currentPage === pageNumber
                        ? "bg-[#43a440] text-white text-xl"
                        : "text-[#43a440] hover:bg-[#358232] hover:text-white "
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MemberNew;

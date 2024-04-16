import DashboardHeader from "../../../Layout/dashboardHeader";
import Layout from "../../../Layout/layout";
import { Table } from "antd";
import { personalInfo } from "../../../Constant/personalInfo";
import { getUsers } from "../../../Store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "fullName",
    // dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "volunteer type",
    // dataIndex: "role",
    render: (record) => (record.volunteer ? record.volunteer.name : ""),
  },
];

const MemberNew = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  // console.log(users, "userssss");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Layout>
      <div className="font-poppins gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] w-[100%]">
          <DashboardHeader />
          <div className="container mx-auto  mt-8">
            <div className="max-w-[90%]  m-3 overflow-auto">
              {/* <Table columns={columns} dataSource={users?.users} /> */}
              <Table columns={columns} dataSource={users} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MemberNew;

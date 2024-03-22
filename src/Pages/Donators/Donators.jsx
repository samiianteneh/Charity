import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { personalInfo } from "../../Constant/personalInfo";

import DashboardHeader from "../../Layout/dashboardHeader";
import Layout from "../../Layout/layout";
import { getDonate, getUsers } from "../../Store";

const columns = [
  {
    title: "Name",
    dataIndex: "fullName",
    className: "text-[13px]",
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
];

const Donators = () => {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.donateReducer.donators);
  // console.log(users, "userssss");

  // useEffect(() => {
  //   dispatch(getDonate());
  // }, [dispatch]);
  return (
    <Layout>
      <div className="font-poppins gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className="container mx-auto  mt-8">
            <div className="max-w-[90%] m-3">
              <Table columns={columns} dataSource={personalInfo} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donators;

import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { personalInfo } from "../../Constant/personalInfo";

import DashboardHeader from "../../Layout/dashboardHeader";
import Layout from "../../Layout/layout";
import { getBalances } from "../../Store";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
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
];

const Donators = () => {
  const dispatch = useDispatch();
  const personalInfos = useSelector((state) => state.BalanceReducer.balance);
  // console.log(personalInfos, "donaters");
  useEffect(() => {
    dispatch(getBalances());
  }, [dispatch]);

  return (
    <Layout>
      <div className="font-poppins gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] w-[100%]">
          <DashboardHeader />
          <div className="container mx-auto  mt-8">
            <div className="max-w-[90%]  m-3 overflow-auto">
              <Table columns={columns} dataSource={personalInfos} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donators;

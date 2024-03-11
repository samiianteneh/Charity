import DashboardHeader from "../../../Layout/dashboardHeader";
import Layout from "../../../Layout/layout";
import { Table } from "antd";
import { personalInfo } from "../../../Constant/personalInfo";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
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
const MemberNew = () => {
  return (
    <Layout>
      <div className="font-poppins grid  gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className=" py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className="container mx-auto  mt-8">
            <div className="max-w-[90%] m-3">
              <Table columns={columns} dataSource={personalInfo} />
            </div>
            {/* <Newttt /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MemberNew;

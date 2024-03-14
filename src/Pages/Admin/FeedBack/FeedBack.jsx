import { useState } from "react";

import { IoMdAddCircle } from "react-icons/io";
import { Comments } from "../../../Constant/Comments";
import Layout from "../../../Layout/layout";
import DashboardHeader from "../../../Layout/dashboardHeader";
import CreateEvent from "../events/CreateEvent";
import FeedBackTable from "./FeedBackTable";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab 1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const activeComments = Comments.filter((items) => items?.is_seen == 1);
  const inActiveComments = Comments.filter((items) => items?.is_seen == 0);
  console.log(Comments, "CommentsComments");
  console.log(activeComments, "activeComments");
  console.log(inActiveComments, "inActiveComments");
  return (
    <Layout>
      <div className="font-poppins gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className="container mx-auto mt-8">
            <div className="w-[95%]  mx-auto mt-8">
              <div className="flex   items-center justify-center gap-10 ">
                <button
                  className={`${
                    activeTab === "Tab 1"
                      ? "border-2 text-[14px] font-normal rounded-2xl border-[#43a440] text-[#43a440]"
                      : "text-gray-500 text-[14px] font-normal  border-b-2"
                  } py-2 px-4 focus:outline-none hover:text-[#43a440]`}
                  onClick={() => handleTabClick("Tab 1")}
                >
                  Seen{" "}
                </button>
                <button
                  className={`${
                    activeTab === "Tab 2"
                      ? "border-2 text-[14px] font-normal rounded-2xl border-[#43a440] text-[#43a440]"
                      : "text-gray-500 text-[14px] font-normal border-b-2"
                  } py-2 px-4 focus:outline-none hover:text-[#43a440]`}
                  onClick={() => handleTabClick("Tab 2")}
                >
                  Un Seen{" "}
                </button>
              </div>
              <div className="mt-4">
                {activeTab === "Tab 1" && (
                  <div className="">
                    {" "}
                    <FeedBackTable Comments={activeComments} type="active" />
                  </div>
                )}
                {activeTab === "Tab 2" && (
                  <div className="">
                    {" "}
                    <FeedBackTable
                      Comments={inActiveComments}
                      type="inActive"
                    />
                  </div>
                )}
              </div>
            </div>
            {isOpen && <CreateEvent closeModal={closeModal} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;

import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../Layout/dashboardHeader";
import Layout from "../../../Layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Store";
import { IoMdAddCircle } from "react-icons/io";
import CreateEvent from "../events/CreateEvent";
import CreateAdmin from "./createAdmin";
// import { CirclePlus } from "lucide-react";

const Settings = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  console.log(users, "usersdsf");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Layout>
      <div className="font-poppins gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] ">
          <DashboardHeader />
          <div className="px-5 py-4 m-2 ">
            <button
              className="flex bg-green-600 items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3"
              onClick={() => openModal()}
            >
              <IoMdAddCircle className="fill-white " size={20} />
              <p className="font-normal text-[12px] text-white"> Add Admin</p>
            </button>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-4 mx-auto flex flex-wrap">
              <div class="flex flex-wrap -m-4">
                {users?.map((user) => (
                  <div class="p-4 lg:w-1/2 md:w-full">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0"></div>
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-mg title-font font-medium mb-1">
                          {user.fullName}
                        </h2>
                        <p class="leading-relaxed font-light text-[12px] mb-3">
                          {user.email}
                        </p>

                        <p class="leading-relaxed font-medium text-[13px] mb-3">
                          {user.role}
                        </p>
                        <a class="font-medium text-[12px] mt-3 text-green-500 inline-flex items-center">
                          Details
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {isOpen && <CreateAdmin closeModal={closeModal} />}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;

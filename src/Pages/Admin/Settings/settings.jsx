import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../Layout/dashboardHeader";
import Layout from "../../../Layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateUser, deleteUser } from "../../../Store";
import { IoMdAddCircle } from "react-icons/io";
import CreateEvent from "../events/CreateEvent";
import CreateAdmin from "./createAdmin";
import { Trash2, Pencil } from "lucide-react";
import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Settings = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editUserData, setEditUserData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  console.log(selectedUser, "selectedUser");
  console.log(users, "users");
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditUserData(user);
    setIsEditMode(true);
  };
  const handleUpdate = () => {
    dispatch(updateUser(selectedUser.id, editUserData));
    setIsEditMode(false);
  };
  const handleUpdateCancel = () => {
    setIsEditMode(false);
  };
  const handleDelete = () => {
    if (selectedUser && selectedUser.id) {
      dispatch(deleteUser(selectedUser.id));
      setOpenDeleteModal(false);
    }
  };
  const handleDeleteCancel = () => {
    setOpenDeleteModal(false);
  };
  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setOpenDeleteModal(true);
  };
  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      // Get the image URL from the response and set it as the image preview
      setImagePreview(info.file.response.imageUrl);
    }
  };
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
              <p className="font-normal text-[14px] text-white"> Add Admin</p>
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
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="max-w-full max-h-full"
                          />
                        )}
                        <div className="grid ">
                          <div className="flex items-center justify-end gap-3 ">
                            <button onClick={() => handleEditClick(user)}>
                              <Pencil
                                size={20}
                                color="#2f855a"
                                strokeWidth={1.75}
                              />
                            </button>
                            <button onClick={() => handleDeleteClick(user)}>
                              <Trash2
                                size={20}
                                strokeWidth={1.75}
                                color="#2f855a"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {isOpen && (
            <CreateAdmin
              closeModal={closeModal}
              handleImageUpload={handleImageUpload}
            />
          )}
          <Modal
            title={<span style={{ color: "green-600" }}>Edit User</span>}
            open={isEditMode}
            onOk={handleUpdate}
            onCancel={handleUpdateCancel}
            okButtonProps={{
              className: "bg-green-500 text-white hover:bg-green-700",
            }}
          >
            <Form>
              <Form.Item>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <Input
                  value={editUserData?.fullName}
                  onChange={(e) =>
                    setEditUserData({
                      ...editUserData,
                      fullName: e.target.value,
                    })
                  }
                />
              </Form.Item>
              <Form.Item>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  value={editUserData?.email}
                  onChange={(e) =>
                    setEditUserData({
                      ...editUserData,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Item>
              <Form.Item>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <Input
                  value={editUserData?.phone}
                  onChange={(e) =>
                    setEditUserData({
                      ...editUserData,
                      phone: e.target.value,
                    })
                  }
                />
              </Form.Item>
              <Form.Item>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium mb-2"
                >
                  Role
                </label>
                <Input
                  value={editUserData?.role}
                  onChange={(e) =>
                    setEditUserData({
                      ...editUserData,
                      role: e.target.value,
                    })
                  }
                />
              </Form.Item>
              <Form.Item>
                <label
                  htmlFor="upload"
                  className="block text-sm font-medium mb-2"
                >
                  Upload
                </label>
                <Upload>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="Confirm Delete"
            open={openDeleteModal}
            onOk={handleDelete}
            onCancel={handleDeleteCancel}
            okButtonProps={{
              className: "bg-red-500 text-white hover:bg-red-700",
            }}
          >
            <p>Are you sure you want to delete this song?</p>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;

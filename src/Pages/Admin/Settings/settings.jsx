import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getAdmin, userDelete } from "../../../Store";
import { personalInfo } from "../../../Constant/personalInfo";

import { IoMdAddCircle } from "react-icons/io";
import CreateAdmin from "./createAdmin";
import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Pencil, Trash2 } from "lucide-react";

const Settings = () => {
  const userjson = localStorage.getItem("user");
  const user = JSON.parse(userjson);
  const roles = user?.role;
  const adminId = user?.id;
  console.log(adminId, "tokenstokens");
  console.log(roles, "tokenstokens");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editUserData, setEditUserData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  console.log(selectedUser, "selectedUser");
  console.log(editUserData, "editUserData");
  console.log(users, "users");
  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

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
      dispatch(userDelete(selectedUser.id));
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
  const filterdUser =
    roles == "admin" ? users?.filter((items) => items?.id == adminId) : users;
  console.log(filterdUser, "filterdUserfilterdUser");
  return (
    <div>
      {roles == "superadmin" ? (
        <div className="px-5 py-4 m-2 ">
          <button
            className="flex bg-white items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3 border-green-500 text-[11px]"
            onClick={() => openModal()}
          >
            <IoMdAddCircle className="fill-green-500 " size={20} />
            <p className="font-normal text-[11px] text-green-500"> Add Admin</p>
          </button>
        </div>
      ) : (
        ""
      )}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            {filterdUser?.map((user, index) => (
              <div key={index} className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0"></div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-[13px] title-font font-medium mb-1">
                      {user.fullName}
                    </h2>
                    <p className="leading-relaxed font-light text-[11px] mb-3">
                      {user.email}
                    </p>
                    <p className="leading-relaxed font-medium text-[12px] mb-3">
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
                        {roles === "superadmin" ? (
                          <button onClick={() => handleDeleteClick(user)}>
                            <Trash2
                              size={20}
                              strokeWidth={1.75}
                              color="#2f855a"
                            />
                          </button>
                        ) : (
                          ""
                        )}
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
        title={<span style={{ color: "green-600" }}>Edit Admin</span>}
        open={isEditMode}
        onOk={handleUpdate}
        onCancel={handleUpdateCancel}
        okButtonProps={{
          className: "bg-green-500 text-white hover:bg-green-700",
        }}
        okText="Edit"
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
            <label htmlFor="email" className="block text-sm font-medium mb-2">
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
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
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
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Role
            </label>
            <select
              className=" w-full border-2 rounded-lg p-2"
              value={editUserData?.role}
              onChange={(e) =>
                setEditUserData({
                  ...editUserData,
                  role: e.target.value,
                })
              }
            >
              <option value="Admin">Admin</option>
              {roles === "superadmin " ? (
                <option value="Super Admin">Super Admin</option>
              ) : (
                ""
              )}
            </select>
          </Form.Item>
          <Form.Item>
            <label htmlFor="upload" className="block text-sm font-medium mb-2">
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
        okText="Yes"
      >
        <p>Are you sure you want to delete this user?</p>
      </Modal>
    </div>
  );
};

export default Settings;

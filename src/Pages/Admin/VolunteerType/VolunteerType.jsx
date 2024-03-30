import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, Pencil } from "lucide-react";
import {
  deleteSetting,
  getUsers,
  getVolunteerType,
  updateSetting,
} from "../../../Store";
import { IoMdAddCircle } from "react-icons/io";
import CreateVolunteer from "./CreateVolunteer";
import { Form, Input, Modal, Upload } from "antd";

const VolunteerType = () => {
  const userjson = localStorage.getItem("user");
  const user = JSON.parse(userjson);
  const dispatch = useDispatch();
  const volunteer_type = useSelector((state) => state.settingReducer.settings);
  // console.log(volunteer_type, "volunteer_typessssssss");

  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editVolunteerData, setEditVolunteerData] = useState(null);
  // console.log(editVolunteerData, selectedVolunteer, "editVolunteerData");

  useEffect(() => {
    dispatch(getVolunteerType());
  }, [dispatch]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleEditClick = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setEditVolunteerData(volunteer);
    setIsEditMode(true);
  };
  const handleUpdate = () => {
    dispatch(updateSetting(selectedVolunteer.id, editVolunteerData));
    setIsEditMode(false);
  };
  const handleUpdateCancel = () => {
    setIsEditMode(false);
  };
  const handleDelete = () => {
    if (selectedVolunteer && selectedVolunteer.id) {
      dispatch(deleteSetting(selectedVolunteer.id, volunteer_type));
      setOpenDeleteModal(false);
    }
  };
  const handleDeleteCancel = () => {
    setOpenDeleteModal(false);
  };
  const handleDeleteClick = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setOpenDeleteModal(true);
  };
  return (
    <div>
      <div className="px-5 py-4 m-2 ">
        <button
          className="flex bg-white items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3 border-green-500 text-[11px]"
          onClick={() => openModal()}
        >
          <IoMdAddCircle className="fill-green-500 " size={20} />
          <p className="font-normal text-[11px] text-green-500">
            {" "}
            Add Volunteer Type
          </p>
        </button>
        <section className="text-gray-600 body-font my-6 font-poppins">
          <div className="container px-5 py-4 mx-auto ">
            <div className="flex flex-wrap -m-4">
              {volunteer_type?.map((item, index) => (
                <div
                  key={index}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-[5px] border m-3 "
                >
                  <div className="mt-4">
                    <h2 className="text-gray-700 title-font text-[14px] font-medium">
                      {item?.name}
                    </h2>
                    <h3 className="text-gray-500 text-[10px] tracking-widest title-font mb-1">
                      {item?.description}{" "}
                    </h3>
                    <div className="grid mt-2">
                      <div className="flex items-center justify-end gap-2 ">
                        <button onClick={() => handleEditClick(item)}>
                          <Pencil
                            size={16}
                            color="#2f855a"
                            strokeWidth={1.75}
                          />
                        </button>
                        {/* {roles === "superadmin" ? ( */}
                        <button onClick={() => handleDeleteClick(item)}>
                          <Trash2
                            size={16}
                            strokeWidth={1.75}
                            color="#2f855a"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {isOpen && <CreateVolunteer closeModal={closeModal} />}
        <Modal
          title={
            <span
              style={{
                color: "green-600",
                fontSize: "16px",
                fontWeight: "semibold",
              }}
            >
              Edit Volunteer Type
            </span>
          }
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
                htmlFor="name"
                className="block text-[11px] font-medium mb-2"
              >
                Volunteer Type
              </label>
              <Input
                id="name"
                value={editVolunteerData?.name}
                defaultValue={selectedVolunteer?.name}
                onChange={(e) =>
                  setEditVolunteerData({
                    ...editVolunteerData,
                    name: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item>
              <label
                htmlFor="description"
                className="block text-[11px] font-medium mb-2"
              >
                Description
              </label>
              <Input
                id="description"
                value={editVolunteerData?.description}
                defaultValue={selectedVolunteer?.description}
                onChange={(e) =>
                  setEditVolunteerData({
                    ...editVolunteerData,
                    description: e.target.value,
                  })
                }
              />
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
          <p>Are you sure you want to delete this Volunteer Type?</p>
        </Modal>
      </div>
    </div>
  );
};

export default VolunteerType;

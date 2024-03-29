import { useEffect, useState } from "react";
import Layout from "../../../Layout/layout";
import DashboardHeader from "../../../Layout/dashboardHeader";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPost } from "../../../Store";
import { Modal, Pagination } from "antd";
import { Trash2, Pencil } from "lucide-react";
import CreatePost from "./createPost";
import PostEdit from "./PostEdit";

const Post = () => {
  const dispatch = useDispatch();
  const Posts = useSelector((state) => state.postReducer.posts);
  console.log(Posts, "Postad");
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Posts?.slice(indexOfFirstItem, indexOfLastItem);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const openEditModal = (record) => {
    setIsOpenEdit(true);
    setDataEdit(record);
  };
  const closeEditModal = () => {
    setIsOpenEdit(false);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleDeleteCancel = () => {
    setOpenDeleteModal(false);
  };
  const handleDelete = () => {
    if (selectedUser && selectedUser.id) {
      dispatch(deletePost(selectedUser.id));
      setOpenDeleteModal(false);
    }
  };
  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setOpenDeleteModal(true);
  };

  return (
    <Layout>
      <div className="font-poppins gap-[20px] rounded-[10px] bg-white w-full h-full border-gray-300 border-[1px]">
        <div className="row-span-1 py-1 rounded-[20px] w-[100%] ">
          <DashboardHeader />
          <div className="px-5 py-4 m-2 ">
            <button
              className="flex bg-white items-center justify-center gap-2 rounded-[5px] border-[1px] py-2 px-3 border-green-500 text-[11px]"
              onClick={() => openModal()}
            >
              <IoMdAddCircle className="fill-green-600 " size={20} />
              <p className="font-normal text-[12px] text-green-600">Add Post</p>
            </button>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-4 mx-auto">
              <div className="flex flex-wrap -m-4">
                {currentItems?.map((post, index) => (
                  <div key={index} className="p-4 w-full md:w-1/3 ">
                    <div className="h-fit border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="h-36 md:h-48 min-w-full object-cover object-center"
                        src={post?.imageUrl}
                        alt="blog"
                      />
                      <div className="p-6 pb-1">
                        <h2 className="tracking-widest text-[10px] title-font font-medium text-gray-400 mb-1">
                          POST DATE -{" "}
                          {post?.createdAt ? post?.createdAt.slice(0, 10) : ""}
                        </h2>
                        <h1 className="title-font text-[13px] font-medium text-gray-900 mb-3">
                          {post?.title}
                        </h1>
                        <div className="h-36 overflow-y-auto">
                          <p className="leading-relaxed mb-3  text-[11px]">
                            {post?.description}
                          </p>
                        </div>
                      </div>
                      <div className="m-2 ">
                        <div className="flex items-center justify-end gap-3 ">
                          <button onClick={() => openEditModal(post)}>
                            <Pencil
                              size={16}
                              color="#2f855a"
                              strokeWidth={1.75}
                            />
                          </button>
                          {/* {roles === "superadmin" ? ( */}
                          <button onClick={() => handleDeleteClick(post)}>
                            <Trash2
                              size={16}
                              strokeWidth={1.75}
                              color="#2f855a"
                            />
                          </button>
                          {/* ) : (
                            ""
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {isOpen && <CreatePost closeModal={closeModal} />}
          {isOpenEdit && (
            <PostEdit closeModal={closeEditModal} data={dataEdit} />
          )}
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
          <Pagination
            defaultCurrent={currentPage}
            total={Posts?.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
            className="flex justify-end"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Post;

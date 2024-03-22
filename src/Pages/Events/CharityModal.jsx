import React, { useEffect } from "react";
import closeIcon from "../../assets/icons/system-solid-29-cross.gif";

function CharityModal({ closeModal, data }) {
  console.log(data, "data modal");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".modal-content")) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="font- poppins fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-[75%] modal-content">
        <div className="flex justify-between items-center mt-4 py-2">
          <h2 className="text-lg font-semibold ">{data?.name}</h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4  ">
          <div className="justify-items-stretch grid">
            <p className="text-gray-600 mb-2 font-normal grid ">
              <span>
                <span className="text-green-600 font-extrabold">
                  Date:{""}{" "}
                </span>
                {data?.date.slice(0, 10)}
              </span>
              <span className="gap-2 ">
                <span className="text-green-600 font-extrabold">
                  Event Address:{" "}
                </span>
                {data?.eventAddress}
              </span>
            </p>
            <p className="text-gray-600 mb-2 font-normal  ">
              <span className="text-green-600 font-extrabold">Location: </span>
              {data?.charityAddress}
            </p>

            <p className="text-gray-600 mb-2 font-normal  ">
              <span className="text-green-600 font-extrabold">
                Description:{" "}
              </span>
              {data?.description}
            </p>
          </div>
        </div>

        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CharityModal;

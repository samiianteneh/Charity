import React, { useEffect } from "react";
import closeIcon from "../assets/icons/system-solid-29-cross.gif";

function DetailModal({ closeModal, data }) {
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
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-[75%] modal-content">
        <div className="flex justify-between items-center mt-4 px-4 py-2">
          <h2 className="text-lg font-bold ">{data?.title}</h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="max-h-80 overflow-auto text-justify">
          <p>{data?.intro}</p>
          <br />
          <p>{data?.paragraph_1}</p>
          <br />
          <p>{data?.paragraph_2}</p>
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

export default DetailModal;

// import React from "react";
import closeIcon from "../assets/icons/system-solid-29-cross.gif";

// function DetailModal({ isOpen, closeModal, data }) {
//   console.log(data, "workwork");
// return (
//   <>
//     {isOpen && (
//       <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-4 rounded-lg max-w-96 ">
//           <div className="flex justify-between items-center mt-4 px-4 py-2">
//             {" "}
//             <h2 className="text-lg font-bold ">{data}</h2>
//             <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
//           </div>
//           <div className="max-h-96 overflow-auto">
//             <p>
//               At the heart of our mission lies a commitment to the well-being
//               of our elderly community members. Through strategic
//               collaborations with local non-profits and youth associations, we
//               have forged a formidable network dedicated to addressing the
//               multifaceted needs of senior citizens. By pooling together our
//               resources and expertise, we are able to ensure that elderly
//               individuals have access to not only proper meals but also
//               essential healthcare services and basic necessities. This
//               collaborative approach not only enhances the quality of life for
//               our senior population but also fosters a sense of community and
//               interconnectedness, demonstrating the power of collective action
//               in creating positive change.
//             </p>
//             <p>
//               At the heart of our mission lies a commitment to the well-being
//               of our elderly community members. Through strategic
//               collaborations with local non-profits and youth associations, we
//               have forged a formidable network dedicated to addressing the
//               multifaceted needs of senior citizens. By pooling together our
//               resources and expertise, we are able to ensure that elderly
//               individuals have access to not only proper meals but also
//               essential healthcare services and basic necessities. This
//               collaborative approach not only enhances the quality of life for
//               our senior population but also fosters a sense of community and
//               interconnectedness, demonstrating the power of collective action
//               in creating positive change.
//             </p>
//           </div>
//         </div>
//       </div>
//     )}
//   </>
// );
// }

// export default DetailModal;
import React from "react";

function DetailModal({ closeModal, data }) {
  console.log(data, "datadatadata");
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-[75%]">
        <div className="flex justify-between items-center mt-4 px-4 py-2">
          <h2 className="text-lg font-bold ">{data?.title}</h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="max-h-80 overflow-auto text-justify">
          {" "}
          <p>{data?.intro}</p>
          <br />
          <p>{data?.paragraph_1}</p>
          <br />
          <p>{data?.paragraph_2}</p>
        </div>

        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default DetailModal;

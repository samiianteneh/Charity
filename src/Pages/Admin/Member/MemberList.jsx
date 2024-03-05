import React, { useState } from "react";
import { personalInfo } from "../../../Constant/personalInfo";

function MemberList() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  // Calculate total number of pages
  const totalPages = Math.ceil(personalInfo.length / perPage);

  // Calculate index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  // Slice the data array to get the items for the current page
  const currentItems = personalInfo.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-[#43a440]">Member List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Email</th>
              <th className="py-2 px-4 border border-gray-300">Phone</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((member) => (
              <tr key={member.id}>
                <td className="py-2 px-4 border border-gray-300">
                  {member.name}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {member.email}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {member.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mr-2 mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-1 text-sm rounded-md focus:outline-none ${
                currentPage === pageNumber
                  ? "bg-[#43a440] text-white text-xl"
                  : "text-[#43a440] hover:bg-[#358232] hover:text-white "
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default MemberList;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

function EventTable({ charity, type }) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  // Calculate total number of pages
  const totalPages = Math.ceil(charity.length / perPage);

  // Calculate index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  // Slice the data array to get the items for the current page
  const currentItems = charity.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="container mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4 text-[#43a440]">
          {type == "active" ? "Active" : type == "inActive" ? "inActive" : ""}{" "}
          Event List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border border-gray-300">Name</th>
                <th className="py-2 px-4 border border-gray-300">
                  Event Address
                </th>{" "}
                <th className="py-2 px-4 border border-gray-300">Date</th>
                <th className="py-2 px-4 border border-gray-300">Address</th>
                <th className="py-2 px-4 border border-gray-300">
                  Description
                </th>
                <th className="py-2 px-4 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((event) => (
                <tr key={event.id}>
                  <td className="py-2 px-4 border border-gray-300">
                    {event.charity}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {event.charityAddress}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {event.date}
                  </td>{" "}
                  <td className="py-2 px-4 border border-gray-300">
                    {event.location}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {event.description}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    <Link
                      to={`/dashboard/editEvent/${event?.eventId}`}
                      className="text-green-500 hover:text-3xl text-xl font-bold py-2 px-4 rounded"
                    >
                      <FaEdit />
                    </Link>
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
        </div>{" "}
      </div>
    </div>
  );
}

export default EventTable;

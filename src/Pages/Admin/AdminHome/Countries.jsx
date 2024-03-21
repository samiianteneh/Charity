import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchCountriesData();
  }, []);

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="flex flex-wrap -m-2">
          {currentItems?.map((country) => (
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={country?.flags?.png}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium text-[13px]">
                    {country?.name?.common}
                  </h2>
                  <p class="text-gray-500 text-[10px]">USERS-</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Pagination
        defaultCurrent={currentPage}
        total={countries.length}
        pageSize={itemsPerPage}
        onChange={handlePageChange}
        className="flex justify-end mt-4"
      />
    </div>
  );
};

export default Countries;

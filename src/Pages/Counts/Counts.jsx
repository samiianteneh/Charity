import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalances, getUsers } from "../../Store";

const Counts = () => {
  const dispatch = useDispatch();
  const Volentery = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const balance = useSelector((state) => state.BalanceReducer.balance);

  // console.log(balance, "userssssar");

  useEffect(() => {
    dispatch(getBalances());
  }, [dispatch]);

  const [counts, setCounts] = useState({});
  useEffect(() => {
    const countryCounts = {};
    Volentery?.forEach((entry) => {
      const country = entry.country;
      countryCounts[country] = (countryCounts[country] || 0) + 1;
    });
    setCounts(countryCounts);
  }, [Volentery]);
  const totalCountries = Object.keys(counts).length;
  const balanceFilter = balance;

  const currentDate = new Date();

  // Subtract 365 days from the current date
  const oneYearAgo = new Date(currentDate);
  oneYearAgo.setDate(currentDate.getDate() - 365);

  // Filter items based on the createdAt field within the last 365 days
  const filteredItems = balanceFilter?.filter((item) => {
    // Convert the createdAt string to a Date object
    const createdAtDate = new Date(item.createdAt);

    // Check if the createdAtDate is within the last 365 days
    return createdAtDate >= oneYearAgo && createdAtDate <= currentDate;
  });

  // console.log(filteredItems, "filteredItems");
  return (
    <section className="text-gray-600 body-font bg-green-600 font-poppins">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4  w-1/3">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {Volentery?.length}{" "}
            </h2>
            <p className="leading-relaxed text-gray-200">Active Volenteers</p>
          </div>

          <div className="p-4  w-1/3">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {filteredItems?.length}
            </h2>
            <p className="leading-relaxed text-gray-200">
              Doners In last 1 Year{" "}
            </p>
          </div>
          <div className="p-4  w-1/3">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {totalCountries}{" "}
            </h2>
            <p className="leading-relaxed text-gray-200">
              {" "}
              Countries where Volunteer from
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Store";

const Counts = () => {
  const dispatch = useDispatch();
  const Volentery = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const VolenteryLength = Volentery?.length;
  return (
    <section className="text-gray-600 body-font bg-green-600 font-poppins">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4  w-1/3">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {VolenteryLength}{" "}
            </h2>
            <p className="leading-relaxed text-gray-200">Active Volenteers</p>
          </div>

          <div className="p-4  w-1/3">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              51{" "}
            </h2>
            <p className="leading-relaxed text-gray-200">
              Doners In last 1 Year{" "}
            </p>
          </div>
          <div className="p-4  w-1/3">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              5
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

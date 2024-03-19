import React, { useEffect, useState } from "react";
import closeIcon from "../../assets/icons/system-solid-29-cross.gif";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_BASE_URL } from "../../config/endpoint";

function Donate({ closeModal }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const [amounts, setAmount] = useState(null);
  const [show, setShow] = useState(false);
  const showButton = () => {
    setShow(true);
  };
  const insert = (values) => {
    setAmount(values);
  };

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

  const submitOnce = () => {
    axios
      .post(`${API_BASE_URL}/payment/process`, {
        donation_ammount: amounts,
      })
      .then((response) => {
        console.log(response, "response from backend for donation");
        if (response?.data?.success === true) {
          window.location.href = response?.data?.clientSecret?.url;
        }
      })
      .catch((err) => {
        console.error(err, "response from backend for donation err");
      });
  };
  const submitMonthly = () => {
    axios
      .post(`${API_BASE_URL}/payment/subscriptions`, {
        subscription_ammount: amounts,
      })
      .then((response) => {
        console.log(response?.data, "response from backend for donation");
        if (response?.data?.Success === true) {
          window.location.href = response?.data?.clientSecret?.url;
        }
      })
      .catch((err) => {
        console.error(err, "response from backend for donation err");
      });
  };
  console.log(amounts, "amountsss");
  return (
    <div className="font-poppins fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-[50%] min-w-[25%] modal-content">
        <div className="flex justify-between items-center mt-4 py-2">
          <h2 className="text-lg font-semibold ">Donation</h2>
          <img src={closeIcon} onClick={closeModal} className="w-10 h-10" />
        </div>
        <div className="flex justify-between w-full gap-1 md:gap-3">
          <button
            className={`mt-4 px-1 md:px-4 py-2 rounded-md text-green-600 ${
              activeTab === 1
                ? "border-4 border-green-600 "
                : "border-2 border-green-600 "
            }`}
            onClick={() => handleTabClick(1)}
          >
            Donate Ones
          </button>
          <button
            className={`mt-4 px-1 md:px-4 py-2 rounded-md text-green-600 ${
              activeTab === 2
                ? "border-4 border-green-600 "
                : "border-2 border-green-600 "
            }`}
            onClick={() => handleTabClick(2)}
          >
            Donate Monthly
          </button>
        </div>

        <div className="max-h-80 overflow-auto text-justify font-light">
          <div className="py-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <button
              onClick={() => insert(50)}
              className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="button"
            >
              $50
            </button>
            <button
              onClick={() => insert(100)}
              className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="button"
            >
              $100
            </button>
            <button
              onClick={() => insert(200)}
              className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="button"
            >
              $200
            </button>
            <button
              onClick={() => insert(300)}
              className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="button"
            >
              $300
            </button>
            <button
              onClick={() => insert(400)}
              className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="button"
            >
              $400
            </button>
            <button
              onClick={() => insert(500)}
              className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="button"
            >
              $500
            </button>
          </div>
          <div className="py-2 flex items-center space-x-4">
            {show ? (
              ""
            ) : (
              <button
                onClick={showButton}
                className="px-4 w-3/4 py-2  text-green-600 border border-green-600 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="button"
              >
                Custom Amount{" "}
              </button>
            )}
            {show ? (
              <input
                type="text"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Insert amount"
                className="px-4 w-3/4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ) : (
              ""
            )}
          </div>
          <div className=" flex justify-between">
            {" "}
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
            <div>
              {activeTab === 1 && (
                <div>
                  {" "}
                  <button
                    onClick={submitOnce}
                    disabled={amounts === null}
                    className="mt-4 mx-1 md:mx-4 px-1 md:px-4 py-2 bg-green-600 text-white rounded-md"
                    type="submit"
                  >
                    Donate Once
                  </button>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <button
                    onClick={submitMonthly}
                    disabled={amounts === null}
                    className="mt-4 mx-1 md:mx-4 px-1 md:px-4 py-2 bg-green-600 text-white rounded-md"
                    type="submit"
                  >
                    Donate Monthly
                  </button>
                </div>
              )}
            </div>
          </div>{" "}
          <div></div>
        </div>
        <div className="tab-content"></div>
      </div>
    </div>
  );
}

export default Donate;

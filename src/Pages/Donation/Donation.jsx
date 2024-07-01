import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../../Config/endpoint";
import { TbClipboardCopy } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function Donation() {
  const [amounts, setAmount] = useState(null);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [byZelle, setByZelle] = useState(false);
  const [name, setName] = useState(null);
  const [Phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const handleZelle = (e) => {
    setByZelle(e);
    setActiveTab(3);
  };
  const handlename = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  console.log("name", name);
  console.log("Phone", Phone);
  console.log("email", email);
  console.log("amounts", amounts);
  const showButton = () => {
    setShow(true);
  };
  const handleTabClick = (tabNumber) => {
    setByZelle(false);
    setActiveTab(tabNumber);
  };
  const insert = (values) => {
    setAmount(values);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const submitOnce = () => {
    axios
      .post(`${API_BASE_URL}/payment/process`, {
        donation_amount: amounts,
      })
      .then((response) => {
        console.log(
          response,
          "response from backend for donation",
          response?.data?.url,
          response?.data?.success
        );
        window.location.href =
          "https://checkout.stripe.com/c/pay/cs_live_a1wxA0tqsLhaltvsLiInVu3pdNKFfgkRwgzA0Gq0P7XyWblyEikuwKnqsg#fidkdWxOYHwnPyd1blppbHNgWjA0SklObH9NQmRESktTVG5OMk80T01zMFx8ZnJHTnJMbndjM09MTnQwcFxgQEQ0MlNAM3Z8RHxLXXJoTHRfQjxAa2FvVmI1TmpgQW40dFF0dUNgakdyVTA8NTUwZkticXMzPScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl";
        // Add this line for debugging
        // localStorage.setItem("donationName", name);
        // localStorage.setItem("donationPhone", Phone);
        // localStorage.setItem("donationEmail", email);
        // localStorage.setItem("donationAmount", amounts);

        // if (response?.data?.success == true) {
        //   console.log(response?.data?.url); // Add this line for debugging
        //   window.location.href = response?.data?.url;
        // }
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
        localStorage.setItem("donationName", name);
        localStorage.setItem("donationPhone", Phone);
        localStorage.setItem("donationEmail", email);
        localStorage.setItem("donationAmount", amounts);
        // console.log(response?.data, "response from backend for donation");
        if (response?.data?.Success === true) {
          window.location.href = response?.data?.clientSecret?.url;
        }
      })
      .catch((err) => {
        console.error(err, "response from backend for donation err");
      });
  };
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const emailText = "Ngh777@yahoo.com"; // Replace with your email address
    navigator.clipboard
      .writeText(emailText)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => {
          setEmailCopied(false);
        }, 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy email: ", error);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="mt-20 w-[70%] md:w-[30%]">
        <div className="flex justify-start">
          <NavLink
            to="/"
            className="mr-5 inline-flex items-center bg-green-600 border-0 text-white py-1 px-2 focus:outline-none shadow-md  hover:bg-green-900 rounded text-base mt-4 md:mt-0"
          >
            Back
          </NavLink>
        </div>
        <div className="flex justify-between w-full gap-1 md:gap-3 mb-3">
          <button
            className={`mt-4 px-1 md:px-4 py-2 rounded-md text-green-600 ${
              activeTab === 1
                ? "border-4 border-green-600 "
                : "border-2 border-green-600 "
            }`}
            onClick={() => handleTabClick(1)}
          >
            Donate Once
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
          <button
            className={`mt-4 px-1 md:px-4 py-2 rounded-md text-green-600 border-2 border-green-600 `}
            onClick={() => handleZelle(true)}
          >
            Donate By Zelle
          </button>
        </div>
        {byZelle == false ? (
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                id="name"
                value={name}
                onChange={handlename}
                className="font-light text-sm w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Type your phone number"
                id="phone"
                value={Phone}
                onChange={handlePhone}
                className="font-light text-sm w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                id="email"
                value={email}
                onChange={handleEmail}
                className="font-light text-sm w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              />
            </div>

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
            <div className="flex justify-between w-full gap-1 md:gap-3 mb-3">
              <div>
                {activeTab === 1 && (
                  <div>
                    {" "}
                    <button
                      onClick={submitOnce}
                      disabled={
                        amounts === null ||
                        name === null ||
                        Phone === null ||
                        email === null
                      }
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
                      disabled={
                        amounts === null ||
                        name === null ||
                        Phone === null ||
                        email === null
                      }
                      className="mt-4 mx-1 md:mx-4 px-1 md:px-4 py-2 bg-green-600 text-white rounded-md"
                      type="submit"
                    >
                      Donate Monthly
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="   items-center ">
            <div className="flex justify-end">
              <button
                onClick={handleCopyEmail}
                disabled={emailCopied}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mr-4 justify-end"
              >
                {emailCopied ? "Copied!" : <TbClipboardCopy />}
              </button>
            </div>
            <br />
            <div className="email-box text-gray-800 border-gray-300 bg--gray-300 border  p-4 rounded-lg">
              Ngh777@yahoo.com
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donation;

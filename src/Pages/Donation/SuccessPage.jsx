import axios from "axios";
import React from "react";
import { API_BASE_URL } from "../../config/endpoint";

function SuccessPage() {
  const donationName = localStorage.getItem("donationName");
  const donationAmount = localStorage.getItem("donationAmount");
  const donationEmail = localStorage.getItem("donationEmail");
  const donationPhone = localStorage.getItem("donationPhone");
  axios
    .post(`${API_BASE_URL}/payment/webhook`, {
      amount1: donationAmount,
      email: donationEmail,
      phone: donationPhone,
      name: donationName,
    })
    .then((response) => {
      console.log(response, "response from backend for register");
    })
    .catch((err) => {
      console.error(err, "response from backend for register err");
    });
  return (
    <div className="bg-black">
      <>this is sucess</>
      <div className="bg-gray-500">
        Name:{donationName}
        Amount: {donationAmount}
        Email: {donationEmail}
        Phone:{donationPhone}
      </div>
    </div>
  );
}

export default SuccessPage;

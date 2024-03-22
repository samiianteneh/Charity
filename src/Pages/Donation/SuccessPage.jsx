import axios from "axios";
import React, { useEffect } from "react";
import { API_BASE_URL } from "../../config/endpoint";

function SuccessPage() {
  const donationName = localStorage.getItem("donationName");
  const donationAmount = localStorage.getItem("donationAmount");
  const donationEmail = localStorage.getItem("donationEmail");
  const donationPhone = localStorage.getItem("donationPhone");

  useEffect(() => {
    axios
      .post(`${API_BASE_URL}/payment/webhook`, {
        amount1: donationAmount,
        email: donationEmail,
        phone: donationPhone,
        name: donationName,
      })
      .then((response) => {
        console.log(response, "response from backend for register");
        localStorage.removeItem("donationName");
        localStorage.removeItem("donationAmount");
        localStorage.removeItem("donationEmail");
        localStorage.removeItem("donationPhone");
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err, "response from backend for register err");
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="bg-black">
      <></>
    </div>
  );
}

export default SuccessPage;

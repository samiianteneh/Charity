import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/endpoint";

function SuccessPage() {
  const [user, setUser] = useState({
    donationName: "",
    donationAmount: "",
    donationPhone: "",
    donationEmail: "",
  });

  useEffect(() => {
    const donationName = localStorage.getItem("donationName");
    const donationAmount = localStorage.getItem("donationAmount");
    const donationEmail = localStorage.getItem("donationEmail");
    const donationPhone = localStorage.getItem("donationPhone");

    setUser((prevState) => ({
      ...prevState,
      donationName: donationName,
      donationAmount: donationAmount,
      donationPhone: donationPhone,
      donationEmail: donationEmail,
    }));
  }, []);

  useEffect(() => {
    if (user?.donationAmount) {
      // console.log(user);
      axios
        .post(`${API_BASE_URL}/payment/webhook`, {
          amount1: user?.donationAmount,
          email: user?.donationEmail,
          phone: user?.donationPhone,
          name: user?.donationName,
        })
        .then((response) => {
          // console.log(response, "response from backend for register");
          localStorage.removeItem("donationName");
          localStorage.removeItem("donationAmount");
          localStorage.removeItem("donationEmail");
          localStorage.removeItem("donationPhone");
          window.location.href = "/";
        })
        .catch((err) => {
          console.error(err, "response from backend for register err");
        });
    }
  }, [user]);

  return (
    <div className="">
      <></>
    </div>
  );
}

export default SuccessPage;

import { useEffect } from "react";

function ErrorPage() {
  useEffect(() => {
    localStorage.removeItem("donationName");
    localStorage.removeItem("donationAmount");
    localStorage.removeItem("donationEmail");
    localStorage.removeItem("donationPhone");
    window.location.href = "/";
  }, []);

  return (
    <div className="">
      <></>
    </div>
  );
}

export default ErrorPage;

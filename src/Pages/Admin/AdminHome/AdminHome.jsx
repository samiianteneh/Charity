import React from "react";

function AdminHome() {
  const data = [
    { label: "Category A", value: 30, color: "#F87171" },
    { label: "Category B", value: 20, color: "#60A5FA" },
    { label: "Category C", value: 50, color: "#34D399" },
    { label: "Category d", value: 30, color: "#F87171" },
    { label: "Category e", value: 20, color: "#60A5FA" },
    { label: "Category e", value: 50, color: "#34D399" },
    { label: "Category g", value: 30, color: "#F87171" },
    { label: "Category h", value: 20, color: "#60A5FA" },
    { label: "Category i", value: 50, color: "#34D399" },
  ];
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div>
      Helo admins
      <div className="w-full max-w-xs mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="fill-current text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {data.map((item, index) => {
            // Calculate percentage for each data item
            const percentage = (item.value / total) * 100;
            // Calculate the angle for each segment
            const angle = (percentage / 100) * 360;
            // Calculate position of the arc endpoint
            const x = Math.cos((angle * Math.PI) / 180) * 10;
            const y = Math.sin((angle * Math.PI) / 180) * 10;
            // Arc path
            const arc = angle <= 180 ? "0" : "1";
            const path = `M 10 10
                         L 10 0
                         A 10 10 0 ${arc} 1 ${x} ${y}
                         Z`;

            return (
              <path
                key={index}
                d={path}
                fill={item.color}
                transform={`rotate(${index * (360 / data.length)} 10 10)`}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default AdminHome;

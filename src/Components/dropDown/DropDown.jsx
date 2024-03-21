import React from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const timeoutRef = React.useRef(null);

  const clearTimeoutDelay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
    clearTimeoutDelay();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleItemMouseEnter = () => {
    clearTimeoutDelay();
  };

  const handleItemMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <button className=" text-green-600 hover:text-green-800 hover:font-semibold transition duration-300 ease-in-out transform hover:scale-105 text-md font-normal px-1">
        <span>{title}</span>
      </button>
      {isOpen && (
        <div
          onMouseEnter={handleItemMouseEnter}
          onMouseLeave={handleItemMouseLeave}
          className="absolute bg-white border rounded-lg mt-2"
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={`#${item.replace(/\s/g, "")}`}
              className="block px-4 py-2 text-green-600 hover:bg-gray-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

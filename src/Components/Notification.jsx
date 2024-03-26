/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";

import { BsPatchCheckFill } from "react-icons/bs";
import { BiErrorAlt, BiSolidError } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

function Notification({ notifications, handleNotificationClose }) {
  return (
    <div>
      <AnimatePresence>
        {notifications.map(({ id, type, title, detail, position }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className={`z-50 fixed  ${positionclasses[position]}`}
            // className={`${positionclasses[position]} cursor-pointer`}
            // onClick={() => }
          >
            <div className="flex mb-2">
              <div className="m-auto h-14 max-w-md ">
                <div
                  className={` rounded-lg bg-gray-300 border-gray-300 border p-3 shadow-lg`}
                >
                  <div className="flex flex-row">
                    <div className="px-2">
                      {type === "success" ? (
                        <BsPatchCheckFill
                          className={`${typeclasses[type]}`}
                          size={24}
                        />
                      ) : type === "error" ? (
                        <BiErrorAlt
                          className={`${typeclasses[type]}`}
                          color=""
                          size={24}
                        />
                      ) : type === "info" ? (
                        <AiOutlineInfoCircle
                          className={`${typeclasses[type]}`}
                          size={24}
                        />
                      ) : type === "warning" ? (
                        <BiSolidError
                          className={`${typeclasses[type]}`}
                          size={24}
                        />
                      ) : (
                        "-"
                      )}
                    </div>
                    <div className="ml-2 mr-6 max-w-full w-full min-h-[32px] grid grid-cols-1">
                      <span className="font-semibold col-span-1 break-words">
                        {title}
                      </span>
                      <span className="block text-gray-400 col-span-1 break-words">
                        {detail}
                      </span>
                    </div>

                    <div>
                      <GrClose
                        size={10}
                        className="cursor-pointer"
                        onClick={() => {
                          handleNotificationClose(id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

const typeclasses = {
  success: "text-green-500",
  error: "text-red-500",
  info: "text-blue-500",
  warning: "text-yellow-500",
};

const positionclasses = {
  "top-right": "top-5 right-5",
  "top-left": "top-5 left-5",
  "bottom-right": "bottom-5 right-5",
  "bottom-left": "bottom-5 left-5",
};
export default Notification;

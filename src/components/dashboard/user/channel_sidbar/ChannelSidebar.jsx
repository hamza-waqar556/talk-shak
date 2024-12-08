import React from "react";
import { IoMdClose } from "react-icons/io";

const ChannelSidebar = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`w-[250px] md:w-[300px] 2xl:w-[400px] py-3 px-4 fixed top-0  h-full bg-main-bg-color text-white shadow-lg transition-all duration-600 ${
        isOpen ? "translate-x-0 right-[60px] md:right-[80px] 2xl:right-[100px]" : "translate-x-full right-0"
      }`}
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <div className="w-full mb-5">
        <button
          onClick={onClose}
          className="text-white text-3xl border border-secondary-color transition-all hover:bg-secondary-color p-1 rounded">
          <IoMdClose />
        </button>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default ChannelSidebar;

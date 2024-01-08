/* eslint-disable react/prop-types */
import React from "react";
import { IoMdCard } from "react-icons/io";
import { BsPhoneFlip } from "react-icons/bs";
import { IoLogoUsd } from "react-icons/io5";

const paymentOptions = [
  {
    id: 1,
    icon: <IoMdCard id='1' />,
    text: "Credit card",
  },
  {
    id: 2,
    icon: <BsPhoneFlip id='2' />,
    text: "Bank Transfer",
  },
  {
    id: 3,
    icon: <IoLogoUsd id='3' />,
    text: "PayPal",
  },
];

const SideBar = ({ toggleDisplay }) => {
  const [currentOption, setCurrentOption] = React.useState(1);

  const handleClick = (id) => {
    setCurrentOption(id);
    toggleDisplay(id);
  };

  return (
    <ul className='w-[85%] sm:w-[15%] py-10 mx-auto sm:m-0  flex sm:flex-col justify-center  cursor-pointer'>
      {paymentOptions.map((item) => (
        <li key={item.id} id={item.id} className='w-full'>
          <button
            type='button'
            className={`button flex flex-col items-center justify-center p-2 gap-2 sm:py-8 ${
              item.id === 1 ? "sm:rounded-tr-[34px]" : ""
            } ${
              item.id === currentOption
                ? "bg-[#007300] text-white"
                : "bg-white text-[#007300]"
            }
        border-b-2 border-[#007300]-600 w-full`}
            onClick={() => handleClick(item.id)}
          >
            <div
              id={item.id}
              className={`border border-[#007300] rounded-full p-2 flex justify-center items-center w-[2rem] h-[2rem] ${
                item.id === currentOption
                  ? "bg-white text-[#007300]"
                  : "bg-[#007300] text-white"
              }`}
            >
              {item.icon}
            </div>
            <p id={item.id} className='text-[0.7rem]'>
              {item.text}
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;

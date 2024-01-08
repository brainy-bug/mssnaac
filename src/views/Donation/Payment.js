import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import SideBar from "./SideBar";
import Background from "./Background";
import CreditCard from "./Displays/CreditCard";
import BankTransfer from "./Displays/BankTransfer";
import PayPal from "./Displays/PayPal";

function Payment() {
  const navigate = useNavigate();
  const [display, setDisplay] = React.useState(1);

  const toggleDisplay = (id) => setDisplay(id);

  const amountToPay = JSON.parse(localStorage.getItem("amount"));

  return (
    <section className='bg-[#E6F4E6] flex'>
      <section className='h-screen w-[85%] order-2 sm:order-1'>
        <div
          className='items-center flex w-fit h-fit p-8 pb-2 font-semibold text-[#007300] cursor-pointer'
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className='mr-4' />
          <p>Payment Details </p>
        </div>
        <div className='flex flex-col items-center sm:h-auto sm:flex-row'>
          <SideBar toggleDisplay={toggleDisplay} />
          <div className='w-full sm:w-[60%] mx-auto'>
            {display === 1 ? (
              <CreditCard amountToPay={amountToPay} />
            ) : display === 2 ? (
              <BankTransfer />
            ) : (
              <PayPal />
            )}
          </div>
        </div>
      </section>
      <div className='w-[15%] order-1 sm:order-2'>
        <Background />
      </div>
    </section>
  );
}

export default Payment;

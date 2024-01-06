import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import Payment from "./Payment";

function Detail() {
  const navigate = useNavigate();
  return (
    <div className='h-screen bg-[#E6F4E6] '>
      <div
        className='items-center md:hidden flex w-fit p-8 font-semibold text-[#007300]'
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className='mr-4' />
        <p>Payment Details </p>
      </div>
      <Payment />
    </div>
  );
}

export default Detail;

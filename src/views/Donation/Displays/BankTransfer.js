import React from "react";
import { FaCopy } from "react-icons/fa6";

const BankTransfer = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className='w-[85%] text-base mx-auto'>
      <p className='text-base text-center mb-6'>
        Kindly enter the details below in your bank app to pay
      </p>
      <div className='flex flex-col sm:flex-row justify-between'>
        <div className='my-4'>
          <p>Amount</p>
          <p className='text-[#007300] font-semibold text-2xl flex gap-2 cursor-pointer'>
            NGN <span onClick={handleCopy}>100,000</span>
            {!copied ? <FaCopy /> : "Copied"}
          </p>
        </div>
        <div className='my-4 sm:text-right'>
          <p>Account Number</p>
          <p
            className='text-[#007300] font-semibold text-2xl flex gap-2 cursor-pointer'
            onClick={handleCopy}
          >
            3130998097 {!copied ? <FaCopy /> : "Copied"}
          </p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between'>
        <div className='my-4'>
          <p>Bank name</p>
          <p className='font-semibold text-2xl'>FIRST BANK OF NIGERIA</p>
        </div>
        <div className='my-4 sm:text-right'>
          <p>Beneficiary</p>
          <p className='text-[#007300] font-semibold text-2xl'>MSSN AAC</p>
        </div>
      </div>
      <button className='btn-green mt-6' style={{ width: "100%" }}>
        Transfer done
      </button>
    </section>
  );
};

export default BankTransfer;

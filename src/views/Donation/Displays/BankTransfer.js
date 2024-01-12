/* eslint-disable react/prop-types */
import React from "react";
import "../styles/bank-transfer.css";
import { GoCopy } from "react-icons/go";

const BankTransfer = ({ amountToPay }) => {
  const [isTextCopied, setIsTextCopied] = React.useState(false);

  const handleCopy = (e) => {
    console.log(e.target);

    if (e.target.name === "amountToPay") {
      navigator.clipboard.writeText(amountToPay);
      setIsTextCopied(true);
    } else if (e.target.name === "accountNumber") {
      navigator.clipboard.writeText("3130998097");
      setIsTextCopied(true);
    }
    setTimeout(() => {
      setIsTextCopied(false);
    }, 2000);
  };

  return (
    <section className='w-[85%] text-base mx-auto'>
      <p className='text-base text-center mb-10'>
        Kindly enter the details below in your bank app to pay
      </p>
      <div className='transfer-details'>
        <div>
          <label>Amount</label>
          <p
            className='flex items-baseline'
            onClick={handleCopy}
            name='amountToPay'
          >
            NGN {amountToPay}
            <span
              className={`ml-2 italic ${isTextCopied ? "text-[0.75rem]" : ""}`}
            >
              {isTextCopied ? "copied" : <GoCopy />}
            </span>
          </p>
        </div>
        <div className='sm:text-right'>
          <label>Account Number</label>
          <p
            className='flex items-baseline'
            onClick={handleCopy}
            name='accountNumber'
          >
            3130998097
            <span
              className={`ml-2 italic ${isTextCopied ? "text-[0.75rem]" : ""}`}
            >
              {isTextCopied ? "copied" : <GoCopy />}
            </span>
          </p>
        </div>
      </div>
      <div className='transfer-details'>
        <div>
          <label>Bank name</label>
          <p>FIRST BANK OF NIGERIA</p>
        </div>
        <div className='text-left sm:text-right'>
          <label>Beneficiary</label>
          <p>MSSN AAC</p>
        </div>
      </div>
      <button className='btn-green mt-4' style={{ width: "100%" }}>
        I&apos;ve made the transfer
      </button>
    </section>
  );
};

export default BankTransfer;

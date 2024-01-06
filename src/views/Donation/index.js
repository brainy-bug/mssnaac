import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const data = [
  {
    id: 1,
    amount: 5000,
  },
  {
    id: 2,
    amount: 15000,
  },
  {
    id: 3,
    amount: 50000,
  },
];

const minAmount = 200;

function Donate() {
  const existingData = () => {
    let existingData = JSON.parse(localStorage.getItem("amount"));
    if (existingData === null) existingData = [];
    return existingData;
  };

  const [amount, setAmount] = useState(existingData());
  const [isAmountError, setIsAmountError] = useState(false);
  const navigate = useNavigate();

  const setInput = (e) => {
    setAmount(e.target.innerText.slice(1));
  };

  useEffect(() => {
    if (amount < minAmount) setIsAmountError(true);
    else setIsAmountError(false);
  }, [amount]);

  localStorage.setItem("amount", JSON.stringify(amount));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      setIsAmountError(true);
      return;
    }
    navigate("/donate/details");
  };

  return (
    <>
      <div className='flex h-[95vh] justify-between'>
        <div
          className='w-[20%] md:w-1/2 flex-shrink-0 bg-repeat sm:bg-no-repeat bg-left'
          style={{
            backgroundImage: `url('/svgs/multiple.svg')`,
            backgroundSize: "450px",
          }}
        ></div>
        <div className='bg-[#E6F4E6]  px-[30px]  flex flex-col  justify-center gap-5 w-[80%] xl:w-[60%]'>
          <div
            className='items-center md:hidden flex w-fit font-semibold text-[#007300]'
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className='mr-4' />
            <p>Go back </p>
          </div>
          <div>
            <h2 className=' font-semibold text-[35px] py-2 '>Donate today</h2>
            <p className='text-base'>
              Charity <strong>(Sadaqah)</strong> extinguishes sin, just as water
              extinguishes fire
            </p>
          </div>
          <div>
            <p className=' text-base py-2'>Select or Enter an amount below</p>
            <div className='flex gap-2'>
              {data.map((item) => (
                <button
                  key={item.id}
                  className={`text-base ${
                    +amount === item.amount
                      ? "bg-[#007300] text-white"
                      : "bg-white "
                  } px-4 py-3 hover:bg-[#007300] hover:text-white cursor-pointer`}
                  onClick={setInput}
                >
                  N{item.amount}
                </button>
              ))}
            </div>
            <form
              className='flex flex-col flex-start sm:w-[70%]'
              onSubmit={handleSubmit}
            >
              <input
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`py-3 my-6 block w-full px-3 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ${
                  isAmountError
                    ? "invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 "
                    : ""
                }`}
                placeholder='Enter an amount here'
                min={`${minAmount}`}
              />
              {amount && isAmountError ? (
                <p className={`text-sm text-red-600 mb-6 text-bold `}>
                  Please conduct transfers ranging from N{minAmount}
                </p>
              ) : null}

              <button
                className={`btn-green w-full ${
                  amount < 100 || amount > 1000000
                    ? "cursor-not-allowed disable opacity-65"
                    : ""
                }`}
                style={{ width: "100%" }}
                to='/donate/details'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;

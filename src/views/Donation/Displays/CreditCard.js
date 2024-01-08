/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Card from "react-credit-cards-2";
import "../styles/credit-card.css";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  // formatFormData,
} from "../../../utils/utils";

const CreditCard = ({ amountToPay }) => {
  const [state, setState] = useState({
    creditCard: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });
  const { name, creditCard, expiry, cvc, focused, issuer } = state;

  const handleInputFocus = ({ target }) => {
    setState((prev) => ({ ...prev, focused: target.name }));
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "creditCard") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    setState((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div key='Payment'>
      <div className='credit-card-display'>
        <Card
          number={creditCard}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
        />
      </div>
      <form onSubmit={handleSubmit} className='credit-card-form'>
        <div className='grid sm:grid-cols-2' style={{ rowGap: "2rem" }}>
          <div className='form-control'>
            <label htmlFor='name'>Name on card</label>
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Your name here'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='creditCard'>Card number</label>
            <input
              type='tel'
              id='creditCard'
              name='creditCard'
              placeholder='**** **** **** ****'
              pattern='[\d| ]{16,22}'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <div className='form-control'>
            <label htmlFor='expiry'>Valid thru</label>
            <input
              id='expiry'
              type='tel'
              name='expiry'
              placeholder='mm/yy'
              pattern='\d\d/\d\d'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='cvc'>CVC</label>
            <input
              id='cvc'
              type='tel'
              name='cvc'
              placeholder='***'
              pattern='\d{3,4}'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
        <input type='hidden' name='issuer' value={issuer} />
        <button className='btn-green'>Pay {amountToPay}</button>
      </form>
    </div>
  );
};

export default CreditCard;

import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, text, text2, text3 }) => (
  <div>
    <h2 className='text-[35px] font-bold pb-4 '>{title}</h2>
    <div>
      <p className='text-base lg:text-[18px] font-medium pb-4 leading-[35px]'>
        {text}
      </p>
      <p className='text-base lg:text-[18px] font-medium pb-4 leading-[35px]'>
        {text2}
      </p>
      <p className='text-base lg:text-[18px] font-medium leading-[35px]'>
        {text3}
      </p>
    </div>
  </div>
);

// props validation and typechecking
Title.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
};

export default Title;

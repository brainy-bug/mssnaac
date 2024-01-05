import React from "react";

import Title from "./Title";
import Pagination from "../../components/Pagination";
import YearDropdown from "./YearDropdown";

import SlideIn from "../../animations/SlideIn";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <section>
      <div className='text-xs md:text-lg bg-[#f6faf6]'>
        <div
          className='w-full p-12 flex-shrink-0 bg-no-repeat bg-right'
          style={{ backgroundImage: `url('/imgs/vector-2.png')` }}
        >
          <div className='text-justify sm:text-left sm:w-[85%] '>
            <SlideIn from='left'>
              <Title
                title='MSSN Vision'
                text='“To establish an Islamic Ummah governed by the principles and rules of the Shariah within the next fifty years”'
              />
            </SlideIn>
            <SlideIn from='right' classNames='my-4'>
              <Title
                title='MSSN Mission'
                text='“The MSSN will work relentlessly towards the establishment of a society that fosters all-round human development.'
                text2='To achieve this, MSSN will continuously strive towards strengthening the Ummah educationally, economically, spiritually and politically through a wide spectrum of activities in schools and the larger society in partnership with like-minded organizations.'
                text3='To succeed, MSSN must ensure that its members are God fearing, knowledgeable, united and with superior moral values”'
              />
            </SlideIn>
          </div>
        </div>
      </div>

      <div className=' flex gap-[2rem] justify-between items-center p-12'>
        <SlideIn
          from='left'
          classNames='text-justify sm:text-left max-w-[480px]'
        >
          <Title
            title='Our Activities'
            text='As a Muslim Student Society, our primary assignment is to coordinate secondary schools in Akinyele Local Government.'
            text2='We provide educational support, organize events, and engage in community service to help spread the message of Islam while creating a positive impact in our community.'
          />
        </SlideIn>
        <SlideIn from='right' classNames='hidden sm:block px-28 mx-auto '>
          <img src='/imgs/activities.png' alt='activities-icon' />
        </SlideIn>
      </div>

      <div className='bg-[#f4faf4] pt-8' name='paginate-heading'>
        <SlideIn from='top' classNames='flex items-center justify-center  pb-[50px]'>
          <h2 className='font-bold text-[25px] sm:text-[35px] text-center'>
            <span>MSSNAAC Executive Committee</span>
            <YearDropdown />
          </h2>
        </SlideIn>

        <div className=' p-4 sm:px-16'>
          <Pagination itemsPerPage={8} />
        </div>
      </div>

      <div
        className='w-full px-[2rem] flex items-center h-[35rem] flex-shrink-0 bg-no-repeat bg-right bg-opacity-10'
        style={{
          backgroundImage: `url('/imgs/vector-3.png')`,
          backgroundSize: "350px",
        }}
      >
        <div className='sm:max-w-[60%]'>
          <SlideIn from='left'>
            <Title
              title='Become a Member'
              text='Our society provides a supportive community for Muslim students, where we can connect and explore our faith. Members have access to exclusive features on the website.'
              text2='Membership is open to any Muslim who shares our aims and is a bona-fide member of a branch.'
            />
          </SlideIn>
          <SlideIn from='bottom'>
            <NavLink
              to='/registration'
              className='px-20 py-3 text-2xl font-bold bg-[#007300] text-white rounded hover:opacity-80  font'
            >
              JOIN US
            </NavLink>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

export default About;

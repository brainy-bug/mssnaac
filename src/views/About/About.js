import React from "react";
import { NavLink } from "react-router-dom";

import Title from "./Title";
import Pagination from "../../components/Pagination";
import YearDropdown from "./YearDropdown";

import SlideIn from "../../animations/SlideIn";

function About() {
  return (
    <section>
      <div className='text-xs md:text-sm bg-[#f6faf6]'>
        <div
          className='w-full px-8 py-10 sm:p-12 flex-shrink-0 bg-no-repeat bg-right'
          style={{
            backgroundImage: `url('/imgs/vector-2.png')`,
            backgroundSize: "220px",
          }}
        >
          <div className='sm:w-[85%] '>
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

      <div className=' flex gap-[2rem] justify-between items-center px-8 py-12 sm:p-12'>
        <SlideIn from='left' classNames=' max-w-[480px]'>
          <Title
            title='Our Activities'
            text='As a Muslim Student Society, our primary assignment is to coordinate secondary schools in Akinyele Local Government.'
            text2='We provide educational support, organize events, and engage in community service to help spread the message of Islam while creating a positive impact in our community.'
          />
          <NavLink to='/photo-gallery' className='btn-green my-4'>
            View activities
          </NavLink>
        </SlideIn>
        <SlideIn from='right' classNames='hidden sm:block px-28 mx-auto '>
          <img src='/imgs/activities.png' alt='activities-icon' />
        </SlideIn>
      </div>

      <div className='bg-[#f4faf4] pt-8' name='paginate-heading'>
        <SlideIn
          from='top'
          classNames='flex items-center justify-center  pb-[50px]'
        >
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
          backgroundSize: "300px",
        }}
      >
        <div className='sm:max-w-[60%] h-[80%] flex flex-col justify-evenly'>
          <SlideIn from='left'>
            <Title
              title='Become a Member'
              text='Our society provides a supportive community for Muslim students, where we can connect and explore our faith. Members have access to exclusive features on the website.'
              text2='Membership is open to any Muslim who shares our aims and is a bona-fide member of a branch.'
            />
          </SlideIn>
          <SlideIn from='bottom'>
            <NavLink to='/registration' className='btn-green'>
              JOIN US
            </NavLink>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import Writer from "../../../animations/Writer";
import SlideIn from "../../../animations/SlideIn";
import styles from "../styles/Showcase.module.css";

function Showcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section className={`${styles.sectionOne} `}>
        <header>
          <SlideIn
            from='top'
            classNames='flex justify-center items-center flex-col'
          >
            <h1
              className={`${styles.h1} text-3xl lg:text-5xl md:text-4xl lg:leading-normal`}
            >
              Building{" "}
              <Writer
                texts={["stronger", "resilient", "empowered"]}
                wrapperClassName={styles.highlight}
              />{" "}
              communities
              <br />
              of Muslim students
            </h1>
          </SlideIn>
          <SlideIn from='left ' classNames='px-4 mx-auto'>
            <p className=' text-sm lg:text-lg  '>
              Discover a network of Muslim students dedicated to{" "}
              <br className='hidden lg:inline' />
              building a better future for the Ummah.
            </p>
            <Link to='/registration'>
              <button
                type='button'
                className='btn-green rounded-md my-8 mx-auto'
              >
                Join us
              </button>
            </Link>
          </SlideIn>
          <SlideIn from='top'>
            <div className=' text-white w-full grid grid-cols-3 '>
              <div className={styles.showcaseItem}>
                <img
                  src='/imgs/Rectangle.png'
                  alt='show_img'
                  className={styles.grey}
                  loading='lazy'
                />
                <div className={styles.counter}>
                  <h2 ref={ref}>
                    <CountUp end={inView ? 10 : 0} duration={6} />+
                  </h2>
                  <p>
                    <span>Active</span>
                    <span>Societies</span>
                  </p>
                </div>
              </div>
              <div className={styles.showcaseItem}>
                <div>
                  <img
                    src='/imgs/Rectangle2.jpg'
                    alt='show_img'
                    loading='lazy'
                  />
                </div>
                <div className={styles.counter}>
                  <h2>
                    <CountUp end={inView ? 100 : 0} duration={6} />+
                  </h2>
                  <p>
                    <span>Vibrant</span>
                    <span>Members</span>
                  </p>
                </div>
              </div>
              <div className={styles.showcaseItem}>
                <img
                  src='/imgs/Rectangle3.png'
                  alt='show_img'
                  className={styles.grey}
                  loading='lazy'
                />
                <div className={styles.counter}>
                  <h2>
                    <CountUp end={inView ? 500 : 0} duration={6} />+
                  </h2>
                  <p>
                    <span>Tutored</span>
                    <span>Students</span>
                  </p>
                </div>
              </div>
            </div>
          </SlideIn>
        </header>
      </section>
    </>
  );
}

export default Showcase;

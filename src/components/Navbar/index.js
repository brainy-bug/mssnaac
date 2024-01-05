import React from "react";

import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import SlideIn from "../../animations/SlideIn";

import { routes } from "../../routes";
import styles from "./Navbar.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <SlideIn from='top'>
      <Disclosure
        as='nav'
        className='flex relative justify-evenly items-start  md:flex-row flex-col'
      >
        {({ open }) => (
          <>
            <div className='absolute top-3 right-3 flex items-center md:hidden'>
              {/* Mobile menu button*/}
              <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-green'>
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open main menu</span>
                {open ? (
                  <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                ) : (
                  <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                )}
              </Disclosure.Button>
            </div>

            <div className='align-center'>
              <Link to='/'>
                <img
                  src='/imgs/AAC_logo.png'
                  alt='Logo'
                  className='w-auto h-10 '
                />
              </Link>
            </div>

            <ul className='hidden items-center justify-evenly md:flex'>
              <li>
                {routes.map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    activeClassName={styles.active}
                    className={classNames(
                      route.path === "/" ? styles.home : "",
                      "px-2 py-2 mx-2 text-sm font-medium hover:text-green-700"
                    )}
                  >
                    {route.text}
                  </NavLink>
                ))}
              </li>
            </ul>

            <div className='hidden items-center md:flex'>
              <img
                src='/imgs/Vector.png'
                alt='Language'
                className='h-5 w-auto mx-10'
              />

              <NavLink
                id={styles.btn}
                className={({ isActive }) => (isActive ? "active" : null)}
                to='/registration'
              >
                Login
              </NavLink>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Disclosure.Panel className='md:hidden w-full h-auto'>
                <div className='space-y-2 pb-3 pt-2 '>
                  {routes.map((route) => (
                    <Disclosure.Button
                      key={route.path}
                      as={NavLink}
                      to={route.path}
                      className={
                        "block px-2 py-2 mx-2 rounded-md text-sm font-medium hover:bg-green-700 hover:text-white"
                      }
                    >
                      {route.text}
                    </Disclosure.Button>
                  ))}
                  <NavLink id={styles.btn} to='/registration'>
                    Login
                  </NavLink>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </SlideIn>
  );
}
export default Navbar;



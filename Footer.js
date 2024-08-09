import React from 'react'
import logo from "../Images/logo.jpeg";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa";
import facebook from "../Images/facebook.png";
import tiktok from "../Images/tiktok.png"

function Footer() {
  return (
    <>
      <footer className="flex items-center justify-center w-full pt-10 lg:pt-24 ">
        <div className="bg-black pb-10 lg:py-12 w-full px-10">
          <div className="flex flex-col justify-center items-center space-y-10 md:space-y-0 md:flex-row">
            <div className="div1 w-full md:w-1/5 hidden lg:block">
              <div className="relative flex items-center justify-center">
                <div className="flex items-center justify-center shadow-2xl  absolute -top-3 lg:-top-20 md:-top-24 h-12">
                  <img className="w-44 sm:w-52 lg:w-60  rounded-xl" src={logo} alt="" />
                </div>
              </div>
            </div>
            <div className="div2 w-4/5 flex flex-col space-y-10 md:space-y-0 md:flex-row justify-around">
              <div className="flex flex-col md:items-start">
                <h5 className="uppercase text-center sm:text-left text-[#f7b242] font-bold">
                  About
                </h5>
                <ul className="list-none flex flex-col text-sm items-start space-y-1 pt-2">
                  <Link to='/'>
                    <a className="hover:text-white text-gray-400">Home</a>
                  </Link>
                  <Link to='/ProductPage'>
                    <a className="text-gray-400 hover:text-white">Products</a>
                  </Link>
                  <Link to="/aboutus">
                    <a className="text-gray-400 hover:text-white">About Us</a>
                  </Link>
                </ul>
              </div>
              <div className="flex flex-col md:items-start">
                <h5 className="uppercase text-center sm:text-left font-bold text-[#f7b242]">
                  Contact Info
                </h5>
                <ul className="list-none text-sm flex flex-col md:items-start space-y-3 pt-2">
                  <li className=''>
                    <a href="#!" className="text-gray-300 flex gap-x-2">
                      <MdOutlineMailOutline className='text-yellow-400 border border-yellow-400 rounded-full text-2xl p-1' />
                      mrbookspeshawar@gmail.com</a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-300 flex gap-x-2">
                      <MdLocalPhone className='text-yellow-400 border border-yellow-400 rounded-full text-2xl ' />
                      03339114273
                    </a>
                    <a href="#!" className="text-gray-300 flex gap-x-2 pt-2">
                    <MdLocalPhone className='text-yellow-400 border border-yellow-400 rounded-full text-2xl ' />
                      03139994402
                    </a>
                    <a href="#!" className="text-gray-300 flex gap-x-2 pl-8">
                      091-5702655
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-300 flex gap-x-2">
                      <GoClockFill className='text-yellow-400 border border-yellow-400 rounded-full text-2xl p-1' />
                      Working Hours:
                      10 am - 8 pm</a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col md:items-start">
                <h5 className="uppercase text-center sm:text-left font-bold text-[#f7b242]">
                  Address
                </h5>
                <p className='text-gray-300 pt-3'>Opposite Islamian Collage,
                  Arbab Shakeel plaza, <br />
                  Ground Floor Shop # 10, <br />
                  University Road Peshawar.
                </p>

              </div>

              <div className="flex flex-col md:items-start">
                <h5 className="uppercase text-center sm:text-left font-bold text-[#f7b242]">
                  Social Links
                </h5>
                <ul className="list-none text-sm flex flex-col items-start space-y-3 pt-2">
                  <li>
                    <a href="https://www.instagram.com/mrbookpeshawar?igsh=MXFqYm5oZWV0dDAyOA==" className="text-white flex gap-x-2">
                      <FaInstagram className='text-white text-xl' />
                      Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100084938941749&mibextid=2JQ9oc" className="text-white flex gap-x-3">
                      <img src={facebook} className='text-black bg-white rounded-full text-xl' />
                      Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@mr.bookspeshawar?_t=8j3SXgHLue9&_r=1" className="text-white flex gap-x-3">
                      <img src={tiktok} className='text-black bg-white rounded-full text-xl' />
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
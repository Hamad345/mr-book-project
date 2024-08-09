import React, { useEffect, useState } from 'react'
import Menu from '../component/menu/Menu'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
// import Slider from './Slider';
// import aboutImg from "../Images/aboutus.png"
import ReviewSlider from './ReviewSlider';
import BackgroundVideo from './BackgroundVideo'
// import { Container } from '@mui/material';
import { baseurl } from './BaseURL/BaseURL';

import { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import slider1 from '../Images/slider1 (1).png';
// import slider2 from '../Images/slider1 (2).png';
// import slider3 from '../Images/slider1 (3).png';
// import slider4 from '../Images/slider1 (4).png';
import review from '../Images/Group 30.png';
import saleimg from "../Images/sale.png"
import favourite from "../Images/Vector.png"

import axios from 'axios';

function Home() {
  const saleSliderRef = useRef(null);
  const eventslider = useRef(null);
  const newArrivalSliderRef = useRef(null);
  const bestSellerSliderRef = useRef(null);
  const navigate = useNavigate();
  const [saleCard, setSaleCard] = useState([]);
  const [eventcard, seteventcard] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  // const [BestSeller, setBestSeller] = useState([]);
  const [aboutusdetail, setaboutusdetail] = useState();

  const BaseURl = baseurl;

  // ==== sale product APi call=====
  const saleproduct = async () => {
    try {
      const response = await axios.get(`${BaseURl}/api/getSaleCard-Novalcategry`);
      console.log("here is the data coming from api", response.data.data)
      setSaleCard(response.data.data)
    } catch (error) {
      console.error("here is the eror SLAE PRODUCT", error)
    }
  };


  // ==== event card APi call=====
  const eventsoffer = async () => {
    try {
      const response = await axios.get(`${BaseURl}/api/geteventcard`);
      // console.log("here is the data coming from api", response.data.data)
      seteventcard(response?.data?.data)
    } catch (error) {
      console.error("here is the eror SLAE PRODUCT", error)
    }
  };

  // ==== new arrival APi call=====
  const newarrival = async () => {
    try {
      const response = await axios.get(`${BaseURl}/api/GetNewArrival`);
      // console.log("here is the newarrival", response.data.data)
      setNewArrival(response.data.data)
    } catch (error) {
      console.error("here is the eror OF NEW ARRIVAL", error)
    }
  };


  // ==== new bestSeller APi call=====
  // const bestSeller = async () => {
  //   try {
  //     const response = await axios.get(`${BaseURl}/api/getBestSeller`);
  //     // console.log("here is the newarrival", response.data.data)
  //     setBestSeller(response.data.data)
  //   } catch (error) {
  //     console.error("here is the erorR OF BESTSELLER", error)
  //   }
  // };

  // ====== about us =======
  const aboutusData = async () => {
    try {
      const response = await axios.get(`${BaseURl}/aboutUs`);
      // console.log("here is the aboutdetail", response.data.data)
      setaboutusdetail(response.data.data[0])
    } catch (error) {
      console.error("here is the error OF ABOUT US", error)
    }
  }


  useEffect(() => {
    aboutusData();
    saleproduct();
    eventsoffer();
    newarrival();
    // bestSeller();
  }, []);

  const aboutus = () => {
    navigate('/aboutus')
  }

  // console.log("here is the data", newArrival)

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const handleNext = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const gotoCard = (id) => {
    navigate(`/buyTittle/${id}`)
  }

  const eventCard = (id) => {
    navigate(`/events/${id}`)
  }

  const ArrivalTittle = (id) => {
    navigate(`/arrival/${id}`)
  }

  return (
    <>

      <Menu />
      <BackgroundVideo />

      <div className='mt-4 '>

        {/*====== slider for event cardd =======*/}
        <div className='w-full  lg:px-10 m-auto my-8 '>
          <div className='flex justify-between px-5  md:px-6 lg:px-7 mb-6 '>
            <div className=''>
              <h1 className='font-bold lg:text-2xl md:text-xl'>{eventcard[0]?.Name}</h1>
            </div>
            <div className='flex justify-end gap-x-5 bg-gray-500-300'>
              <FaArrowLeftLong
                className='text-2xl p-1  hover:text-white hover:rounded-full hover:bg-yellow-500  cursor-pointer'
                onClick={() => handlePrev(eventslider)}
              />
              <FaArrowRightLong
                className='text-2xl p-1 hover:text-white hover:rounded-full hover:bg-yellow-500  cursor-pointer'
                onClick={() => handleNext(eventslider)}
              />
            </div>
          </div>
          <Slider {...settings} ref={eventslider}>
            {eventcard && eventcard.map((item, index) => (
              <div key={index}>
                <div className='relative pt-3 cursor-pointer' >
                  <img src={item.url} className='w-[300px] h-[200px] md:w-[330px] md:h-[350px] rounded-xl' alt='' onClick={() => eventCard(item?._id)} />
                  {/* <div className='absolute -top-0 right-0'>
                    <img src={saleimg} alt="" />
                  </div>

                  <div className='absolute top-9  left-3'>
                    <img src={favourite} className='' alt="" />
                  </div> */}
                </div>

                <div className='flex flex-col justify-center items-center py-2'>
                  <h1 className='font-semibold  text-xs sm:text-xs md:text-md lg:text-xl '>{item.title}</h1>
                  <img src={review} alt='' className='pt-2 w-[70%] lg:w-[50%]' />
                  <div className='flex gap-x-3'>
                    <h1 className='text-xs lg:text-lg text-gray-500  line-through'>Rs{item.price}</h1>
                    <h1 className='text-xs lg:text-lg font-semibold'>Rs-{item.salePrice}</h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>


        {/*====== slider for sale cards =======*/}
        <div className='w-full  lg:px-10 m-auto my-8 '>
          <div className='flex justify-between px-5  md:px-6 lg:px-7 mb-6 '>
            <div className=''>
              <h1 className='font-bold lg:text-2xl md:text-xl'>Sale Products</h1>
            </div>
            <div className='flex justify-end gap-x-5 bg-gray-500-300'>
              <FaArrowLeftLong
                className='text-2xl p-1  hover:text-white hover:rounded-full hover:bg-yellow-500  cursor-pointer'
                onClick={() => handlePrev(saleSliderRef)}
              />
              <FaArrowRightLong
                className='text-2xl p-1 hover:text-white hover:rounded-full hover:bg-yellow-500  cursor-pointer'
                onClick={() => handleNext(saleSliderRef)}
              />
            </div>
          </div>
          <Slider {...settings} ref={saleSliderRef}>
            {saleCard && saleCard.map((item, index) => (
              <div key={index}>
                <div className='relative pt-3 cursor-pointer' >
                  <img src={item.url} className='w-[300px] h-[200px] md:w-[330px] md:h-[350px] rounded-xl' alt='' onClick={() => gotoCard(item._id)} />
                  <div className='absolute -top-0 right-0'>
                    <img src={saleimg} alt="" />
                  </div>

                  <div className='absolute top-9  left-3'>
                    <img src={favourite} className='' alt="" />
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center py-2'>
                  <h1 className='font-semibold  text-xs sm:text-xs md:text-md lg:text-xl '>{item.title}</h1>
                  <img src={review} alt='' className='pt-2 w-[70%] lg:w-[50%]' />
                  <div className='flex gap-x-3'>
                    <h1 className='text-xs lg:text-lg text-gray-500  line-through'>Rs{item.price}</h1>
                    <h1 className='text-xs lg:text-lg font-semibold'>Rs-{item.salePrice}</h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>


        {/*====== slider for newArrival =======*/}
        <div className='w-full  lg:px-10 m-auto my-8 '>
          <div className='flex justify-between px-5  md:px-6 lg:px-7 mb-6 '>
            <div className=''>
              <h1 className='font-bold lg:text-2xl md:text-xl'>New Arrival</h1>
            </div>
            <div className='flex justify-end gap-x-5 bg-gray-500-300'>
              <FaArrowLeftLong
                className='text-2xl p-1  hover:text-white hover:rounded-full hover:bg-yellow-500  cursor-pointer'
                onClick={() => handlePrev(newArrivalSliderRef)}
              />
              <FaArrowRightLong
                className='text-2xl p-1 hover:text-white hover:rounded-full hover:bg-yellow-500  cursor-pointer'
                onClick={() => handleNext(newArrivalSliderRef)}
              />
            </div>
          </div>
          <Slider {...settings} ref={newArrivalSliderRef}>
            {newArrival && newArrival.map((item, index) => (
              <div key={index}>
                <div className='relative pt-3 cursor-pointer' >
                  <img src={item.url} className='w-[300px] h-[200px] md:w-[330px] md:h-[350px] rounded-xl' alt='' onClick={() => ArrivalTittle(item._id)} />

                  <div className='absolute top-9  left-3'>
                    <img src={favourite} className='' alt="" />
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center py-2'>
                  <h1 className='font-semibold  text-xs sm:text-xs md:text-md lg:text-xl '>{item.title}</h1>
                  <img src={review} alt='' className='pt-2 w-[70%] lg:w-[50%]' />
                  <div className='flex gap-x-3'>
                    <h1 className='text-xs lg:text-lg font-semibold'>Rs-{item.price}</h1>
                    {/* <h1 className='text-xs lg:text-lg font-semibold'>{item.salePrice}</h1> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* about us section started */}
      <div className='w-full px-2 lg:px-16 py-4 flex gap-x-6 flex-wrap lg:flex-nowrap lg:items-center'>
        {/* left side  */}
        <div className=' lg:w-1/2 w-full'>
          {aboutusdetail && <img src={aboutusdetail.url} alt='' className='w-full lg:w-[75%] lg:h-[40%] h-96 lg items-center flex justify-center' />}
        </div>
        {/* right side */}
        <div className='lg:w-1/2 '>
          <div className='lg:my-24 lg:w-[90%]'>
            <h1 className='hidden md:block text-[#f4b230] pt-10 font-bold '>ABOUT US</h1>
            {aboutusdetail && <h1 className='pt-4 text-justify font-semibold text-xs lg:text-2xl'>{aboutusdetail.title}</h1>}
            {aboutusdetail && <h1 className='text-gray-500 pt-3 text-xs lg:text-xl'>{aboutusdetail.description}</h1>}
            {aboutusdetail && <button className='text-[#f4b230] pt-2 text-sm lg:pt-8 underline' onClick={aboutus}>READ MORE</button>}
          </div>
        </div>
      </div>
      {/* About us section ended */}


      {/* <div className='px-6 lg:px-16'>
        <ReviewSlider />
      </div> */}

      <Footer />
    </>
  )
}

export default Home
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../Images/slider1 (1).png';
import slider2 from '../Images/slider1 (2).png';
import slider3 from '../Images/slider1 (3).png';
import slider4 from '../Images/slider1 (4).png';
import review from '../Images/Group 30.png';
import saleimg from "../Images/sale.png"
import favourite from "../Images/Vector.png"

const data = [
  {
    title: 'Disaster of capitalism',
    price: '$220',
    salePrice: '$110',
    img: slider1,
    review: review,
  },
  {
    title: 'Disaster of capitalism',
    price: '$220',
    salePrice: '$110',
    img: slider2,
    review: review,
  },
  {
    title: 'Disaster of capitalism',
    price: '$220',
    salePrice: '$110',
    img: slider3,
    review: review,
  },
  {
    title: 'Disaster of capitalism',
    price: '$220',
    salePrice: '$110',
    img: slider4,
    review: review,
  },
  {
    title: 'the 14 rules',
    price: '$220',
    salePrice: '$110',
    img: slider4,
    review: review,
  },
];

function Sliders(props) {

  const sliderRef = useRef(null);
  const [saleCard, setSaleCard] = useState([]);

  // console.log(":here is the prop data ", props.saleCard)

  // console.log("it iss the slider dataaa", saleCard)

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
          slidesToShow: 3,
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const navigate = useNavigate();
  const gotoCard = () => {
    navigate("/buyTittle")
  }

  return (
    <div className='w-full  lg:px-10 m-auto my-8 '>
      <div className='flex justify-between px-5  md:px-6 lg:px-7 mb-6 '>
        <div className=''>
          <h1 className='font-bold lg:text-2xl md:text-xl'>{props.tittle}</h1>
        </div>
        <div className='flex justify-end gap-x-5 bg-gray-500-300'>
          <FaArrowLeftLong
            className='text-2xl p-1  hover:text-white hover:rounded-full hover:bg-yellow-500  cursor-pointer'
            onClick={handlePrev}
          />
          <FaArrowRightLong
            className='text-2xl p-1 hover:text-white hover:rounded-full hover:bg-yellow-500  cursor-pointer'
            onClick={handleNext}
          />
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, index) => (
          <div key={index}>
            <div className='relative pt-3 cursor-pointer' >
              <img src={item.url} alt='' onClick={gotoCard} />
              {props.tittle === 'Sale Products' && (
                <div className='absolute -top-0 right-0'>
                  <img src={saleimg} alt="" />
                </div>
              )}

              <div className='absolute top-9  left-3'>
                <img src={favourite} className='' alt="" />
              </div>
            </div>

            <div className='flex flex-col justify-center items-center py-2'>
              <h1 className='font-semibold  text-xs sm:text-xs md:text-md lg:text-xl '>{item.title}</h1>
              <img src={review} alt='' className='pt-2 w-[70%] lg:w-[50%]' />
              <div className='flex gap-x-3'>
                <h1 className='text-xs lg:text-lg text-gray-500  line-through'>{item.price}</h1>
                <h1 className='text-xs lg:text-lg font-semibold'>{item.salePrice}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;

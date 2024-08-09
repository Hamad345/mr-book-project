import React, { useRef } from 'react';
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

const data = [
  {
    title: 'I servived the battle of 1994',
    price: '$220',
    salePrice: '$110',
    img: slider1,
    review: review,
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quae. Reiciendis id facilis sequi porro iste, molestias eaque assumenda tempora repellendus saepe accusantium unde debitis maiores, aspernatur atque nobis suscipit?"
  },
  {
    title: 'I servived the battle of 1994',
    price: '$220',
    salePrice: '$110',
    img: slider2,
    review: review,
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quae. Reiciendis id facilis sequi porro iste, molestias eaque assumenda tempora repellendus saepe accusantium unde debitis maiores, aspernatur atque nobis suscipit?"
  },
  {
    title: 'I servived the battle of 1994',
    price: '$220',
    salePrice: '$110',
    img: slider3,
    review: review,
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quae. Reiciendis id facilis sequi porro iste, molestias eaque assumenda tempora repellendus saepe accusantium unde debitis maiores, aspernatur atque nobis suscipit?"
  },
  {
    title: 'I servived the battle of 1994',
    price: '$220',
    salePrice: '$110',
    img: slider4,
    review: review,
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quae. Reiciendis id facilis sequi porro iste, molestias eaque assumenda tempora repellendus saepe accusantium unde debitis maiores, aspernatur atque nobis suscipit?"
  },
  {
    title: 'I servived the battle of 1994',
    price: '$220',
    salePrice: '$110',
    img: slider4,
    review: review,
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quae. Reiciendis id facilis sequi porro iste, molestias eaque assumenda tempora repellendus saepe accusantium unde debitis maiores, aspernatur atque nobis suscipit?"
  },
];

function ProductSlider(props) {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 800, 
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
  const gotoCard = () =>{
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
        {data?.map((item, index) => (
          <div key={index}>
            <div className='flex w-full '>
            <div className='flex justify-center  w-full items-center cursor-pointer' onClick={gotoCard}>
              <img src={item.img} className='w-full lg:h-full' alt='' />
            </div>

            <div className='flex flex-col text-center w-full pt-5 justify-center items-center  px-8 '>
                {/* <div className='flex flex-col text-center bg-green-200'> */}
                    <h1 className='font-bold pt-5 lg:font-semibold text-center text-xs sm:text-xs md:text-md lg:text-xl '>{item.title}</h1>
                    <img src={review} alt='' className='pt-2  w-[70%] lg:w-[50%]' />
                    <div className='flex gap-x-3 items-center justify-center'>
                      <h1 className='text-xs lg:text-lg text-gray-500  line-through'>{item.price}</h1>
                      <h1 className='text-xs lg:text-lg font-semibold'>Rs{item.salePrice}</h1>
                    </div>
                      <h1 className='text-xs lg:text-sm pt-3 lg:text- pb-10 text-center font-semibold'>Rs-{item.description}</h1>
                {/* </div> */}
            </div>

          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;

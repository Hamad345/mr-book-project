import React from 'react'
import Menu from "./menu/Menu"
import slider1 from '../Images/slider1 (1).png';
import slider2 from '../Images/slider1 (2).png';
import slider3 from '../Images/slider1 (3).png';
import slider4 from '../Images/slider1 (4).png';
import review from '../Images/Group 30.png';
import Footer from './Footer';

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
  {
    title: 'the 14 rules',
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
  {
    title: 'the 14 rules',
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
  {
    title: 'the 14 rules',
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
  {
    title: 'the 14 rules',
    price: '$220',
    salePrice: '$110',
    img: slider4,
    review: review,
  },
];

function Favourite() {
  return (
    <div>
      <Menu />

      <div className='pt-10'>
        <h1 className='font-bold text-2xl text-center'>Your <span className='text-[#f7b242]'>Favourite </span></h1>

        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-5 md:gap-x-4 lg:gap-x-3 px-4 py-10'>
          {data.map((item, index) => (
            <div key={index} className='w-full '>
              <div className='w-full flex items-center justify-center cursor-pointer'>
                <img src={item.img} className='w-full md:w-[400px]' alt='' />
              </div>

              <div className='flex flex-col justify-center items-center py-2'>
                <h1 className='font-semibold  text-xs sm:text-xs md:text-md lg:text-xl '>{item.title}</h1>
                <img src={review} alt='' className='pt-2 w-[70%] lg:w-[40%]' />
                <div className='flex gap-x-3'>
                  <h1 className='text-xs lg:text-lg text-gray-500  line-through'>{item.price}</h1>
                  <h1 className='text-xs lg:text-lg font-semibold'>{item.salePrice}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Favourite
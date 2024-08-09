import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import stars from '../Images/Group 30.png';
// import pic from "../Images/anees2.jpg"


function ReviewSlider() {

  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/getreview');
        console.log(response.data.data)
        setReviewsData(response.data.data); // Assuming that the response.data is an array of reviews
      } catch (error) {
        console.error('Error fetching reviews:', error);
        // Handle error if needed
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);

    const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 700, 
    slidesToShow: 3,
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


  return (
    <div className='w-full  review-slider'>
        <div className='flex justify-between  lg:mb-6 '>
            <div className=''>
              <h1 className='font-bold lg:text-2xl md:text-xl'>Customer <span className='text-[#f7b242]'>Review</span></h1>
            </div>
             <div className='flex justify-end gap-x-5 bg-gray-500-300'>
                <FaArrowLeftLong
                className='text-3xl p-2  hover:text-white hover:rounded-full hover:bg-[#f7b242]  cursor-pointer'
                onClick={handlePrev}
                />
                <FaArrowRightLong
                className='text-3xl p-2 hover:text-white hover:rounded-full hover:bg-[#f7b242]  cursor-pointer'
                onClick={handleNext}
                />
            </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {reviewsData?.map((item,index) => (
          <div key={index}>
            <div className="w-full  bg-white shadow-lg rounded-xl" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <div className='relative my-10 flex justify-center items-center '>
                
                </div>  
              <div className='w-full h-40 lg:h-52 my-2 px-8'>
              <div className=' flex flex-col items-center justify-center gap-y-2'>
                <h1 className='pt-4 lg:pt-8'>{item.name}</h1>
                <div>
                  <Stack spacing={1}>
                    <Rating name="size-small" defaultValue={2} size='small'/>
                  </Stack>
                </div>
                <h1 className='text-center text-gray-600 text-xs lg:text-sm'>"{item.Review}"</h1>
              </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ReviewSlider
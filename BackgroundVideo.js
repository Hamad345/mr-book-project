import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bookvid from './assests/bookvid.mp4';
import { Link } from 'react-router-dom';


const BackgroundVideo = () => {
  const [bannerData, setBannerData] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/banner-get');
        const { Banner } = response.data;

        if (Banner && Banner.length > 0) {
          // Assuming you only want the first banner data
          const firstBanner = Banner[0];
          setBannerData({
            title: firstBanner.title,
            description: firstBanner.description,
          });
        }
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div className="relative bg-slate-400">
      <div>
        <video
          autoPlay
          muted
          loop
          className="w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        >
          <source src={bookvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col mt-6 sm:mx-8">
        <h1 className="hidden md:block sm:text-3xl md:text-5xl mx-10 mt-6 leading-tight text-white">
          <span className=" mb-2 font-bold">{bannerData.title}</span>
        </h1>

        <p className="mt-4 mx-10 text-xs md:w-[50%] lg:w-[30%] sm:text-lg text-white">
          {bannerData.description}
        </p>
        <Link to="/ProductPage"> <button className="mx-10 mt-4 md:w-[30%] lg:w-[10%] bg-yellow-600 py-2 px-4 text-white font-bold rounded">
          Shop Now
        </button></Link>
      </div>
    </div>
  );
};

export default BackgroundVideo;

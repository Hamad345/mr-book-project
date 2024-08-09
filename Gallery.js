import React, { useState, useEffect } from 'react';
import Menu from './menu/Menu';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Gallery() {
  const navigate = useNavigate();
  const [galleryData, setGalleryData] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/gallery-get');
        console.log('Gallery Data:', response.data.data);

        if (response.data.data && response.data.error) {
          alert(response.data.message || 'Error in fetching gallery data');
        } else {
          setGalleryData(response.data.data);
        }
      } catch (error) {
        console.error('Error:', error);

        if (error.response && error.response.data && error.response.data.error) {
          alert(error.response.data.message || 'Error in fetching gallery data');
        } else {
          alert('Network error. Please try again.');
        }
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (url) => {
    setFullscreenImage(url);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  const specificBook = (id) => {
    navigate(`/galleryBook/${id}`);
  };

  return (
    <div>
      <Menu />
      <div className='w-full px-2 md:px-20 py-10 '>
        <h1 className='font-bold text-3xl justify-center flex'>GALLERY</h1>

        <div className='flex gap-x-4 pt-7 md:pt-0 pb-5'>
          <h1 className='text-xl cursor-pointer font-bold border-t border-black'>images</h1>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-5 mx-auto'>
          {galleryData.map((item, index) => (
            <div key={index} className='w-full'>
              <img
                src={item.url}
                className='cursor-pointer rounded-xl w-full md:h-80'
                onClick={() => handleImageClick(item.url)}
                alt={`Gallery Item ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {fullscreenImage && (
  <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={handleCloseFullscreen}>
    <img 
      src={fullscreenImage} 
      alt="Fullscreen" 
      className="max-h-full max-w-full"
    />
  </div>
)}


      </div>

      <Footer />
    </div>
  );
}

export default Gallery;

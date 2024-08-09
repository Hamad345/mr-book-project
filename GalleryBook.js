import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from './menu/Menu';
import Footer from './Footer';
import axios from 'axios';

function GalleryBook() {
  const [cardData, setCardData] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch card data from the API
    const fetchCardData = async () => {
      try {
        const response = await axios.get(`https://mr-book-066682c9409f.herokuapp.com/api/getCard-id/${id}`);
        console.log(response.data.data);
        setCardData(response.data.data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, [id]);

  useEffect(() => {
    // Fetch related images from the API
    const fetchRelatedImages = async () => {
      try {
        const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard');
        console.log('Related Images Data:', response.data.data);

        if (response.data.data && response.data.error) {
          alert(response.data.message || 'Error in fetching related images');
        } else {
          setRelatedImages(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching related images:', error);

        if (error.response && error.response.data && error.response.data.error) {
          alert(error.response.data.message || 'Error in fetching related images');
        } else {
          alert('Network error. Please try again.');
        }
      }
    };

    fetchRelatedImages();
  }, []);

  const specificBook = (id) => {
    navigate(`/galleryBook/${id}`);
  };

  return (
    <div>
      <Menu />
      <div>
        <h1 className='flex items-center justify-center pt-10 font-bold text-3xl'>GALLERY</h1>

        <div className='w-full md:flex px-8 md:px-20 pt-10'>
          <div className='md:w-1/2 '>
            <img src={cardData?.url} className='rounded w-full h-96 sm:text-xs lg:text-xs lg:w-[70%] lg:h-[80%]' alt="" />
          </div>

          <div className='md:w-1/2 pt-4 flex flex-col gap-y-2 md:gap-y-10'>
            <h1 className='font-bold'>{cardData?.category}</h1>
            <h1 className='font-bold text-3xl'>{cardData?.title}</h1>
            <h1>{cardData?.description}</h1>
          </div>
        </div>
      </div>

      <div className='px-10 pt-4'>
        <h1 className='text-2xl pb-10 font-bold'>Related Images</h1>
        <div className='w-full gap-x-7 gap-y-4 grid md:grid-cols-2 lg:grid-cols-4'>
          {relatedImages.slice(0, 8)?.map((image, index) => (
            <img key={index} onClick={() => specificBook(image._id)} src={image.url} className='cursor-pointer rounded-xl h-64 w-72' alt={`Related Image ${index + 1}`} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GalleryBook;
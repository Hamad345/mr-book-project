// import Menu from "../component/menu/Menu";
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import aboutImg from "../Images/Rectangle.png"
// import pic from "../Images/anees2.jpg"
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Footer from './Footer'
import Menu from "../component/menu/Menu"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function NewArrivalTittle() {
  const [activeSection, setActiveSection] = useState('description');
  const [ShowReviewForm, SetShowReviewForm] = useState(false)
  const [add, setadd] = useState(0)
  const [Data, setData] = useState(null);
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewFormData, setReviewFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    Review: "",
  });

  const navigate = useNavigate();
  
  const { id } = useParams();
  // localStorage.setItem("productid", id);
  //  console.log("here is the product id", id)

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login')
        return;
      }

      // Retrieve the product IDs from localStorage or initialize an empty array if not present
      const productIds = JSON.parse(localStorage.getItem('productIds')) || [];

      // Add the current product ID to the array
      productIds.push(id);

      // Save the updated product IDs array to localStorage
      localStorage.setItem('productIds', JSON.stringify(productIds));

      // Send the array of product IDs in the post request
      const response = await axios.post(
        'https://mr-book-066682c9409f.herokuapp.com/cart',
        { product_ids: productIds }, // Pass the array of product IDs
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );

      console.log("this cart data", response.data);

      localStorage.removeItem('productIds');
      // Redirect to the cart page
      navigate('/viewCart');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };


  //   const handleReviewSubmit = async () => {
  //     try {
  //       const response = await axios.post('https://mr-book-066682c9409f.herokuapp.com/review', reviewFormData);
  //       console.log(response.data);

  //       // Update the reviewsData state with the new review
  //       setReviewsData((prevReviews) => [...prevReviews, response.data]);

  //       // Reset the form data
  //       setReviewFormData({
  //         name: "",
  //         email: "",
  //         rating: 0,
  //         Review: "",
  //       });

  //       // Hide the review form after submission
  //       SetShowReviewForm(false);
  //     } catch (error) {
  //       console.error('Error posting review:', error);
  //       // Handle error if needed
  //     }
  //   };


  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://mr-book-066682c9409f.herokuapp.com/api/newarrivel-get/${id}`);
      console.log(response.data.data)
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id])

  console.log("here it is", Data);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/getreview');
  //         console.log(response.data.data)
  //         setReviewsData(response.data.data); // Assuming that the response.data is an array of reviews
  //       } catch (error) {
  //         console.error('Error fetching reviews:', error);
  //         // Handle error if needed
  //       }
  //     };

  //     fetchData(); // Call the function to fetch data when the component mounts
  //   }, []);



  return (
    <>
      <Menu />


      {Data && (
        <div className="lg:flex gap-x-12 w-full px-2 lg:px-8 pt-8 ">
          <div className="lg:w-[40%] px-4 flex items-center justify-center sm:flex-none sm:items-start w-full lg:ml-12">
            <img src={Data.url} className='w-[80%] h-[370px] rounded-md sm:h-[400px] lg:h-[660px] sm:w-[80%]' alt="" />
          </div>
          <div className="w-full lg:w-[61%] py-4">
            <div className="flex flex-col gap-y-5">
              <h1 className='font-semibold'>{Data.category}</h1>
              <h1 className='font-semibold block sm:hidden'>Written by <span className='font-bold text-black'> {Data.author} </span></h1>
              <h1 className="font-bold text-2xl">{Data.title}</h1>
              <div className='flex gap-x-2'>

                <h1 className="text-xl text-gray-600 hidden  lg:block font font-semibold">Rs {Data.price}</h1>
              </div>
              <h1 className="text-gray-600 hidden lg:block font-semibold">Written by <span className='font-bold text-black'> {Data.author} </span></h1>
              <p className="text-gray-500 text-justify lg:w-[75%]">{Data.description}</p>
              {/* <h1 className="font-semibold">{Data.sold} sold <span className="text-gray-600 text-sm">since last month</span></h1> */}
              {/* <h1 className="text-[#f4b230] ">Favourite this</h1> */}
              <div className='flex gap-x-2'>
                <h1 className="text-black block lg:hidden font-semibold">Rs {Data.salePrice}</h1>
                <h1 className="text-gray-600 block lg:hidden font-semibold line-through">Rs {Data.price}</h1>
              </div>
              <div>
                <h1>Rs 300 Delivery charges</h1>
              </div>
              <hr className="w-1/2" />
            </div>
            <div className="flex pt-4 gap-x-10">
              <button
                onClick={handleAddToCart}
                className='w-[50%] py-2 rounded-lg bg-[#f4b230]'
              >
                ADD TO CART
              </button>
            </div>
            <div className="pt-4 px-2">
              <button className="w-[50%] rounded-lg py-2 bg-black text-white"
                onClick={() => navigate('/checkout')}
              >BUY NOW</button>
            </div>
            <div className="pt-6 flex flex-col gap-y-2">
              <h1 className="text-gray-500">Estimate Delivery Time <span className="text-black font-semibold">: 02-03 days</span></h1>
              <h1 className="text-gray-500">Return in  05 days</h1>
            </div>
          </div>
        </div>

      )}

      {/* below section started */}

      {/* <div className='w-full pt-10 px-4 lg:px-20'>
        <hr className='border' />
        <div>
          <div className='flex gap-x-4'>
            <h1
              className={`font-semibold cursor-pointer text-xl ${activeSection === 'description' ? 'border-t-2 text-black border-black' : "text-gray-500"
                }`}
              onClick={() => setActiveSection('description')}
            >
              Description
            </h1>
            <h1
              className={`font-semibold  cursor-pointer text-xl ${activeSection === 'review' ? 'border-t-2 border-black text-black font-bold' : 'text-gray-500'
                }`}
              onClick={() => setActiveSection('review')}
            >
              Review
            </h1>
            <h1
              className={`font-semibold  cursor-pointer text-xl ${activeSection === 'bookreading' ? 'border-t-2 border-black text-black font-bold' : 'text-gray-500'
                }`}
              onClick={() => setActiveSection('bookreading')}
            >
              Book Reading
            </h1>
          </div>
        </div>

        <div>
          {activeSection === 'description' && (
            <div className='flex flex-col gap-y-4 pt-5 pb-5'>
              <p className='text-justify'></p>
              <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque incidunt veniam corporis asperiores aperiam vel culpa, enim doloremque saepe nulla accusantium tenetur voluptas maiores amet, dolor repellat eveniet modi autem.</p>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem illum perspiciatis ab quo, corrupti non tenetur magnam modi, amet adipisci ad veniam temporibus atque impedit animi maxime? Cum, atque.</p>
            </div>
          )}
          <>
            {activeSection === 'review' && (
              <div className='w-full'>
                <div className='flex justify-end px-4 lg:px-12'>
                  {!ShowReviewForm && (
                    <>
                      <button
                        className='font-semibold rounded bg-[#f4b230] w-full lg:hidden  block py-2 mt-10 items-end'
                        onClick={() => SetShowReviewForm(true)}
                      >
                        Post A Review
                      </button>

                      <button
                        className='font-semibold rounded bg-[#f4b230] px-20 hidden lg:block py-2 mt-10 items-end'
                        onClick={() => SetShowReviewForm(true)}
                      >
                        Post A Review
                      </button>
                    </>
                  )}
                </div>
                {ShowReviewForm ? (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleReviewSubmit();
                  }}>
                    <div className='w-full pt-8'>
                      <hr className='w-' />

                      <div className='pt-5'>
                        <h1 className='text-lg font-semibold'>Post a review</h1>
                        <p className='text-gray-500'>Elit, tellus est, libero euismed. Pallenteque bibendu</p>
                      </div>

                      <div className='pt-4'>
                        <Rating
                          name="rating"
                          defaultValue={0}
                          size='large'
                          onChange={(event, newValue) => {
                            setReviewFormData((prevData) => ({
                              ...prevData,
                              rating: newValue,
                            }));
                          }}
                        />
                      </div>

                      <div className=''>
                        <div className='w-full md:flex gap-x-20 mt-7'>
                          <div className='md:w-1/2 flex flex-col'>
                            <label htmlFor="name" className='text-gray-600 pb-3'>Name</label>
                            <input
                              type="text"
                              name="name"
                              value={reviewFormData.name}
                              onChange={handleInputChange}
                              className='rounded-lg outline-none px-3 border border-gray-600 py-1'
                            />
                          </div>

                          <div className='md:w-1/2 pt-5 md:pt-0 flex flex-col'>
                            <label htmlFor="email" className='pb-3 text-gray-600'>Email Address</label>
                            <input
                              type="text"
                              name="email"
                              value={reviewFormData.email}
                              onChange={handleInputChange}
                              className='rounded-lg outline-none px-3 border border-gray-600 py-1'
                            />
                          </div>
                        </div>



                        <div>
                          <h1 className='font-lg text-gray-600 pt-8 pb-3'>Your review</h1>
                          <input
                            type="text"
                            name="Review"
                            value={reviewFormData.Review}
                            onChange={handleInputChange}
                            className='w-full p-16 border border-gray-600 rounded-xl outline-none'
                          />
                        </div>

                        <div className='pt-8'>
                          <button type="submit" className='py-2 w-full md:w-1/2 text-white rounded-md bg-[#f8b84e]'>SUBMIT</button>
                        </div>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className='flex flex-wrap gap-x-8 justify-center pt-10'>
                    {reviewsData?.map((item, index) => (
                      <div key={index}>
                        <div className="w-80  bg-white shadow-lg rounded-xl" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>

                          <div className='w-full h-40 lg:h-52 my-2 px-8'>
                            <div className=' flex flex-col items-center justify-center gap-y-2'>
                              <h1 className='pt-4 lg:pt-8'>{item.name}</h1>
                              <div>
                                <Stack spacing={1}>
                                  <Rating name="size-small" defaultValue={item.rating} size='small' />
                                </Stack>
                              </div>
                              <h1 className='text-center text-gray-600 text-xs lg:text-sm'>{item.Review}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )}
            {activeSection === 'bookreading' && (
              <div className='flex flex-col gap-y-4 pt-5 pb-5'>
                <div className='flex flex-col gap-y-6'>
                  <h1 className='text-[#f4b230] font-bold'>Description</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam possimus labore ullam rerum mollitia quam, qui ratione, necessitatibus, nisi nobis architecto provident illum doloremque accusantium reprehenderit fugiat tenetur! Odio.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam possimus labore ullam rerum mollitia quam, qui ratione, necessitatibus, nisi nobis architecto provident illum doloremque accusantium reprehenderit fugiat tenetur! Odio.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam possimus labore ullam rerum mollitia quam, qui ratione, necessitatibus, nisi nobis architecto provident illum doloremque accusantium reprehenderit fugiat tenetur! Odio.</p>
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-[#f4b230] font-bold'>About Author</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum minus iste vitae rerum, voluptates libero, voluptatem cupiditate, quod temporibus facere natus quos eveniet perspiciatis neque optio quia facilis incidunt?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum minus iste vitae rerum, voluptates libero, voluptatem cupiditate, quod temporibus facere natus quos eveniet perspiciatis neque optio quia facilis incidunt?</p>
                </div>

                <div className='flex flex-col gap-3'>
                  <h1 className='text-[#f4b230] font-bold'>Reading</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum minus iste vitae rerum, voluptates libero, voluptatem cupiditate, quod temporibus facere natus quos eveniet perspiciatis neque optio quia facilis incidunt?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum minus iste vitae rerum, voluptates libero, voluptatem cupiditate, quod temporibus facere natus quos eveniet perspiciatis neque optio quia facilis incidunt?</p>
                </div>
              </div>
            )}
          </>
        </div>

      </div> */}

      <Footer />
    </>
  )
}

export default NewArrivalTittle;
import React, { useState, useEffect } from 'react'
import Menu from "../component/menu/Menu"
import ownerImg from "../Images/Rectangle1.png"
import Footer from './Footer'
import axios from 'axios';

function AboutUs() {

    const [data , setData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/aboutUs');
            console.log(response.data.data)
            setData(response.data.data); // Assuming that the response.data is an array of reviews
          } catch (error) {
            console.error('Error fetching reviews:', error);
            // Handle error if needed
          }
        };
    
        fetchData(); // Call the function to fetch data when the component mounts
      }, []);

                    <h1 className='text-justify font-semibold text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, corrupti quod molestiae fuga accusamus optio expedita ullam obcaecati. Unde exercitationem reprehenderit accusamus perferendis non quia debitis inventore alias quidem voluptatem.</h1>
    //   console.log("object" );


  return (
    <div>
        <Menu/>
        <div className='w-full'>
            <h1 className='flex justify-center items-center text-2xl font-bold gap-x-2 pt-8'>ABOUT  <span className='text-[#F4B230]'>US</span></h1>

           
        </div>

        {/* owner message */}
        <div className='flex justify-center my-4 items-center'>
        </div>
        <div className='w-full  lg:flex px-2 lg:px-10 my-10 gap-x-3'>
            <div className='w-full lg:w-[35%]'>
                <img src={data[0]?.url} alt="" className='h-[30rem]' />
            </div>
            <div className='w-full lg:w-[60%] my-8 lg:my-20 flex flex-col gap-y-4 lg:gap-y-10 lg:pr-20'>
                <h1 className='text-lg font-semibold text-justify'>{data[0]?.title}</h1>
                <h1 className='text-lg  text-justify'>{data[0]?.description}</h1>
                </div>
        </div>

        <div className='w-full  lg:px-16 '>
            <div className='lg:px-20 bg-[#646060] flex justify-center items-center text-center'>
                <h1 className='text-white  text-center px-5 lg:w-[70%] font-bold text-xl py-8 lg:py-20'>{data[0]?.quote}</h1>
            </div>
        </div>
        <Footer/>
    </div>

  )
}

export default AboutUs
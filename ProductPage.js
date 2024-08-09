import React, { useState, useEffect } from "react";
import Menu from "../component/menu/Menu";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseurl } from './BaseURL/BaseURL';
import review from "../Images/Group 30.png";
import axios from 'axios';
import Footer from "./Footer";



function ProductPage() {
  const [filteredSaleCards, setFilteredSaleCards] = useState([]);
  const [Englishtitle, setEnglishTitle] = useState([]);
  const [Urdutitle, setUrduTitle] = useState([]);
  const [Novaltitle, setNovalTitle] = useState([]);
  const [Seasonaltitle, setSeasonalTitle] = useState([]);
  const [CSStitle, setCSSTitle] = useState([]);
  const [Medicaltitle, setMedicalTitle] = useState([]);
  const [Pashtotitle, setPashtoTitle] = useState([]);
  const [Childrentitle, setChildrenTitle] = useState([]);
  const [IELTStitle, setIELTSTitle] = useState([]);
  const [Aptitudetitle, setAptitudeTitle] = useState([]);
  const [Islamictitle, setIslamicTitle] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("English books");
  const [loading, setLoading] = useState(false);
  const [newArrival, setNewArrival] = useState([]);




  const fetchEnglishTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-englishcategry');
      setEnglishTitle(response.data.data);
      setFilteredSaleCards(response.data.data);
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchUrduTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-Urducategry');
      setUrduTitle(response.data.data);
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchNovalTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-Novalcategry');
      setNovalTitle(response.data.data);
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchSeasonalTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-Seasonalcategry');
      setSeasonalTitle(response.data.data);
      console.log(response.data.data)
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchcssTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-CSScategry');
      setCSSTitle(response.data.data);
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchMedicalTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-Medicalcategry');
      setMedicalTitle(response.data.data);
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchpashtoTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-Pashtocategry');
      setPashtoTitle(response.data.data);
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchchildrenTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-Childrenocategry');
      setChildrenTitle(response.data.data);
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchieltsTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-IELTScategry');
      setIELTSTitle(response.data.data);
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchaptitudeTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-Aptitudecategry');
      setAptitudeTitle(response.data.data);
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };

  const fetchislamicTitle = async () => {
    try {
      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/api/getSaleCard-Islamiccategry');
      setIslamicTitle(response.data.data);
      console.log("here si teh islamic title", response.data.data)
      // setFilteredSaleCards(response.data.data); // Initialize filteredSaleCards with all cards
      setLoading(true);
    } catch (error) {
      console.error('Error fetching sale cards:', error);
    }
  };
  const BaseURl = baseurl;

  const newarrival = async () => {
    try {
      const response = await axios.get(`${BaseURl}/api/GetNewArrival`);
      console.log("here is the newarrival", response.data.data)
      setNewArrival(response.data.data)
    } catch (error) {
      console.error("here is the eror OF NEW ARRIVAL", error)
    }
  };

  useEffect(() => {
    fetchEnglishTitle();
    fetchUrduTitle();
    fetchNovalTitle();
    fetchSeasonalTitle();
    fetchcssTitle();
    fetchMedicalTitle();
    fetchpashtoTitle();
    fetchchildrenTitle();
    fetchieltsTitle();
    fetchaptitudeTitle();
    fetchislamicTitle();
    newarrival();

    setFilteredSaleCards(Englishtitle);

  }, []);


  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "English books") {
      setFilteredSaleCards(Englishtitle);
    } else if (category === "Urdu books") {
      setFilteredSaleCards(Urdutitle);
    } else if (category === "Noval books") {
      setFilteredSaleCards(Novaltitle);
    } else if (category === "Seasonal books") {
      setFilteredSaleCards(Seasonaltitle);
    } else if (category === "CSS / PMS Books") {
      setFilteredSaleCards(CSStitle);
    } else if (category === "Medical Books") {
      setFilteredSaleCards(Medicaltitle);
    } else if (category === "Pashto Books") {
      setFilteredSaleCards(Pashtotitle);
    } else if (category === "Children Books") {
      setFilteredSaleCards(Childrentitle);
    } else if (category === "IELTS/Toefl Books") {
      setFilteredSaleCards(IELTStitle);
    } else if (category === "Aptitude test Books") {
      setFilteredSaleCards(Aptitudetitle);
    } else if (category === "Islamic Books") {
      setFilteredSaleCards(Islamictitle);
    }
    else if (category === "new arrival") {
      // Call the newarrival function to fetch new arrival data
      setFilteredSaleCards(newArrival);

    }

    // Add other categories if needed
  };
  const gotoCard = (id) => {
    navigate(`/buyTittle/${id}`)
  }
  return (
    <>
      <Menu />
      <h1 className="text-xl font-bold items-center text-center">Products</h1>
      <div className="px-4 md:px-20  py-4 border flex justify-between">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 text-sm md:text-base gap-y-3 font-serif font-bold  gap-x-8 cursor-pointer ">
          {/* <p
            className={`border-2 py-1 px-4 rounded-md ${selectedCategory === "All books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("All books")}
          >
            All books
          </p> */}
          <p
            className={`border-2 py-1 px-4 rounded-md ${selectedCategory === "English books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("English books")}
          >
            English books
          </p>
          <p
            className={`border-2 py-1 px-4 rounded-md ${selectedCategory === "Urdu books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("Urdu books")}
          >
            Urdu books
          </p>
          <p
            className={`border-2 py-1 px- rounded-md ${selectedCategory === "Pashto Books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("Pashto Books")}
          >
            Pashto Books
          </p>
          <p
            className={`border-2 py-1 px- rounded-md ${selectedCategory === "Islamic Books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("Islamic Books")}
          >
            Islamic Books
          </p>
          <p
            className={`border-2 py-1 px-4 rounded-md ${selectedCategory === "Noval books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("Noval books")}
          >
            Noval books
          </p>

          <p
            className={`border-2 py-1 px- rounded-md ${selectedCategory === "Medical Books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("Medical Books")}
          >
            Medical Books
          </p>
          <p
            className={`border-2 py-1 px- rounded-md ${selectedCategory === "CSS / PMS Books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("CSS / PMS Books")}
          >
            CSS / PMS Books
          </p>

          <p
            className={`border-2 py-1 px- rounded-md ${selectedCategory === "Aptitude test Books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("Aptitude test Books")}
          >
            Aptitude Test Books
          </p>

          <p
            className={`border-2 py-1 px- rounded-md ${selectedCategory === "IELTS/Toefl Books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("IELTS/Toefl Books")}
          >
            IELTS/Toefl Books
          </p>

          <p
            className={`border-2 py-1 px- rounded-md ${selectedCategory === "Children Books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("Children Books")}
          >
            Children Books
          </p>

          <p
            className={`border-2 py-1 px- rounded-md ${selectedCategory === "Seasonal books" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("Seasonal books")}
          >
            Seasonal books
          </p>

          <p
            className={`border-2 py-1 px- rounded-md ${selectedCategory === "new arrival" ? "bg-yellow-600 text-white text-center items-center" : "items-center text-center"
              }`}
            onClick={() => handleCategoryClick("new arrival")}
          >
            New Arrival
          </p>
        </div>
      </div>
      <div className="pt-10 vedor-slider">


      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-5 md:gap-x-4 lg:gap-x-3 px-4 py-10">
        {filteredSaleCards?.map((saleItem, index) => (
          <div key={index} className="w-full">
            <div className="w-full flex items-center justify-center cursor-pointer">
              <img src={saleItem.url} className="w-[200px] h-[230px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" alt="" onClick={() => gotoCard(saleItem._id)} />
            </div>

            <div className="flex flex-col justify-center items-center py-2">
              <h1 className="font-semibold text-xs sm:text-xs md:text-md lg:text-xl">
                {saleItem.title}
              </h1>
              <img src={review} alt="" className="pt-2 w-[70%] lg:w-[40%]" />
              <div className="flex gap-x-3">
                <h1 className="text-xs lg:text-lg text-gray-500 line-through">
                  Rs{saleItem.price}
                </h1>
                <h1 className="text-xs lg:text-lg font-semibold">Rs-{saleItem.salePrice}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />

    </>
  );
};
export default ProductPage;

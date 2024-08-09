import React, { useState, useEffect } from 'react';
import Menu from '../component/menu/Menu';
import Footer from './Footer';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ViewCart() {
  const [cartData, setCartData] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const [totalcount, settotalcount] = useState();
  const navigate = useNavigate();

  console.log("it is card data", cartData)

  const increment = async (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
    await updateCartQuantity(itemId, itemQuantities[itemId] + 1);
    await fetchSubtotal(); // Fetch subtotal after updating quantity
  };

  const decrement = async (itemId) => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
      await updateCartQuantity(itemId, itemQuantities[itemId] - 1);
      await fetchSubtotal(); // Fetch subtotal after updating quantity
    }
  };

  const fetchSubtotal = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
      // Check if token is available
      if (!token) {
        console.error('User not authenticated. Please log in.');
        // You might want to redirect the user to the login page or handle it appropriately
        return;
      }

      const response = await axios.get('https://mr-book-066682c9409f.herokuapp.com/get-subtotals', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      console.log('Subtotal API response:', response.data);
      settotalcount(response.data.data.subtotal);



      // Update the local state with the new subtotal
    } catch (error) {
      console.error('Error fetching subtotal:', error);
    }
  };

  localStorage.setItem("subtotel", subtotal);


  const deleteCartItem = async (itemId) => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');

      // Check if token is available
      if (!token) {
        console.error('User not authenticated. Please log in.');
        // You might want to redirect the user to the login page or handle it appropriately
        return;
      }

      const response = await axios.delete(
        `https://mr-book-066682c9409f.herokuapp.com/delete-item/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );

      console.log('Delete API response:', response.data);

      // Update local state to reflect the deletion
      setCartData((prevCartData) =>
        prevCartData.filter((item) => item._id !== itemId)
      );

      // Fetch subtotal after deleting an item
      await fetchSubtotal();
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };


  const updateCartQuantity = async (itemId, newQuantity) => {
    try {

      const token = localStorage.getItem('token');

      // Check if token is available
      if (!token) {
        console.error('User not authenticated. Please log in.');
        // You might want to redirect the user to the login page or handle it appropriately
        return;
      }

      const response = await axios.patch(
        `https://mr-book-066682c9409f.herokuapp.com/cart/${itemId}`,
        { cartQuantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('API response:', response.data);

      // Update the local state with the new data
      setCartData((prevCartData) =>
        prevCartData.map((item) =>
          item._id === itemId
            ? {
              ...item,
              cartQuantity: newQuantity,
              subtotal: newQuantity * item.price,
            }
            : item
        )
      );
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  useEffect(() => {
    const fetchCartData = async () => {
      try {

        const token = localStorage.getItem('token');

        // Check if token is available

        const response = await axios.get(
          'https://mr-book-066682c9409f.herokuapp.com/get-cart',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("here is the cart to show data", response.data.data)
        setCartData(response.data.data);
        const initialQuantities = {};
        response.data.data.forEach((item) => {
          initialQuantities[item._id] = item.cartQuantity;
        });
        setItemQuantities(initialQuantities);

        // Call fetchSubtotal after fetching cart data
        fetchSubtotal();
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);



  useEffect(() => {
    const fetchtotal = async () => {
      try {

        const token = localStorage.getItem('token');

        // Check if token is available

        const response = await axios.get(
          'https://mr-book-066682c9409f.herokuapp.com/get-subtotal',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("here is the data to be display", response.data.data.subtotal)
        // Call fetchSubtotal after fetching cart data
        setSubtotal(response.data.data.subtotal);

        fetchSubtotal();
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchtotal();
  }, [totalcount]);


  const handleCheckout = () => {
    // Retrieve all product IDs from the cart
    const productIds = cartData?.map((item) => item?.product_id?._id);
    console.log("here is product id to be pass", productIds)
    // Save product IDs in localStorage
    localStorage.setItem('checkoutProductIds', JSON.stringify(productIds));
    // Redirect to the checkout page
    navigate('/checkout');
  };


  return (
    <div>
      <Menu />

      <div className='flex justify-center items-center py-3'>
        <h1 className='font-bold text-xl px-8 text-red-600 '>IF CHARGES EXCEED RS 5000 DELIVERY WILL BE FREE</h1>
      </div>

      <div className='mt-6 flex flex-col sm:flex-row sm:gap-x-10 sm:px-32'>
        <div className='border h-80 overflow-hidden overflow-x-auto hover:overflow-y-auto border-black'>
          <table>
            <thead>
              <tr className='border'>
                <th className='md:py-2 lg:px-5 border border-r border-black'>Products</th>
                <th className='md:py-2 lg:px-5 border border-r border-black'>Price</th>
                <th className='md:py-2 lg:px-5 border border-r border-black'>Quantity</th>
                <th className='md:py-2 lg:px-5 border border-r border-black'>Subtotal</th>
                <th className='md:py-2 lg:px-5 border border-r border-black'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartData?.map((item, index) => (
                <tr key={index} className='w-full'>
                  <td className='py-3 border md:px-3 sm:flex gap-x-4'>
                    <img
                      src={item.url} // Assuming the image URL is available in the cart data
                      className='sm:w-14 sm:h-16 w-16 h-12 rounded-lg'
                      alt={`Product ${index + 1}`}
                    />
                    <h1 className='font-bold pt-3 text-xs '>{item.title}</h1>
                  </td>
                  <td className='md:py-3 border px-4'>{item.price}</td>
                  <td className='md:py-3 border px-4'>
                    <div className='flex'>
                      <h1
                        className='border cursor-pointer px-2 py-1 font-semibold'
                        onClick={() => decrement(item._id)}
                      >
                        -
                      </h1>
                      <h1 className='border px-2 py-1'>{itemQuantities[item._id]}</h1>
                      <h1
                        className='border cursor-pointer px-2 py-1'
                        onClick={() => increment(item._id)}
                      >
                        +
                      </h1>
                    </div>
                  </td>
                  <td className='md:py-3 border items-center text-center'>{item.subtotal}</td>
                  <td className='items-center text-center border px-2 text-xl'> <button onClick={() => deleteCartItem(item._id)}>
                    <RiDeleteBin5Line />
                  </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='border mt-6 md:mt-0 border-black md:w-64'>
          <h1 className='text-xl font-bold py-4 text-center border border-black'>Total Cart</h1>
          <div className='flex justify-between px-5 py-4 font-semibold border-b'>
            <h1>Subtotal</h1>
            <h1>{totalcount} rs</h1>
          </div>

          {/* <div className='flex justify-between px-5 py-4 font-semibold border-b'>
            <h1>Tax</h1>
            <h1>free</h1>
          </div> */}

          <div className='flex justify-between px-5 py-4 font-semibold border-b'>
            <h1>Delivery charges</h1>
            <h1>{totalcount < 5000 ? "Rs 300" : "Free"}</h1>
          </div>

          <div className='flex justify-between px-5 py-4 font-semibold '>
            <h1>Total</h1>
            <h1>{subtotal} rs</h1>
          </div>
          <button
            className='py-2 w-full rounded-lg bg-[#f4b230]'
            onClick={handleCheckout} // Call handleCheckout function on button click
          >
            CHECK OUT
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ViewCart;

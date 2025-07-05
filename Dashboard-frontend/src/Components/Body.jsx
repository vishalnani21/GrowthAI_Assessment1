import React, { useState } from 'react'
import DisplayBox from './DisplayBox'
import { useDispatch, useSelector } from 'react-redux';
import { setBackendData, setBusinessName, setLocation } from '../Utils/businessSlice';
import axios from 'axios';
import { URL_DATA } from '../Utils/constants';
import ShimmerBox from './ShimmerBox';


const Body = () => {
     const dispatch = useDispatch();
  const { name, location } = useSelector((state) => state.business);
   const [isLoading, setIsLoading] = useState(false);
   const[dataFetched,setDataFetched]=useState(false);

  const fetchBusinessData= async ()=>{
    setIsLoading(true);
    try{
  const response= await axios.post(`${URL_DATA}business-data`,{name,location});
  //console.log(response);
  //console.log("API URL", URL_DATA); 

  const fetchedData=response?.data?.data;
 const updateData = {
        name,
        location,
        headline: fetchedData.headline,
        reviews: fetchedData.reviews,
        rating: fetchedData.rating,
      };

  dispatch(setBackendData(updateData));
 
    }
    catch(err){
        console.log(err.message);
    }
    finally{
        setIsLoading(false);
         setDataFetched(true); 
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
   if (!name.trim() || !location.trim()) {
    alert('Please fill out all the fields!');
    return;
  }
  fetchBusinessData();

  };

  return (
    <>
    <h1 className='text-center text-3xl font-semibold text-gray-800 '>GrowthAI</h1>
   <div className="flex flex-col md:flex-row min-h-screen p-6 gap-6 ">
   
  <div className="md:w-1/2 w-full">
  
    <form     onSubmit={handleSubmit}
     className="bg-white p-6 rounded-xl shadow space-y-4 bg-gray-100 h-96">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Business Info</h2>

      <input
        type="text"
        placeholder="Business Name"
         onChange={(e) => dispatch(setBusinessName(e.target.value))}
         value={name}
        className="w-full p-3 border bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
         onChange={(e) => dispatch(setLocation(e.target.value))}
        className="w-full p-3 border bg-gray-200 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className='flex justify-center m-8'>
      <button
        type="submit"
        className="w-1/2 m-5 flex justify-center bg-blue-600 text-white py-3  hover:bg-blue-700 transition"
      >
        Submit
      </button>
      </div>
    </form>
  </div>
  <div className="md:w-1/2 w-full">
  {isLoading? <ShimmerBox /> : <></>}
  {dataFetched&&<DisplayBox/>}
</div>

 
</div>
</> )
}
export default Body
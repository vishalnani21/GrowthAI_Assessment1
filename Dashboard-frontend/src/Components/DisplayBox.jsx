import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { URL_DATA } from '../Utils/constants';
import { setGeneratedHeadline } from '../Utils/businessSlice';

const DisplayBox = () => {
  const dispatch = useDispatch();
  const { name, location, headline, rating, reviews } = useSelector((state) => state.business);
  const[error,setError]=useState("");
  const handleRegenerate = async () => {
    try{
     const response = await axios.get(URL_DATA+'regenerate-headline', {
        params: { name, location }
      });
    console.log(response);
    dispatch(setGeneratedHeadline(response.data.headline));
    }
    catch(err){
    setError(err.message);
    }  
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl bg-gray-100 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Business Summary</h2>
      <div className="space-y-3">
        <div>
          <h3 className="text-gray-500 text-sm">Business Name</h3>
          <p className="text-lg font-medium text-gray-800">{name || '-'}</p>
        </div>
        <div>
          <h3 className="text-gray-500 text-sm">Location</h3>
          <p className="text-lg font-medium text-gray-800">{location || '-'}</p>
        </div>

        <div>
          <h3 className="text-gray-500 text-sm">Headline</h3>
          <p className="text-lg font-semibold text-blue-700">{headline || 'No headline yet'}</p>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <div>
            <h3 className="text-gray-500 text-sm">Ratings</h3>
            <p className="text-lg text-yellow-500 font-semibold">{rating ?? '-'}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Reviews</h3>
            <p className="text-lg font-semibold text-gray-800">{reviews ?? '-'}</p>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={handleRegenerate}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Regenerate Headline
          </button>
        </div>
      </div>
    </div>
  );
};
export default DisplayBox;
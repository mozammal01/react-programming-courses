// import React from 'react';
import { FaBookOpen } from "react-icons/fa";
import { TfiMoney } from "react-icons/tfi";

import PropTypes from 'prop-types';

const Course = ({ course, handleAddToBookmarks }) => {
  const { cover, title, details, price, reading_time } = course;
  // console.log(course)
  return (
    <div className='border rounded-xl p-2 border-blue-700 bg-white'>

      <div className="p-1">
        <img src={cover} alt="" />
      </div>

      <div className='text-start'>
        <p className='font-semibold '>{title}</p>
        <p className='text-gray-500'>{details}</p>
      </div>

      <div className='text-gray-500 flex justify-between'>

        <div className="flex items-center">
          <TfiMoney className="text-black font-bold" />

          <p>Price: {price}</p>
        </div>

        <div className="flex items-center">
          <FaBookOpen className="text-black font-bold me-2" />

          <p>Credit: {reading_time}hr</p>
        </div>

      </div>
      <button onClick={() => handleAddToBookmarks(course, reading_time, price)} className="w-full py-3 border-none rounded-lg text-white bg-blue-600">Select</button>

    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleAddToBookmarks: PropTypes.func
  // handleCreditHour: PropTypes.func
};

export default Course;
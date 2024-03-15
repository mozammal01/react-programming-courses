// import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime, readingMoney, remainingTime }) => {
  return (
    <div className="w-1/4 bg-white rounded-lg max-h-96 text-start">
      <p  className='m-5 font-semibold text-blue-800'>Credit Hour Remaining: {remainingTime}</p>
      <p className='font-bold text-xl m-5'>Course Name</p>
      {
        bookmarks.map(bookmark => <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
        ></Bookmark>)
      }
      <hr className='mx-4' />
      <p className='m-5 font-semibold'>Total Credit Hour : {readingTime}</p>
      <hr />
      <p className='m-5 font-semibold'>Total Price: {readingMoney}</p>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
  readingMoney: PropTypes.number,
  remainingTime: PropTypes.number
};

export default Bookmarks;
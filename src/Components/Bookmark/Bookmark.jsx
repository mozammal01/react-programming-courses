// import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  const { title, id } = bookmark
  return (
    <div className='px-3 text-gray-500'>
      <p>{id}.{title}</p>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object
};

export default Bookmark;
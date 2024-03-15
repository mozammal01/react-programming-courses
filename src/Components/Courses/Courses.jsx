import { useEffect, useState } from 'react';
import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({ handleAddToBookmarks }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  return (
    <div className='w-3/4 grid grid-cols-3 gap-4'>
      {
        courses.map(course => <Course
          key={course.id}
          course={course}
          handleAddToBookmarks={handleAddToBookmarks}
          // handleCreditHour = {handleCreditHour}
        ></Course>)
      }
    </div>
  );
};

Courses.propTypes = {
  handleAddToBookmarks: PropTypes.func
  // handleCreditHour: PropTypes.func
};

export default Courses;
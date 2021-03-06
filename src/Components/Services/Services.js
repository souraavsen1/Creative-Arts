import React from "react";
import useCourses from "../Hooks/useCourses";
import Service from "./Service";
import serviceheader from '../Images/serviceheader.jpeg'

const Services = () => {
  // accessing courses from useCourses
  const [courses] = useCourses();

  return (
    <div>
      <img src={serviceheader} className='-mt-16' alt='' />
      <div className=' bg-gray-100 pt-4 pb-16'>
        <h1 className='text-6xl text-center py-8 font-semibold font_akronim'>
          Full Time <span className='text-green-500'>Courses</span>
        </h1>

        <div className='flex flex-col item-center'>
          <div className='w-5/6 mx-auto grid grid-cols-3'>
            {courses.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
          <button className='w-52 text-white font-semibold mx-auto px-6 mt-12 py-3 bg-green-500 rounded-full '>
            View More Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

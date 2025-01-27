import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className='flex h-[95vh] items-center justify-center'>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className='text-8xl font-bold text-teal-950'>404</h1>
          <p className='text-[16px] font-medium'>Page Not Found</p>
        </div>
        <Link to={'/'}>
          <button className='bg-teal-900 text-white font-medium px-6 py-2 rounded-md mt-4'>
            Home
          </button>
        </Link>
      </div>
    </section>
  )
}

export default PageNotFound;
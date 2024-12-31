import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className='max-w-[1280px] mx-auto min-h-[90vh] p-2 '>
      <div className='flex flex-col justify-center  items-center'>
        <h1 className='text-4xl font-bold text-center text-red-500'>Error 404 </h1>

        <button className='bg-blue-600 text-white text-2xl rounded p-2 mt-20' onClick={() => navigate('/')}> Bach to Home</button>
      </div>

    </div>
  )
}

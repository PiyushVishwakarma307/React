import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userId} = useParams();
  return (
    <div className='flex justify-center items-center h-full text-3xl font-bold p-4 bg-gray-600'>
      User: {userId}
    </div>
  )
}


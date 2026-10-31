import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate=useNavigate()

  return (
    <div className='absolute top-0 left-0 text-white w-full px-6 py-10 bg-gray-600 flex items-center justify-between'>
      <h1 onClick={()=>navigate('/')} className='cursor-pointer font-bold text-xl'>Tenth Pixel</h1>
      <div className='flex gap-30'>
        <Link className='text-lg' to={'/'}>Home</Link>
        <Link className='text-lg' to={'/product'}>Products</Link>
        <Link className='text-lg' to={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Nav

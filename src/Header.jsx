import React from 'react'
import Banner1 from './assets/banner5.png'

const Header = () => {
  return (
    <div className='w-full h-20 bg-zinc-400'>
      <img className='w-60 px-4 mb-2' src={Banner1} alt="" />
      <nav></nav>
    </div>
  )
}

export default Header
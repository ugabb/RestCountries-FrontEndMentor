import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-[#2b3945] flex justify-between px-3 py-8'>
        <p className='text-white font-bold'>Where in the world?</p>
        <p className='text-white'>Dark Mode</p>
    </div>  
  )
}

export default Navbar
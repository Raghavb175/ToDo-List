import React from 'react'

 const Navbar = () => {
  return (
    <nav className='flex justify-between text-white bg-slate-400 py-3 '>
      <div className="logo">
        <span className='font-bold texl-xl mx-10'>I logo</span>
      </div>
      <ul className='flex gap-8 mx-10'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>To Do</li>
      </ul>
    </nav>
  )
}
export default Navbar
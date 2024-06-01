import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaBook } from "react-icons/fa";
import { LuCakeSlice } from "react-icons/lu";

export const Nav = () => {
  return (
    <div className='titulo'>
      <div className='menu'>
        <Link to="/" className='enlaces'><FaHome color="skyblue" /> Home</Link>
        <Link to="/contacto" className='enlaces'><FaBook color="yellow"/> Contacto</Link>
      </div>
      <div className='logo'>
        <span>Happy Cake</span>
        <LuCakeSlice size={18} color="yellow" />
      </div>
    </div>
  )
}

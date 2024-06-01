import React from 'react'
import logo from '../assets/img/cake.png'

export const Home = () => {
    return (
        <div className='homepage'>
          <h1 className='letra-normal'>Bienvenido a <span className='negrita'>Happy Cake</span></h1>
          <h5>El lugar de los pasteles felices</h5>
          <img src={logo} alt="Pastel" className='img-pastel' />
        </div>
      )
}

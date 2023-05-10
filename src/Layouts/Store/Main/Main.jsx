import React from 'react'
import { Link } from 'react-router-dom'
import { MainCards } from './MainCards'

export const Main = () => {
  return (
    <div className='mains-store'>
        <div className='categorys'>
            <Link className='link'>Accesorios</Link>
            <Link className='link'>Energizantes</Link>
            <Link className='link'>Ropa</Link>
        </div>
        <div className='cards'>
            <MainCards/>
        </div>
    </div>
  )
}

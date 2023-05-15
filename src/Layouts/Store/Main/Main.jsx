import React from 'react'
import { Link } from 'react-router-dom'
import { Cards } from './Cards'

export const Main = () => {
  return (
    <div>
        <div className='main-categorys'>
            <Link className='links-store'>Acessorios</Link>
            <Link className='links-store'>Energizántes</Link>
            <Link className='links-store'>Ropa</Link>
        </div>
        <div className='main-cards'>
            <div className='cards-store'>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    </div>
  )
}

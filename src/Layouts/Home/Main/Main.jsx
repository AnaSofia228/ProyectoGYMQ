import React from 'react'
import { Cards } from './Cards'

export const Main = () => {
  return (
    <div className='home-main'>
        <div className='main-first'>
            <h2>PRE - ENTRENA</h2>
            <h3>con</h3>
            <h2>GYM<font color='#E5F513'>QU</font></h2>
            <h3>entrenamiento fisico</h3>
            <a href="/Home">Ver mas</a>
        </div>
        <div className='main-second'>
            <div className='main-card'>
                <Cards/>
                <Cards/>
            </div>
            <div className='main-social'>Main</div>
        </div>
    </div>
  )
}

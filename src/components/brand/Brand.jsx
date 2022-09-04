import React from 'react'
import './brand.css'
import{  google,slack,hostinger,} from './import.js'


const Brand = () => {
  return (
    <div className='skeez__section-brand'>
    <div><img src={google} alt="google"/></div>
    <div><img src={slack} alt="slack"/></div>
    <div><img src={hostinger} alt="hostinger"/></div>
    </div>
  )
}

export default Brand
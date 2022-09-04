import React from 'react'
import './features.css'
import l1 from '../../assets/so.png'
import l2 from '../../assets/mi.png'
import l3 from '../../assets/pa.png'





const Features = () => {
  return (



    <div className='scroll'> 
      <div className='container'>
      <div className='card1'>
        <div><img src={l1} alt="logo" className='l1' />
          
        </div> 
      </div>
        <div className='card2'>
      
          <img src={l2} alt="logo" className='l1' />
        </div>
        <div className='card3'>
          
          <img src={l3} alt="logo" className='l1' />
        </div>
      </div>
    </div>
  )
}

export default Features
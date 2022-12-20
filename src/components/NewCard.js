import React from 'react'
import image from '../images/book.jpg'

const NewCard = () => {
  return (
    <div className='container'>
       <div className='content'>
            <div className='content-image'>
                <img src={image}/>
            </div>
            <div className='content-items'>
                <div className='content-items-box'></div>
                <div className='content-items-text'><p>text</p></div>
                <div className='content-items-arrow'></div>
            </div>
       </div>
       <div className='arrow-down'>

       </div>
    </div>
    
    
   
  )
}

export default NewCard
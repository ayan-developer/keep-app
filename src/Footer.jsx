import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='text-white footer fixed-bottom bg-primary mt-5 '>
      <h6 className='text-center '>Copyright {year} Ⓒ Info. All rights reserved</h6>
    </div>
  )
}

export default Footer;
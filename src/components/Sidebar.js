import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='app__sidebar'>
      <h1>Store</h1>
      <div className='item'>
        <Link to="/">
          Product
        </Link>
      </div>
      <div className='item'>
        <Link to="brand">
          Brand
        </Link>
      </div>
      <div className='item'>
        <Link to="category">
          Category
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='app__sidebar'>
      <h1>Store</h1>
      <div className='item'>
        <NavLink to="/products">Product</NavLink>
        <div className='sub-item'>
          <div>Add Product</div>
          <div>List Product</div>
          <div>More</div>
        </div>
      </div>
      <div className='item'>
        <NavLink to="/brand">
          Brand
        </NavLink>
        <div className='sub-item'>
          <div>Add Brand</div>
          <div>List Brand</div>
          <div>More</div>
        </div>
      </div>
      <div className='item'>
        <NavLink to="/categorys">
          Category
        </NavLink>
        <div className='sub-item'>
          <div>Add Category</div>
          <div>List Category</div>
          <div>More</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='app__sidebar'>
      <h1>Store</h1>
      <div className='item'>
        Product
        <div className='sub-item'>
          <div>
            <Link to="/products">Add Product</Link>
          </div>
          <div>
            <Link to="/products-list">List Product</Link>
          </div>
        </div>
      </div>
      <div className='item'>
        Brand
        <div className='sub-item'>
          <div>
            <Link to="/brand">Add Brand</Link>
          </div>
          <div>
            <Link to="/brand-list">List Brand</Link>
          </div>
        </div>
      </div>
      <div className='item'>
        Category
        <div className='sub-item'>
          <div>
            <Link to="/categorys">Add Category</Link>
          </div>
          <div>
            <Link to="/categorys-list">List Category</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
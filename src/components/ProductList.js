import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductList = () => {

  const [productList, setProductList] = useState([]);

  const getProduct = async () => {
      const data = await axios.get('http://localhost:5050/products');
      console.log(data);
      setProductList(data.data);
  }

  useEffect(() => {
      getProduct();
  }, [])

  return (
      <div className='app__Product active'>

          <div className='app__Product-heading'>
              <h1>List Product</h1>
          </div>

          <table>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Price</th>
              </tr>
              {
                  productList.map((item) => {
                      return (
                          <tr>
                              <td>{item.product_id}</td>
                              <td>{item.product_name}</td>
                              <td>{item.product_description}</td>
                              <td>{item.product_qty}</td>
                              <td>{item.product_price}</td>
                          </tr>
                      )
                  })
              }
          </table>
      </div>
  )
}

export default ProductList
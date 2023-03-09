import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CategoryList = () => {

  const [categoryList, setCategoryList] = useState([]);

  const getCategory = async () => {
    const data = await axios.get('http://localhost:5050/category');
    console.log(data);
    setCategoryList(data.data);
  }

  useEffect(() => {
    getCategory();
  }, [])

  return (
    <div className='app__Product'>
      <div className='app__Product-heading'>
        <h1>List Category</h1>
      </div>

      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        {
          categoryList.map((item) => {
            return (
              <tr>
                <td>{item.category_id}</td>
                <td>{item.category_name}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default CategoryList
import axios from 'axios';
import { useEffect, useState } from 'react'

export const Category = () => {
  const [categoryList, setCategoryList] = useState([])

  const getCategoryList = async () => {
    const result = await axios.get('http://localhost:5050/category')
    setCategoryList(result.data)
  }

  useEffect(() => {
    getCategoryList()
  }, [])

  return (
    <div>
      <h2>Shop Our Top Categories</h2>
      <div className='container'>
        {
          categoryList.map(item => {
            return (
              <div className='category-item'>
                <p>{item.category_name}</p>
                <img src={`${item.category_image}`} alt={item.category_name} />
              </div>
            )
          })
        }
      </div>
    </div>
  )

}
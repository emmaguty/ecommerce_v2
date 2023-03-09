import React, { useEffect, useState } from 'react'
import axios from 'axios';


const BrandList = () => {
  const [brandList, setBrandList] = useState([]);

  const getBrand = async () => {
    const data = await axios.get('http://localhost:5050/brand');
    console.log(data);
    setBrandList(data.data);
  }

  useEffect(() => {
    getBrand();
  }, [])

  return (
    <div className='app__Product'>
          <div className='app__Product-heading'>
              <h1>List Brand</h1>
          </div>

      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        {
          brandList.map((item) => {
            return (
              <tr>
                <td>{item.brand_id}</td>
                <td>{item.brand_name}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default BrandList
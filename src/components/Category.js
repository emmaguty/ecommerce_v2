import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Category = () => {

  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  // const [brand, setBrand] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", name);
    formData.append("image_url", image);
    // formData.append("brand_url", brand);

    const result = await axios.post('http://localhost:5050/category', formData)

    alert(result.data);

  }

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
      <h1>Add Category</h1>
      <form>
        <div>
          <label for="">Name</label>
          <input onChange={(e) => setName(e.target.value)} type={"text"} name="" required />
        </div>
        <div>
          <label for="">Image</label>
          <input onChange={(e) => setImage(e.target.files[0])} type={"file"} name="" required />
        </div>
        <button onClick={handleSubmit}>Add Category</button>
      </form>
    </div>
  )
}

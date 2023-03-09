import React, {useState } from 'react'
import axios from 'axios';

export const Brand = () => {


  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", name);
    formData.append("image_url", image);

    const result = await axios.post('http://localhost:5050/brand', formData)

    alert(result.data);

  }

  return (
    <div className='app__Product'>
      <div className='app__Product-heading'>
        <h1>Add Brand</h1>
      </div>
      <form>
        <div>
          <label for="">Name</label>
          <input onChange={(e) => setName(e.target.value)} type={"text"} name="" required />
        </div>
        <div>
          <label for="">Image</label>
          <input onChange={(e) => setImage(e.target.files[0])} type={"file"} name="" required />
        </div>
        <button onClick={handleSubmit}>Add Brand</button>
      </form>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Product = () => {

    const [productList, setProductList] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("product_qty", qty);
        formData.append("product_price", price);
        formData.append("category_id", category);
        formData.append("brand_id", brand);
        formData.append("image_url", image);

        const result = await axios.post('http://localhost:5050/product', formData)

        alert(result.data);

    }

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
                <h1>Add Product</h1>
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
            <form>
                <div>
                    <label for="">Name</label>
                    <input onChange={(e) => setName(e.target.value)} type={"text"} name="" required />
                </div>
                <div>
                    <label for="">Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} type={"text"} name="" required />
                </div>
                <div>
                    <label for="">Quantity</label>
                    <input onChange={(e) => setQty(e.target.value)} type={"text"} name="" required />
                </div>
                <div>
                    <label for="">Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} type={"text"} name="" required />
                </div>
                <div>
                    <label for="">Image</label>
                    <input onChange={(e) => setImage(e.target.files[0])} type={"file"} name="" required />
                </div>
                <div>
                    <label for="">Category</label>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option name="" value="">Please Select Category</option>
                        <option name="" value="1">Category One</option>
                    </select>
                </div>
                <div>
                    <label for="">Brand</label>
                    <select onChange={(e) => setBrand(e.target.value)}>
                        <option value="">Please Select Brand</option>
                        <option value="1">Brand one</option>
                    </select>
                </div>
                <button onClick={handleSubmit}>Add Product</button>
            </form>
        </div>
    )
}

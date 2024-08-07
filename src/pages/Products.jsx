import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    const fetchProducts = async () => {
        const responce  = await axios.get("https://fakestoreapi.com/products");
        if(responce.status===200){
            const data = responce.data;
            console.log(data)
            setProducts(data);
        }
       

    }
     
    useEffect(()=>{
        fetchProducts();
    },[])
    
    return ( 
    <>
    <h1>Product page</h1>
        {
            products.map((element)=>{
                return(
                    <ProductCard key = {element.id} title= {element.title} decription={element.description}
                    imageUrl= {element.image} clickHandler={()=>{navigate("/product-details/"+ element.id)}}
                    />
                )

            })
    }
    </> );
}
 
export default Products;
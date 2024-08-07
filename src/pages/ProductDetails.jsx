import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const ProductDetails = () => {

    const [product,setProduct] = useState([])
    const Id = useParams()
    const productId = Id.productId;
    console.log(productId)

    const fetchingSpecificProduct = async()=>{
        const responce = await axios.get("https://fakestoreapi.com/products/" + productId)
        console.log("responce in fetching specific",responce)
        setProduct(responce.data)

    }

    useEffect(()=>{
        fetchingSpecificProduct();
    },[])

    return (<>
        {(product?<>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <img src={product.image} alt={product.title} />
        </>
            :
            <><h1>No Product Found</h1></>)}
    </>  );
}
 
export default ProductDetails;
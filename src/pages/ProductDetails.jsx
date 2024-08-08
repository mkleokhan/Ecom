import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const ProductDetails = () => {

    const [product,setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const Id = useParams()

    const productId = Id.productId;
 

    const fetchingSpecificProduct = async()=>{
        const response = await axios.get("https://fakestoreapi.com/products/" + productId)
        console.log("responce in fetching specific",response)

        if(response.data){
            setProduct(response.data)
            setErrorMessage("")
        }
        else {
            if(productId )
                {
                    setErrorMessage("invalid Product Id")
                    console.log(errorMessage)
            }
                else{
                setErrorMessage("You didn't pass an id")
                console.log( errorMessage)
            }
        }


       


    }

    useEffect(()=>{
        fetchingSpecificProduct();
    },[errorMessage])

    return (<>

        {(productId?<>
            {errorMessage?<>
        <h1>{errorMessage}</h1>
        </>
        :
        <><h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <img src={product.image} alt={product.title} /></>}
        
        </>     
         
            :
            <><h1>{errorMessage}</h1></>)}
    </>  );
}
 
export default ProductDetails;
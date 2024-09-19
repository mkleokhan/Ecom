import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../Redux/Cart/cartActions";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const category = useParams().category;

  const fetchProducts = async () => {
    const responce = await axios.get("https://fakestoreapi.com/products");
    if (responce.status === 200) {
      const data = responce.data;
      console.log("Responce.data= ", data);
      setProducts(data);
      setSearchResults(data);

      // setProducts(data);
    }
  };

  const hanldeSearch = (e) => {
    // alert("clicked....");
    console.log(e.target.value);
    const results = products.filter((element) => {
      if (element.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    });
    setSearchResults(results);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <input
        type="text"
        className="form-control mt-4"
        placeholder="Search your product"
        onChange={hanldeSearch}
      />
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {category ? (
            <>
              {searchResults.map((element) => {
                if (element.category === category)
                  return (
                    <ProductCard
                      title={element.title}
                      key={element.id}
                      decription={element.description}
                      price={element.price}
                      imageUrl={element.image}
                      clickHandler={() => {
                        navigate(`/product-details/${element.id}`);
                      }}
                    />
                  );
              })}
            </>
          ) : (
            <>
              {searchResults.map((element) => {
                return (
                  <ProductCard
                    title={element.title}
                    id={element.id}
                    decription={element.description}
                    price={element.price}
                    imageUrl={element.image}
                    clickHandler={() => {
                      navigate(`/product-details/${element.id}`);
                    }}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;

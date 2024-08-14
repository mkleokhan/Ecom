import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const category = useParams().category;

  const fetchProducts = async () => {
    const responce = await axios.get("https://fakestoreapi.com/products");
    if (responce.status === 200) {
      const data = responce.data;
      setProducts(data);

      // setProducts(data);
    }
  };
  console.log("printing category", category);
  const hanldeSearch = (e) => {
    const results = products.filter((element) => {
      if (element.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    });
    setProducts(results);
  };

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Product page</h1>

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
              <h1>Category Found</h1>
              {products.map((element) => {
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
              {products.map((element) => {
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
          )}
        </div>
      </div>
    </>
  );
};

export default Products;

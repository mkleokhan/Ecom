import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Products from "./Products";
import ProductCard from "../components/ProductCard";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const responce = await axios.get("https://fakestoreapi.com/products");
    if (responce.status == 200) {
      const data = responce.data;
      //   console.log("fetched", data);
      const categoryArray = data.map((element) => {
        return element.category;
      });

      const uniqueCategories = new Set(categoryArray);
      console.log("unique Categories in list", uniqueCategories);
      setCategories(Array.from(uniqueCategories));
    }
  };
  console.log("CATEGORIES: ", categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">Categories</h1>
      {categories.map((element) => {
        return (
          <>
            <Link
              className="flex mt-4"
              to={`/products/${encodeURIComponent(element)}`}
              element={<Products />}
            >
              {element}
            </Link>
          </>
        );
      })}
    </>
  );
};

export default Categories;

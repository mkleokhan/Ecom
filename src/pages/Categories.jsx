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
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            className="text-lg font-medium text-blue-600 hover:text-blue-800"
            to={`/products/${encodeURIComponent(category)}`}
          >
            {category}
          </Link>
        ))}
      </div>
      {/* <Products /> */}
    </>
  );
};

export default Categories;

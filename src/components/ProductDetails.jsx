import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import './ProductDetails.css'
export default function ProductDetail() {
  const { id } = useParams();  // Get the product id from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product data by ID
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;  // Show loading until product data is fetched
  }

  return (
    <div className="product-detail">
      <Link to="/">Back to Products</Link>
      <div className="product-detail-info">
        {product.images.length > 1 ? <ImageSlider imgArr={product.images} /> : <img src={product.thumbnail} loading="lazy" />}
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span>${product.price}</span>
        <h3>Category: {product.category}</h3>
        <h3>Brand: {product.brand}</h3>
      </div>
    </div>
  );
}
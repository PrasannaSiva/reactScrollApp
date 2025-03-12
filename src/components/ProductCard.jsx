import ImageSlider from "./ImageSlider.jsx";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <li className="product-item">
            <article>
                <Link to={`/product/${product.id}`} className="product-link">
                    {product.images.length > 1 ? <ImageSlider imgArr={product.images} /> : <img src={product.thumbnail} loading="lazy" />}
                    <div>
                        <h3>{product.brand}</h3>
                        <h4>{product.title}</h4>
                        <p className="product-item-price">Price $ {product.price}</p>
                    </div>
                </Link>
            </article>
        </li>
    );
}

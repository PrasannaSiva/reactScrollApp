export default function ProductCard({ product }) {
    return (
        <li className="product-item">
            <article>
            <img src={product.thumbnail} loading="lazy"/>
                <div>
                    <h3>{product.brand}</h3>
                    <h4>{product.title}</h4>
                    <p className="product-item-price">Price $ {product.price}</p>
                </div>
            </article>
        </li>
    );
}

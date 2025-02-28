import { useEffect, useState ,useRef,useCallback} from "react";
import ProductCard from "./ProductCard.jsx";

export default function Products() {
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); // Track loading state
    const loader = useRef(null);
    async function fetchProducts(page) {
        if (loading) return;
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=${page * 6}&skip=${((page - 1) * 6)}`);
        const fetchedProducts = await response.json();
        setLoadedProducts(prevItems => {
            return [...prevItems,...fetchedProducts.products];
        });
        setLoading(false);
    }
    useEffect(() => {
        fetchProducts(page);
    }, []);
    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
        setPage((prevPage) => {
            const nextPage = prevPage + 1;
            fetchProducts(nextPage);
            return nextPage;
          });
        }      
      }, [loading]);
      useEffect(() => {
        const option = {
          root: null,
          rootMargin: "20px",
          threshold: 0.25
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
        return () => {
            if (loader.current) observer.unobserve(loader.current);
          };
      }, [handleObserver]);
    return (
    <><ul id='product'>{loadedProducts.map(
        (item,idx) => <ProductCard key={idx} product={item}></ProductCard>
    )}</ul>
    {loading && <div className="loading-spinner">Loading...</div>} {/* Loading indicator */}
    <div ref={loader} id='intersection'></div>
    </>);
}

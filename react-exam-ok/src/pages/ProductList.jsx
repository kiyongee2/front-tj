import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ProductList() {
  return (
    <section>
      <h2>상품 목록</h2>
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

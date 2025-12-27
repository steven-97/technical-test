import ProductCard from "./ProductCard";

export default function ProductList({ products, onEdit, onRefresh }) {
  if (!products || products.length === 0) {
  return <p className="empty">No hay productos aún </p>;
}

  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onRefresh={onRefresh}
        />
      ))}
    </div>
  );
}
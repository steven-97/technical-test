import { deleteProduct } from "../services/productService";

export default function ProductCard({ product, onEdit, onRefresh }) {

  const handleDelete = async () => {
    if (!confirm("¿Seguro que deseas eliminar este producto?")) return;

    await deleteProduct(product.id);
    onRefresh();
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.descr}</p>
      <span className="price">${product.price}</span>

      <div className="actions">
        <button
          className="edit-btn"
          onClick={() => onEdit(product)}
        >
          Editar
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { createProduct, updateProduct } from "../services/productService";

export default function ProductForm({ productToEdit, onFinish }) {
  const [form, setForm] = useState({ name: "", descr: "", price: "" });

  
  useEffect(() => {
    if (productToEdit) {
      setForm({
        name: productToEdit.name,
        descr: productToEdit.descr,
        price: productToEdit.price
      });
    }
  }, [productToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (productToEdit) {
      await updateProduct(productToEdit.id, {
        ...form,
        price: Number(form.price)
      });
    } else {
      await createProduct({
        ...form,
        price: Number(form.price)
      });
    }

    setForm({ name: "", descr: "", price: "" });
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{productToEdit ? "Editar producto" : "Nuevo producto"}</h2>

      <input
        placeholder="Nombre"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        placeholder="Descripción"
        value={form.descr}
        onChange={e => setForm({ ...form, descr: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Precio"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
        required
      />
      {productToEdit && (
  <button
    type="button"
    className="cancel-btn"
    onClick={onFinish}
  >
    Cancelar
  </button>
)}


      <button type="submit">
        {productToEdit ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
  
}
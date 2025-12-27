import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { getProducts } from "./services/productService";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Gestión de Productos</h1>
      </header>

      <section className="form-section">
        <ProductForm
          productToEdit={productToEdit}
          onFinish={() => {
            setProductToEdit(null);
            loadProducts();
          }}
        />
      </section>

      <section className="list-section">
        <ProductList
          products={products}
          onEdit={setProductToEdit}
          onRefresh={loadProducts}
        />
      </section>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { productService } from "../services/productService";

function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [editingId, setEditingId] = useState("");

  const [name, setName] = useState("");

  const [price, setPrice] = useState(0);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await productService.getAll();

    setProducts(data);
  }

  async function saveProduct() {
    if (editingId) {
      await productService.update(editingId, {
        name,
        price,
      });

      setEditingId("");
    } else {
      await productService.create({
        name,
        price,
      });
    }

    clearForm();

    await loadProducts();
  }

  async function deleteProduct(id: string) {
    await productService.delete(id);

    await loadProducts();
  }

  function editProduct(product: Product) {
    setEditingId(product.id);

    setName(product.name);

    setPrice(product.price);
  }

  function clearForm() {
    setName("");

    setPrice(0);

    setEditingId("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Catalogo de Produto</h1>

      <div>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <button onClick={saveProduct}>{editingId ? "Update" : "Save"}</button>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>

              <td>R$ {product.price}</td>

              <td>
                <button onClick={() => editProduct(product)}>Edit</button>

                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;

import { api } from "../../../shared/services/api";
import { Product } from "../models/Product";

export const productService = {
  async getAll(): Promise<Product[]> {
    const response = await api.get<Product[]>("/products");

    return response.data;
  },

  async create(product: { name: string; price: number }) {
    return api.post("/products", product);
  },

  async update(
    id: string,
    product: {
      name: string;
      price: number;
    },
  ) {
    return api.put(`/products/${id}`, product);
  },

  async delete(id: string) {
    return api.delete(`/products/delete/${id}`);
  },
};

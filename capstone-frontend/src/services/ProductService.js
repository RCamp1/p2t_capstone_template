// src/services/ProductService.js
import axios from 'axios';

export async function getProducts() {
    const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/product`);
    return data;
}

// This function retrieves a product by its ID and has been created for you, but you will need to import it in your components as needed.
export async function getProductById(id) {
    const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/product/${id}`);
    return data;
}
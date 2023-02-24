import axios from "axios";

const API_BASE = process.env.API_BASE;
const PRODUCTS_API = `${API_BASE}/api/products`;

export const api = axios.create({withCredentials: false});

export const findAllProducts = async () => {
    const response = await axios.get(PRODUCTS_API);
    return response.data;
}

export const findProductByProductName = async () => {
    const response = await axios.get(`${PRODUCTS_API}/${productName}`);
    return response.data;
}

export const findProductById = async () => {
    const response = await axios.get(`${PRODUCTS_API}/${pid}`);
    return response.data;
}
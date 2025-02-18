import axios from "axios";
import { Item } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch all items
export const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get<Item[]>(API_URL);
  return response.data.slice(0, 5); // Limit to 10 items
};

// Create a new item
export const createItem = async (newItem: Item): Promise<Item> => {
  const response = await axios.post<Item>(API_URL, newItem);
  return response.data;
};

// Update an item
export const updateItem = async (id: number, updatedItem: Item): Promise<Item> => {
  const response = await axios.put<Item>(`${API_URL}/${id}`, updatedItem);
  return response.data;
};

// Delete an item
export const deleteItem = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};

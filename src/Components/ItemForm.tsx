import { useState, useEffect } from "react";
import { Item } from "../types";

type Props = {
  onSubmit: (item: Item) => void;
  editingItem: Item | null;
};

const ItemForm: React.FC<Props> = ({ onSubmit, editingItem }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editingItem) {
      setTitle(editingItem.title);
      setBody(editingItem.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [editingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    onSubmit({ id: editingItem ? editingItem.id : Date.now(), title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-3 bg-white/30 placeholder-gray-200 text-white rounded-md focus:ring-2 focus:ring-blue-300">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 bg-white/30 placeholder-gray-200 text-white rounded-md focus:ring-2 focus:ring-blue-300"
      />
      <textarea
        placeholder="Description"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-3 bg-white/30 placeholder-gray-200 text-white rounded-md focus:ring-2 focus:ring-blue-300"
      />
      <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition">
        {editingItem ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
};

export default ItemForm;

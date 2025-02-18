import { useEffect, useState } from "react";
import { fetchItems, createItem, updateItem, deleteItem } from "./api/api";
import ItemList from "./Components/ItemList";
import ItemForm from "./Components/ItemForm";
import { Item } from "./types";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  const handleAddOrUpdateItem = async (item: Item) => {
    if (editingItem) {
      const updatedItem = await updateItem(item.id, item);
      setItems(items.map((i) => (i.id === updatedItem.id ? updatedItem : i)));
      setEditingItem(null);
    } else {
      const newItem = await createItem(item);
      setItems([newItem, ...items]);
    }
  };

  const handleDeleteItem = async (id: number) => {
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-700 via-grey-700 to-lime-700 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md shadow-lg p-6 rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-4"> RAYAN </h1>
        <ItemForm onSubmit={handleAddOrUpdateItem} editingItem={editingItem} />
        <ItemList items={items} onDelete={handleDeleteItem} onEdit={setEditingItem} />
      </div>
    </div>
  );
};

export default App;

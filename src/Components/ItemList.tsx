import { Item } from "../types";

type Props = {
    items: Item[];
    onDelete: (id: number) => void;
    onEdit: (item: Item) => void;
};

const ItemList: React.FC<Props> = ({ items, onDelete, onEdit }) => {
    return (
        <div className="mt-4 space-y-4">
            {items.length === 0 ? (
                <p className="text-center text-gray-200">No items found. Add one! 🚀</p>
            ) : (
                <ul className="space-y-4">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className="p-4 bg-white/20 backdrop-blur-md shadow-md rounded-xl text-white hover:scale-105 transition"
                        >
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-200">{item.body}</p>
                            <div className="mt-3 flex space-x-2">
                                <button
                                    onClick={() => onEdit(item)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
                                >
                                    ✏ Edit
                                </button>
                                <button
                                    onClick={() => onDelete(item.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                                >
                                    ❌ Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemList;

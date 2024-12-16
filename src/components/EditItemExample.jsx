import { useState } from "react";

const EditItemExample = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");

  const startEditing = (id, currentName) => {
    setEditingId(id);
    setNewName(currentName);
  };

  const saveEdit = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
    setEditingId(null); // Exit editing mode
    setNewName(""); // Clear input
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewName("");
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editingId === item.id ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button onClick={() => saveEdit(item.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {item.name}{" "}
                <button onClick={() => startEditing(item.id, item.name)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditItemExample;

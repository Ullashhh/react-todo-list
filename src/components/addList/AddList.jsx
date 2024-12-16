import { useState } from "react";
import ListItem from "../listItem/ListItem";
import ListHead from "../listHead/ListHead";
import Form from "../form/Form";

const AddList = () => {
  const [lists, setLists] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newLists = [...lists, e.target[0].value];
    setLists(newLists);
    e.target[0].value = "";
  };

  const onDeleteHandler = (id) => {
    const newLists = lists.filter((list, index) => id !== index);
    setLists(newLists);
  };

  const startEditing = (id, currentName) => {
    setEditingId(id);
    setNewName(currentName);
  };

  const saveEdit = (id) => {
    setLists((prevItems) =>
      prevItems.map((item, idx) => (idx === id ? newName : item))
    );
    setEditingId(null);
    setNewName("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewName("");
  };

  return (
    <div className="my-10">
      <Form onSubmitHandler={onSubmitHandler}></Form>
      <ListHead lists={lists}></ListHead>
      <ListItem
        lists={lists}
        onDeleteHandler={onDeleteHandler}
        editingId={editingId}
        cancelEdit={cancelEdit}
        saveEdit={saveEdit}
        startEditing={startEditing}
        newName={newName}
        setNewName={setNewName}
      ></ListItem>
    </div>
  );
};

export default AddList;

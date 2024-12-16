import { useState } from 'react';
const ListItem = ({lists, onDeleteHandler, startEditing, editingId, cancelEdit, saveEdit, newName, setNewName}) => {
  const [dayCount,setDayCount] = useState(new Date().getDay());
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let fullDay; 
   setDayCount(
     days.map((day, idx) => {
       if (idx === dayCount) {
         fullDay = day;
       }
     })
   );

  return (
    <>
      {lists.map((list, index) => (
        <div key={index} className="mt-10">
          {editingId === index ? (
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={() => saveEdit(index)}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            null
          )}
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{list}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {new Date().toLocaleDateString("en-US")}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {fullDay}
                    </span>
                  </td>
                  <td>{new Date().toLocaleTimeString("bd")}</td>
                  <th>
                    <button
                      onClick={() => startEditing(index, list)}
                      className="btn btn-ghost"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteHandler(index)}
                      className="btn btn-ghost"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListItem;

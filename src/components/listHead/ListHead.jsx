const ListHead = ({ lists }) => {
  return (
    <div className="mt-5">
      {lists.length === 0 ? (
        "yet to add to do list"
      ) : (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Functionalities</th>
            </tr>
          </thead>
        </table>
      )}
    </div>
  );
};

export default ListHead;

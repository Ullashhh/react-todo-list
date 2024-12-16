const Form = ({onSubmitHandler}) => {
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          className="py-2 px-3 rounded"
          type="text"
          placeholder="Enter list name"
        />
        <button type="submit">Add List</button>
      </form>
    </div>
  );
}

export default Form

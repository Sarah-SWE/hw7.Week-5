const ListOfTasks = ({ tasks, onDelete, onEdit, onToggleComplete }) => {
  return (
    <div>
      {tasks.map((e) => {
        return (
          <div
            key={e.id}
            className="border border-white   bg-transperent rounded p-2 d-flex my-3"
          >
            <input
              type="checkbox"
              className="me-2 p-3 border-0"
              checked={e.isComplete}
              onChange={() => onToggleComplete(e.id)}
            />
            <label
              style={{
                textDecoration: e.isComplete ? "line-through" : "none",
                color: e.isComplete ? "gray" : "white",
              }}
            >
              {e.text}
            </label>
            <div className="ms-auto d-flex gap-2">
              <button
                onClick={() => onDelete(e.id)}
                className=" rounded border-0 px-2 bg-transparent text-danger"
              >
                Delete
              </button>
              <button
                onClick={() => onEdit(e)}
                className="rounded border-0 px-2 bg-transparent text-danger  "
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfTasks;

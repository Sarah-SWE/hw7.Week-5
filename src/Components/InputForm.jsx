import { useEffect, useState } from "react";

const InputForm = ({ onAddTask, editedTask }) => {
  const [text, setText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (editedTask) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setText(editedTask.text);
      setIsCompleted(editedTask.isComplete);
    }
  }, [editedTask]);

  const handleBtnClick = () => {
    if (!text.trim()) return;
    onAddTask({
      id: editedTask ? editedTask.id : null,
      text: text,
      isComplete: isCompleted,
    });
    setText("");
  };
  return (
    <div className="d-flex gap-2 my-3">
      <input
        type="text"
        className="form-control w-75 "
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Add a new task..."
      />
      <button
        type="button"
        className="rounded bg-primary text-white border-0 p-1 w-25 "
        onClick={handleBtnClick}
      >
        {editedTask ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default InputForm;

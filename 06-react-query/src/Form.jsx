import { useState } from "react";
import { toast } from "react-toastify";
import { useCreateTask } from "./queryCustomHooks";

const Form = () => {
  const { createTask, isPending } = useCreateTask();

  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(
      { title: newItemName },
      {
        onSuccess: () => {
          toast.success("Task added");
          setNewItemName("");
        },
        onError: (error) => {
          toast.error(error.response.data.msg);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isPending}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;

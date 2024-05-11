import { useDeleteTask, useEditTask } from "./queryCustomHooks";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {
  const { updateTask } = useEditTask();
  const { deleteTask, isLoading } = useDeleteTask();

  const handleUpdate = () => {
    updateTask(item, {
      onSuccess: () => {
        toast.success(
          `${item.title} is marked as ${
            item.isDone ? "incomplete" : "complete"
          }`
        );
      },
      onError: (error) => {
        toast.error(error.response.data.msg);
      },
    });
  };

  const handleDelete = () => {
    deleteTask(item, {
      onError: (error) => {
        toast.error(error.response.data.msg);
      },
      onSuccess: () => {
        toast.success(`${item.title} deleted!`);
      },
    });
  };

  return (
    <div className="single-item">
      <input type="checkbox" checked={item.isDone} onChange={handleUpdate} />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={isLoading}
        onClick={handleDelete}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;

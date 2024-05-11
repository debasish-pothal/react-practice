import SingleItem from "./SingleItem";
import { useReadTasks } from "./queryCustomHooks";

const Items = () => {
  const [isLoading, isError, items] = useReadTasks();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred!</p>;
  }

  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";

export const useReadTasks = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });

  return [isLoading, isError, data?.taskList];
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (data) => customFetch.post("/", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { createTask, isPending };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: updateTask } = useMutation({
    mutationFn: ({ id, isDone }) =>
      customFetch.patch(`${id}`, { isDone: !isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { updateTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: ({ id }) => customFetch.delete(`${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { deleteTask, isLoading };
};

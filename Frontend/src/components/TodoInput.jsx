import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "../graphql/tasks";
import { addTask } from "../redux/todoSlice";

export default function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const [addTaskMutation] = useMutation(ADD_TASK);

  const handleAdd = async () => {
    if (!title.trim()) return;

    try {
      const { data } = await addTaskMutation({
        variables: { title, completed: false },
      });

      if (data?.addTask) {
        dispatch(addTask(data.addTask));
      }
    } catch (err) {
      alert("Server not connected. Please start backend.");
      return;
    }

    setTitle("");
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}









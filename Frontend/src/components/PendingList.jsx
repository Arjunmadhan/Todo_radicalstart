import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { MARK_COMPLETE } from "../graphql/tasks";
import { markComplete as markCompleteRedux } from "../redux/todoSlice";

export default function PendingList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) =>
    state.todo.tasks.filter((t) => !t.completed)
  );

  const [markCompleteMutation] = useMutation(MARK_COMPLETE);

  const handleComplete = (taskId) => {

    dispatch(markCompleteRedux(taskId));

    markCompleteMutation({ variables: { id: taskId } });
  };

  return (
    <ul className="list-group">
      <h2>Listed Names:</h2>
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item">
          {task.title}
          <input
            type="checkbox"
            onChange={() => handleComplete(task.id)}
          />
        </li>
      ))}
    </ul>
  );
}








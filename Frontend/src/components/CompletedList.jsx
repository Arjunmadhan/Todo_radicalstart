import { useSelector } from 'react-redux';
export default function CompletedList() {
  const tasks = useSelector(state => state.todo.tasks.filter(t => t.completed));

  return (
    <div className="completed">
      <h2>Completed Names:</h2>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}



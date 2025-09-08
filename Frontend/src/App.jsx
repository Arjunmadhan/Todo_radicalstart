import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CompletedList from './components/CompletedList';
import PendingList from './components/PendingList';
import TodoInput from './components/TodoInput';
import { GET_TASKS } from './graphql/tasks';
import { setTasks } from './redux/todoSlice';

export default function App() {
  const dispatch = useDispatch();
  const { data } = useQuery(GET_TASKS);

  useEffect(() => {
    if (data?.tasks) dispatch(setTasks(data.tasks));
  }, [data, dispatch]);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoInput />
      <PendingList />
      <CompletedList />
    </div>
  );
}




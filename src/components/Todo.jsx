import { useContext } from 'react';
import { TodosContext } from './TodoWrapper';
import UncompletedTodo from './UncompletedTodo';
import CompletedTodo from './CompletedTodo';

export default function Todo() {
  const todos = useContext(TodosContext);
  return (
    <>
      <UncompletedTodo todos={todos} />
      <CompletedTodo todos={todos} />
    </>
  );
}

import { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from './TodoWrapper';
import EditTodoForm from './EditTodoForm';

export default function UncompletedTodo() {
  const todos = useContext(TodosContext);
  return (
    <>
      {todos.filter((todo) => !todo.completed).length > 0 && (
        <h2>Uncompleted Task</h2>
      )}
      {todos
        .filter((todo) => !todo.completed)
        .map((todo) =>
          todo.editing ? (
            <EditTodoForm key={todo.id} todo={todo} />
          ) : (
            <TodoItem key={todo.id} todo={todo} />
          )
        )}
    </>
  );
}

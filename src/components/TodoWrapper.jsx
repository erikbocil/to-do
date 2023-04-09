import { createContext, useEffect, useReducer } from 'react';
import TodoForm from './TodoForm';
import { ACTION } from './action';
import Todo from './Todo';

function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ACTION_ADD:
      return [
        ...todos,
        {
          id: new Date().valueOf(),
          name: action.payload.name,
          completed: false,
          editing: false,
        },
      ];

    case ACTION.ACTION_DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);

    case ACTION.ACTION_SET_COMPLETE:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case ACTION.ACTION_SET_EDIT:
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, editing: true } : todo
      );

    case ACTION.ACTION_UPDATE:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name, editing: false }
          : todo
      );

    default:
      return todos;
  }
}

export const TodosContext = createContext();
export const DispatchContext = createContext();

export default function TodoWrappper() {
  const initialTodos =
    localStorage.getItem('todos') === null
      ? []
      : JSON.parse(localStorage.getItem('todos'));
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  useEffect(
    () => localStorage.setItem('todos', JSON.stringify(todos)),
    [todos]
  );

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <TodosContext.Provider value={todos}>
          <div className="container">
            <h1>Input Todo</h1>
            <TodoForm />
            <Todo />
          </div>
        </TodosContext.Provider>
      </DispatchContext.Provider>
    </>
  );
}

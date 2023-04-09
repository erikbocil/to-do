import { useContext, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ACTION } from './action';
import { DispatchContext } from './TodoWrapper';

export default function EditTodoForm({ todo }) {
  const dispatch = useContext(DispatchContext);
  const [value, setValue] = useState(todo.name);
  const ref = useRef();
  const id = todo.id;
  function handleSubmit(e) {
    e.preventDefault();
    if (value === '') {
      ref.current.focus();
      return false;
    }
    dispatch({
      type: ACTION.ACTION_UPDATE,
      payload: { id: id, name: ref.current.value },
    });
    ref.current.value = '';
    toast.success('Data berhasil diubah');
  }

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="input"
          placeholder="Input todo"
          value={value}
          ref={ref}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn">
          Edit Task
        </button>
      </form>
    </>
  );
}

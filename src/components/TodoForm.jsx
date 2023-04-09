import { useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ACTION } from './action';
import { DispatchContext } from './TodoWrapper';

export default function TodoForm() {
  const ref = useRef();
  const dispatch = useContext(DispatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (ref.current.value === '') {
      ref.current.focus();
      return false;
    }
    dispatch({ type: ACTION.ACTION_ADD, payload: { name: ref.current.value } });
    toast.success('Data berhasil ditambah');
    ref.current.value = '';
  }

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="input"
          placeholder="Input todo"
          ref={ref}
        />
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
    </>
  );
}

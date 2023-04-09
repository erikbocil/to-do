import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faCheck,
  faPenToSquare,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { ACTION } from './action';
import { toast } from 'react-toastify';
import { DispatchContext } from './TodoWrapper';
import { useContext } from 'react';

export default function TodoItem({ todo }) {
  const dispatch = useContext(DispatchContext);
  const id = todo.id;
  const completed = todo.completed;

  function setEdit(id) {
    dispatch({ type: ACTION.ACTION_SET_EDIT, payload: { id: id } });
  }

  function deleteTodo(id) {
    dispatch({ type: ACTION.ACTION_DELETE, payload: { id: id } });
    toast.success('Data berhasil dihapus');
  }

  function setCompleted(id) {
    dispatch({ type: ACTION.ACTION_SET_COMPLETE, payload: { id: id } });
  }

  return (
    <>
      <div className="item">
        {todo.name}
        <div className="icon">
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => setEdit(id)} />
          <FontAwesomeIcon
            icon={completed ? faUndo : faCheck}
            onClick={() => setCompleted(id)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(id)} />
        </div>
      </div>
    </>
  );
}

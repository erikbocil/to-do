import './App.css';
import TodoWrappper from './components/TodoWrapper';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme="dark" position="top-right" />
      <TodoWrappper />
    </>
  );
}

export default App;

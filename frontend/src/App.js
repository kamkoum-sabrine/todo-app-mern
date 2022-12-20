import logo from './logo.svg';

import './App.css';
import './assets/css/style.css'
import { TodoList } from './components/todoList'
import { List } from './components/list';


function App() {
  return (
    <div className=" ">

      <TodoList />
      <List />
    </div>
  );
}

export default App;

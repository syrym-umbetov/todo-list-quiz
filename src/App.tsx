import React, { FC } from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import TodoOne from './pages/TodoOne';
import Quiz from './pages/Quiz';
import Trello from './pages/Trello';
import Practice from './pages/Practice';
import UserList from './components/UserList';

const App: FC = () => {
  return (
    <div>
      <div className='App'>
        <Link to='/todo-one' className='todo__list'>
          Todo List
        </Link>
        <Link className='todo__list' to='/quiz'>
          Quiz
        </Link>
        <Link className='todo__list' to='/trello'>
          Trello
        </Link>
        <Link className='todo__list' to='/practice'>
          Practice
        </Link>
        <Link className='todo__list' to='/userlist'>
          Ulbi TV
        </Link>
      </div>
      <Routes>
        <Route path='/todo-one' element={<TodoOne />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/trello' element={<Trello />}></Route>
        <Route path='/practice' element={<Practice />}></Route>
        <Route path='/userlist' element={<UserList />}></Route>
      </Routes>
    </div>
  );
};

export default App;

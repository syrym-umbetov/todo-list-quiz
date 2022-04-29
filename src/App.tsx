import React, { FC } from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import TodoOne from './pages/TodoOne';
import Quiz from './pages/Quiz';

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
      </div>
      <Routes>
        <Route path='/todo-one' element={<TodoOne />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
      </Routes>
    </div>
  );
};

export default App;

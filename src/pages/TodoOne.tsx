import React, { ChangeEvent, FC, useState } from 'react';
import { ITask } from './../Interfaces';
import './TodoOne.css';
import TodoTask from './../components/TodoTask';

const TodoOne: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, taskId: Math.floor(Math.random() * Date.now()), deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };
  const completeTask = (taskIdToDelete: number): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskId !== taskIdToDelete;
      })
    );
  };
  return (
    <div className='todo'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Task...'
            onChange={handleChange}
            name='task'
            value={task}
          />
          <input
            type='number'
            name='deadline'
            value={deadline}
            placeholder='Deadline (in Days)...'
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default TodoOne;

import React from 'react';
import { ITask } from './../Interfaces';
import { Checkbox } from '@mui/material'
import './TodoTask.css'

interface Props {
  task: ITask;
  completeTask(taskIdToDelete: number): void;
  isTaskDone(taskId: number): void;
}

const TodoTask = ({ task, completeTask, isTaskDone }: Props) => {

  return (
    <div className='task'>
      <Checkbox checked={task.complete} onChange={() => isTaskDone(task.taskId)} />
      <div className='content'>
        <span className={task.complete ? "title text" : 'title'} >{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskId);
        }}
      >
        Delete Item
      </button>
    </div>
  );
};

export default TodoTask;

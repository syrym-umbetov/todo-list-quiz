import React from 'react';
import { ITask } from './../Interfaces';

interface Props {
  task: ITask;
  completeTask(taskIdToDelete: number): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{task.taskName}</span>
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

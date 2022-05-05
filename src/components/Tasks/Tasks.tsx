import React, { FC } from 'react';
import './Tasks.css';

import TodayTasks from './../TodayTasks';
import TomorrowTasks from './../TomorrowTasks';
import Overdue from './../Overdue';

export type Task = {
  items: [];
  stage: string;
  stageName: string;
};

export type Client = {
  clientId?: string;
  clientName?: string;
  createTimestamp: string | number | Date;
  plannedEndTime?: string;
  plannedStartTime?: string;
  taskId?: string;
  taskTypeId?: number;
  taskTypeName?: string;
};
type Props = {
  tasks: Task[];
};

const Tasks: FC<Props> = ({ tasks }) => {
  return (
    <div className='overdue'>
      {tasks.map((item: Task, index) => (
        <div className='parent'>
          <Overdue item={index === 0 ? item.items : []} />
          <TodayTasks item={index === 1 ? item.items : []} />
          <TomorrowTasks item={index === 2 ? item.items : []} />
        </div>
      ))}
    </div>
  );
};

export default Tasks;

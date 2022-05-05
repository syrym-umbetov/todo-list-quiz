import React, { useEffect, useState } from 'react';
import Tasks, { Task } from '../components/Tasks/Tasks';
import { fetchTasks } from '../API/trelloApi';

const Trello = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then((data: Task[]) => setTasks(data));
  }, []);

  return (
    <div>
      <h2 style={{ fontWeight: '400', fontSize: '16px' }}>Tasks</h2>
      <div>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

export default Trello;

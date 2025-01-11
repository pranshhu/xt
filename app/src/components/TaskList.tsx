"use client"
import { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.status} (Mission: {task.mission_id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
"use client"
import { useEffect, useState } from 'react';

const RobotList = () => {
  const [robots, setRobots] = useState<any[]>([]);

  useEffect(() => {
    const fetchRobots = async () => {
      const response = await fetch('/api/robots');
      const data = await response.json();
      setRobots(data);
    };

    fetchRobots();
  }, []);

  return (
    <div>
      <h2>Robots</h2>
      <ul>
        {robots.map((robot) => (
          <li key={robot.id}>
            {robot.name} - {robot.status} (Battery: {robot.battery_level}%)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RobotList;
"use client"
import { useEffect, useState } from 'react';

const MissionList = () => {
  const [missions, setMissions] = useState<any[]>([]);

  useEffect(() => {
    const fetchMissions = async () => {
      const response = await fetch('/api/missions');
      const data = await response.json();
      setMissions(data);
    };

    fetchMissions();
  }, []);

  return (
    <div>
      <h2>Missions</h2>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>
            {mission.name} - {mission.status} (Robot: {mission.assigned_robot_id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionList;
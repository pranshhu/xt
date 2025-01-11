"use client"
import { useEffect, useState } from 'react';

const AlertList = () => {
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      const response = await fetch('/api/alerts');
      const data = await response.json();
      setAlerts(data);
    };

    fetchAlerts();
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id}>
            {alert.type} - {alert.status} (Robot: {alert.robot_id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertList;
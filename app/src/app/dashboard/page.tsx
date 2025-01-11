import RobotList from '@/components/RobotList';
import AlertList from '@/components/AlertList';
import MissionList from '@/components/MissionList';
import TaskList from '@/components/TaskList';

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Robot Fleet Management</h1>
      <RobotList />
      <AlertList />
      <MissionList />
      <TaskList />
    </div>
  );
}
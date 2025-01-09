# Backend Documentation

## Technology Stack
- **Framework**: Node.js with Express.js.
- **Database**: PostgreSQL for relational data storage.
- **Authentication**: JSON Web Tokens (JWT).
- **Real-Time Communication**: WebSockets (Socket.IO).
- **Real-Time Video Streaming**: WebRTC for live video feeds.
- **API Design**: RESTful APIs for CRUD operations and WebSocket endpoints for real-time updates.

## Database Schema
- **Tables**:
  1. **Users**:
     - `id`, `username`, `email`, `password_hash`, `role` (Admin, Manager, Operator).
  2. **Robots**:
     - `id`, `name`, `status`, `location`, `battery_level`, `cpu_usage`, `ram_usage`, `temperature`, `speed`, `height`.
  3. **Alerts**:
     - `id`, `robot_id`, `type` (e.g., low battery, offline), `status` (active/resolved), `timestamp`.
  4. **Audit Logs**:
     - `id`, `admin_id`, `action` (e.g., user created, role assigned), `timestamp`.
  5. **Missions**:
     - `id`, `name`, `description`, `assigned_robot_id`, `status`, `start_time`, `end_time`.
  6. **Tasks**:
     - `id`, `mission_id`, `name`, `description`, `status`, `assigned_robot_id`.

## API Endpoints
1. **Authentication**:
   - `POST /api/auth/login`: User login.
   - `POST /api/auth/register`: Admin-only user registration.
2. **Users**:
   - `GET /api/users`: Get all users (Admin-only).
   - `POST /api/users`: Create a new user (Admin-only).
   - `PUT /api/users/:id`: Update user role (Admin-only).
   - `DELETE /api/users/:id`: Delete a user (Admin-only).
3. **Robots**:
   - `GET /api/robots`: Get all robots.
   - `GET /api/robots/:id`: Get details of a specific robot.
   - `PUT /api/robots/:id`: Update robot status (e.g., offline, active).
4. **Alerts**:
   - `GET /api/alerts`: Get all alerts.
   - `PUT /api/alerts/:id`: Acknowledge/resolve an alert.
5. **Missions**:
   - `GET /api/missions`: Get all missions.
   - `POST /api/missions`: Create a new mission.
   - `PUT /api/missions/:id`: Update mission details.
6. **Tasks**:
   - `GET /api/tasks`: Get all tasks.
   - `POST /api/tasks`: Create a new task.
   - `PUT /api/tasks/:id`: Update task details.

## WebSocket Endpoints
- `/ws/robots`: Real-time updates for robot status.
- `/ws/alerts`: Real-time alerts for critical events.
- `/ws/video`: Real-time video feed from robots.
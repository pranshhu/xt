# Backend Documentation

## Technology Stack
- **Framework**: Node.js with Express.js.
- **Database**: PostgreSQL for relational data storage.
- **Authentication**: JSON Web Tokens (JWT).
- **Real-Time Communication**: WebSockets (Socket.IO).
- **Real-Time Video Streaming**: WebRTC for live video feeds.

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

## WebSocket Endpoints
- `/ws/robots`: Real-time updates for robot status.
- `/ws/alerts`: Real-time alerts for critical events.
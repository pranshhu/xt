# Frontend Documentation

## Technology Stack
- **Framework**: React.js with Next.js for server-side rendering.
- **Styling**: TailwindCSS for responsive, minimalist, and modern design.
- **State Management**: Zustand for lightweight global state management.
- **Real-Time Communication**: WebSockets (Socket.IO) for live updates.
- **UI Library**: Material-UI for pre-built components with dark mode support.

## Navigation
- **Structure**:
  - Vertical navigation bar on the right side with icons only.
  - Icons: Dashboard, Robots, Analytics, Alerts, Team (admin-only), Settings, Logo.

## Key Components
1. **Dashboard**:
   - Real-time robot status (Active, Idle, Offline).
   - Interactive map view showing robot locations.
   - Key Performance Indicators (KPIs) for fleet health.
2. **Robots Page**:
   - List of robots with detailed information (name, status, location, battery level, CPU usage, RAM usage, video feed).
   - Task assignment and monitoring capabilities.
   - Command sending to robots.
3. **Analytics Page**:
   - Historical data visualization for performance analysis.
   - Reporting features for generating insights.
4. **Alerts Page**:
   - Real-time alerts for critical issues.
   - Customizable alert thresholds.
5. **Team Page**:
   - Admin-only page for managing users and roles.
   - Data sharing and insights collaboration.
6. **Settings Page**:
   - System configuration options for administrators.
   - User preferences management.
7. **Mission Planning Page**:
   - Plan missions with varying levels of detail.
   - Assign tasks to robots or allow intelligent task allocation.
8. **Teleoperation Page**:
   - Remote control features for operating robots.
9. **Route Optimization Page**:
   - Advanced algorithms for optimizing robot paths.
10. **Geofencing Page**:
    - Set virtual boundaries for robots.
11. **Simulation Environment**:
    - Test workflows without deploying actual robots.
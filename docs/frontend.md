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
   - Cards for overview, critical alerts, active robots count, and average battery status.
2. **Robots Page**:
   - List of robots with name, status, location, battery level, and video feed.
3. **Analytics Page**:
   - Detailed charts and graphs for robot data.
4. **Alerts Page**:
   - Table of alerts with acknowledgment/resolution buttons.
5. **Team Page**:
   - Admin-only page for managing users and roles.
6. **Settings Page**:
   - Forms for user profile and notification preferences.
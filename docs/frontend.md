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

### **1. Dashboard**
- **Purpose**: Centralized view of fleet health and robot status.
- **Features**:
  - Real-time robot status (Active, Idle, Offline).
  - Interactive map showing robot locations.
  - Key Performance Indicators (KPIs) for fleet health (battery levels, CPU usage, RAM usage).

### **2. Robots Page**
- **Purpose**: Manage and monitor individual robots.
- **Features**:
  - **Robot Details**:
    - Display robot information (name, status, location, battery level, CPU usage, RAM usage).
    - Live video feed integration using WebRTC.
  - **Task Management**:
    - Assign tasks to robots.
    - Send commands to robots (e.g., start, stop, move).
  - **Mission Planning**:
    - Plan missions with varying levels of detail.
    - Assign tasks to robots or allow intelligent task allocation.
    - Monitor mission progress and completion.
  - **Teleoperation**:
    - Remote control features for operating robots.
    - Send movement commands (e.g., forward, backward, turn).
    - Receive real-time feedback (e.g., video feed, sensor data).
  - **Route Optimization**:
    - Advanced algorithms to optimize robot paths.
    - Minimize travel time and energy consumption.
  - **Geofencing**:
    - Set virtual boundaries for robots.
    - Monitor robot movements and generate alerts if boundaries are violated.

### **3. Analytics Page**
- **Purpose**: Analyze historical data and generate insights.
- **Features**:
  - Historical data visualization (e.g., battery usage trends, task completion rates).
  - Reporting features for generating insights.
  - Export reports as PDF or CSV.

### **4. Alerts Page**
- **Purpose**: Monitor and resolve real-time alerts.
- **Features**:
  - Display real-time alerts (e.g., low battery, robot offline, high temperature).
  - Acknowledge and resolve alerts.
  - Customizable alert thresholds based on user preferences.

### **5. Team Page**
- **Purpose**: Manage users and roles (admin-only).
- **Features**:
  - Add/remove users.
  - Assign/revoke roles (Admin, Manager, Operator).
  - Log admin actions for audit purposes.

### **6. Settings Page**
- **Purpose**: Configure system and user settings.
- **Features**:
  - Update user profile (e.g., name, email, password).
  - Configure notification preferences.
  - Set system-wide configurations (admin-only).

## State Management
- **Global State**:
  - Zustand for managing user roles, robot data, and alerts.
- **Local State**:
  - React Context API for component-specific state (e.g., form inputs, selected robot).

## Styling
- **Approach**:
  - TailwindCSS for responsive, minimalist, and modern design.
  - Dark mode support for better user experience.
- **Components**:
  - Pre-built Material-UI components for consistency and speed.

## Real-Time Updates
- **WebSockets**:
  - Real-time updates for robot status, alerts, and video feeds.
- **WebRTC**:
  - Live video streaming from robots.

## Responsiveness
- **Mobile-Friendly**:
  - Fully responsive design for desktop and mobile devices.
  - Optimized navigation and interactions for touch devices.
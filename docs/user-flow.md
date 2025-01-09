# User Flow Documentation

## 1. User Authentication Flow

```mermaid
graph TD
    A[User Visits Application] --> B{Is User Logged In?}
    B -- Yes --> C[Dashboard]
    B -- No --> D[Login Page]
    D --> E{Login Successful?}
    E -- Yes --> C
    E -- No --> F[Display Error Message]
    F --> D
    C --> G{Is User Admin?}
    G -- Yes --> H[Admin Dashboard]
    G -- No --> I{Is User Manager?}
    I -- Yes --> J[Manager Dashboard]
    I -- No --> K[Operator Dashboard]

graph TD
    A[User Logs In] --> B[Dashboard]
    B --> C[Fetch Real-Time Robot Status]
    C --> D[Display Active, Idle, Offline Robots]
    B --> E[Fetch Robot Locations]
    E --> F[Display Interactive Map]
    B --> G[Fetch Fleet Health KPIs]
    G --> H[Display Battery Levels, CPU Usage, RAM Usage]

graph TD
    A[User Navigates to Robots Page] --> B[Fetch Robot List]
    B --> C[Display Robot Details: Name, Status, Location, Battery Level, CPU Usage, RAM Usage]
    C --> D[User Selects Robot]
    D --> E[Display Live Video Feed]
    D --> F[Display Task Assignment Options]
    F --> G[Assign Task to Robot]
    G --> H[Send Command to Robot]


graph TD
    A[User Navigates to Mission Planning Page] --> B[Create New Mission]
    B --> C[Add Tasks to Mission]
    C --> D[Assign Tasks to Robots]
    D --> E[Monitor Mission Progress]
    E --> F{Is Mission Complete?}
    F -- Yes --> G[Mark Mission as Complete]
    F -- No --> E

    graph TD
    A[User Navigates to Teleoperation Page] --> B[Select Robot for Remote Control]
    B --> C[Establish Connection with Robot]
    C --> D[Display Real-Time Video Feed]
    D --> E[Send Movement Commands: Forward, Backward, Turn]
    E --> F[Receive Feedback from Robot]

    graph TD
    A[Robot Detects Issue] --> B[Generate Alert]
    B --> C[Send Alert to Backend]
    C --> D[Display Alert on Dashboard]
    D --> E[User Acknowledges Alert]
    E --> F[Mark Alert as Resolved]

    graph TD
    A[User Navigates to Analytics Page] --> B[Fetch Historical Robot Data]
    B --> C[Generate Performance Reports]
    C --> D[Display Charts and Graphs]
    D --> E[Export Reports as PDF/CSV]

    graph TD
    A[Admin Navigates to Team Page] --> B[Fetch User List]
    B --> C[Display User Details: Name, Email, Role]
    C --> D[Add New User]
    D --> E[Assign Role to User]
    E --> F[Log Admin Action in Audit Log]

    graph TD
    A[User Navigates to Settings Page] --> B[Fetch User Profile]
    B --> C[Display Profile Details: Name, Email, Password]
    C --> D[Update Profile]
    D --> E[Save Changes]
    A --> F[Fetch Notification Preferences]
    F --> G[Display Notification Settings]
    G --> H[Update Preferences]
    H --> E

    graph TD
    A[User Navigates to Route Optimization Page] --> B[Fetch Robot Locations]
    B --> C[Calculate Optimal Routes]
    C --> D[Display Optimized Paths]
    D --> E[Send Routes to Robots]
    E --> F[Monitor Route Execution]

    graph TD
    A[Admin Navigates to Geofencing Page] --> B[Define Virtual Boundaries]
    B --> C[Monitor Robot Movements]
    C --> D{Is Robot Outside Boundary?}
    D -- Yes --> E[Generate Alert]
    D -- No --> C

    graph TD
    A[User Navigates to Simulation Page] --> B[Create Simulated Mission]
    B --> C[Assign Tasks to Simulated Robots]
    C --> D[Run Simulation]
    D --> E[Analyze Simulation Results]

    graph TD
    A[IoT Sensor Detects Data] --> B[Send Data to Backend]
    B --> C[Process Sensor Data]
    C --> D[Update Robot Performance Metrics]
    D --> E[Display Data on Dashboard]

    graph TD
    A[Admin Initiates Firmware Update] --> B[Check for Updates]
    B --> C[Push Update to Robots]
    C --> D[Verify Update Success]
    D --> E[Log Update Status]

    graph TD
    A[User Submits Feedback] --> B[Send Feedback to Backend]
    B --> C[Log Feedback in Database]
    C --> D[Notify Support Team]
    D --> E[Resolve Feedback]
    E --> F[Notify User of Resolution]

    graph TD
    A[Developer Authenticates API Request] --> B[Fetch Data from Backend]
    B --> C[Return Data to Developer]
    C --> D[Developer Sends Command to Backend]
    D --> E[Execute Command on Robot]

    graph TD
    A[Admin Navigates to Compliance Page] --> B[Fetch Compliance Data]
    B --> C[Generate Compliance Report]
    C --> D[Display Report]
    D --> E[Export Report as PDF/CSV]

    graph TD
    A[Admin Navigates to Benchmarking Page] --> B[Fetch Performance Metrics]
    B --> C[Compare Metrics to Industry Standards]
    C --> D[Generate Benchmarking Report]
    D --> E[Display Report]

    graph TD
    A[Monitor Data Movement] --> B{Is Data Sensitive?}
    B -- Yes --> C[Block Unauthorized Access]
    B -- No --> D[Allow Data Movement]
    C --> E[Log DLP Event]

    graph TD
    A[User Accesses App on Mobile] --> B[Detect Device Screen Size]
    B --> C[Adjust Layout for Mobile]
    C --> D[Optimize Navigation for Touch]
    D --> E[Display Mobile-Friendly UI]

    graph TD
    A[User Navigates to Training Page] --> B[Access Training Materials]
    B --> C[Practice Workflows in Simulation]
    C --> D[Track Training Progress]

    graph TD
    A[Fetch Energy Usage Data] --> B[Display Real-Time Consumption]
    B --> C[Optimize Robot Operations]
    C --> D[Reduce Energy Usage]

    graph TD
    A[Connect to External System] --> B[Fetch Data from ERP/WMS/MES]
    B --> C[Sync Data with Application]
    C --> D[Send Updates to External System]

    graph TD
    A[Add New Robot to Fleet] --> B[Scale Backend Infrastructure]
    B --> C[Monitor System Performance]
    C --> D[Ensure Smooth Operation]

    graph TD
    A[Implement Single Sign-On (SSO)] --> B[Log User Activities]
    B --> C[Enforce Role-Based Permissions]
    C --> D[Monitor Security Events]

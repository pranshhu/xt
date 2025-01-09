# User Flow Documentation

## Flow Diagram
```mermaid
graph TD
    A[User Visits Application] --> B{Is User Logged In?}
    B -- Yes --> C[Dashboard]
    B -- No --> D[Login Page]
    D --> E{Login Successful?}
    E -- Yes --> C
    E -- No --> D

    C --> F[Navigation Bar]
    F --> G[Dashboard]
    F --> H[Robots Page]
    F --> I[Analytics Page]
    F --> J[Alerts Page]
    F --> K[Team Page]
    F --> L[Settings Page]

    G --> M[Display Overview]
    M --> N[Show Active Robots Count]
    M --> O[Show Average Battery Status]
    M --> P[Show Critical Alerts]

    H --> Q[Display List of Robots]
    Q --> R[Show Robot Details: Name, Status, Location, Battery Level, CPU Usage, RAM Usage, Video Feed]

    I --> S[Display Analytics]
    S --> T[Show Robot Metrics: Temperature, Speed, Height, Joint Movements, Torque]

    J --> U[Display Alerts]
    U --> V[Show Alert History]
    V --> W[Allow Acknowledgment/Resolution of Alerts]

    K --> X{Is User Admin?}
    X -- Yes --> Y[Display Team Management]
    Y --> Z[Add/Remove Users]
    Y --> AA[Assign/Revoke Roles]
    X -- No --> AB[Team Page Hidden]

    L --> AC[Display Settings]
    AC --> AD[User Profile]
    AC --> AE[Notification Preferences]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style G fill:#bbf,stroke:#333,stroke-width:2px
    style H fill:#bbf,stroke:#333,stroke-width:2px
    style I fill:#bbf,stroke:#333,stroke-width:2px
    style J fill:#bbf,stroke:#333,stroke-width:2px
    style K fill:#bbf,stroke:#333,stroke-width:2px
    style L fill:#bbf,stroke:#333,stroke-width:2px
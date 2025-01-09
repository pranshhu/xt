# User Flow Documentation

## Unified User Flow Diagram
```mermaid
graph TD
    A[User Visits App] --> B{Logged In?}
    B -- Yes --> C[Dashboard]
    B -- No --> D[Login Page]
    D --> E{Login Success?}
    E -- Yes --> C
    E -- No --> D

    C --> F[Navigation Bar]
    F --> G[Dashboard]
    F --> H[Robots Page]
    F --> I[Analytics Page]
    F --> J[Alerts Page]
    F --> K[Team Page]
    F --> L[Settings Page]

    G --> M[Fetch Robot Status]
    M --> N[Display Active, Idle, Offline Robots]
    G --> O[Fetch Robot Locations]
    O --> P[Display Map]
    G --> Q[Fetch KPIs]
    Q --> R[Display Battery, CPU, RAM]

    H --> S[Fetch Robot List]
    S --> T[Display Robot Details]
    T --> U[User Selects Robot]
    U --> V[Show Live Video Feed]
    U --> W[Assign Task to Robot]
    W --> X[Send Command to Robot]
    U --> Y[Plan Missions]
    Y --> Z[Assign Tasks to Robots]
    Z --> AA[Monitor Mission Progress]
    AA --> AB{Complete?}
    AB -- Yes --> AC[Mark as Complete]
    AB -- No --> AA
    U --> AD[Remote Control Robot]
    AD --> AE[Send Movement Commands]
    AE --> AF[Receive Feedback]
    U --> AG[Optimize Robot Paths]
    AG --> AH[Calculate Optimal Routes]
    AH --> AI[Send Routes to Robots]
    AI --> AJ[Monitor Route Execution]
    U --> AK[Set Virtual Boundaries]
    AK --> AL[Monitor Robot Movements]
    AL --> AM{Outside Boundary?}
    AM -- Yes --> AN[Generate Alert]
    AM -- No --> AL

    I --> AO[Fetch Historical Data]
    AO --> AP[Generate Reports]
    AP --> AQ[Display Charts]
    AQ --> AR[Export Reports]

    J --> AS[Robot Detects Issue]
    AS --> AT[Generate Alert]
    AT --> AU[Send Alert to Backend]
    AU --> AV[Display Alert]
    AV --> AW[User Acknowledges Alert]
    AW --> AX[Mark as Resolved]

    K --> AY[Admin Goes to Team Page]
    AY --> AZ[Fetch Users]
    AZ --> BA[Display User Details]
    BA --> BB[Add User]
    BB --> BC[Assign Role]
    BC --> BD[Log Action]

    L --> BE[User Goes to Settings Page]
    BE --> BF[Fetch Profile]
    BF --> BG[Display Profile]
    BG --> BH[Update Profile]
    BH --> BI[Save Changes]
    BE --> BJ[Fetch Notifications]
    BJ --> BK[Display Notifications]
    BK --> BL[Update Notifications]
    BL --> BI
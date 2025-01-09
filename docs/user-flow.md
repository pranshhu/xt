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
    F --> M[Mission Planning Page]
    F --> N[Teleoperation Page]
    F --> O[Route Optimization Page]
    F --> P[Geofencing Page]
    F --> Q[Simulation Page]

    G --> R[Fetch Robot Status]
    R --> S[Display Active, Idle, Offline Robots]
    G --> T[Fetch Robot Locations]
    T --> U[Display Map]
    G --> V[Fetch KPIs]
    V --> W[Display Battery, CPU, RAM]

    H --> X[Fetch Robot List]
    X --> Y[Display Robot Details]
    Y --> Z[User Selects Robot]
    Z --> AA[Show Live Video Feed]
    Z --> AB[Assign Task to Robot]
    AB --> AC[Send Command to Robot]

    I --> AD[Fetch Historical Data]
    AD --> AE[Generate Reports]
    AE --> AF[Display Charts]
    AF --> AG[Export Reports]

    J --> AH[Robot Detects Issue]
    AH --> AI[Generate Alert]
    AI --> AJ[Send Alert to Backend]
    AJ --> AK[Display Alert]
    AK --> AL[User Acknowledges Alert]
    AL --> AM[Mark as Resolved]

    K --> AN[Admin Goes to Team Page]
    AN --> AO[Fetch Users]
    AO --> AP[Display User Details]
    AP --> AQ[Add User]
    AQ --> AR[Assign Role]
    AR --> AS[Log Action]

    L --> AT[User Goes to Settings Page]
    AT --> AU[Fetch Profile]
    AU --> AV[Display Profile]
    AV --> AW[Update Profile]
    AW --> AX[Save Changes]
    AT --> AY[Fetch Notifications]
    AY --> AZ[Display Notifications]
    AZ --> BA[Update Notifications]
    BA --> AX

    M --> BB[User Goes to Mission Page]
    BB --> BC[Create Mission]
    BC --> BD[Add Tasks]
    BD --> BE[Assign Tasks to Robots]
    BE --> BF[Monitor Progress]
    BF --> BG{Complete?}
    BG -- Yes --> BH[Mark as Complete]
    BG -- No --> BF

    N --> BI[User Goes to Teleoperation Page]
    BI --> BJ[Select Robot]
    BJ --> BK[Connect to Robot]
    BK --> BL[Show Video Feed]
    BL --> BM[Send Commands]
    BM --> BN[Receive Feedback]

    O --> BO[User Goes to Route Page]
    BO --> BP[Fetch Robot Locations]
    BP --> BQ[Calculate Routes]
    BQ --> BR[Display Routes]
    BR --> BS[Send to Robots]
    BS --> BT[Monitor Execution]

    P --> BU[Admin Goes to Geofencing Page]
    BU --> BV[Define Boundaries]
    BV --> BW[Monitor Robots]
    BW --> BX{Outside Boundary?}
    BX -- Yes --> BY[Generate Alert]
    BX -- No --> BW

    Q --> BZ[User Goes to Simulation Page]
    BZ --> CA[Create Mission]
    CA --> CB[Assign Tasks]
    CB --> CC[Run Simulation]
    CC --> CD[Analyze Results]
# KotiSpot — Sprint 2

KotiSpot is a real-estate platform for browsing, buying, selling, and renting properties. This repository contains the team's academic Sprint 2 submission.

Sprint 2 developed the frontend and backend as independent applications. The React frontend uses static and mock data, while the Express backend implements the corresponding server-side structure and persistence. Frontend–backend integration is planned for Sprint 3.

## Sprint 2 Goal

- Develop a responsive React interface for property discovery, account views, listing management, and administration journeys.
- Build an Express backend using the MVC pattern, including models, controllers, routes, middleware, validation, and error handling.
- Use MongoDB and Mongoose for backend persistence.
- Keep the frontend and backend data structures compatible while developing both applications independently.
- Use static or mock data for frontend workflows.
- Represent login, registration, and role-based views as simulations only; real authentication and authorization are outside the Sprint 2 scope.
- Defer frontend–backend integration to Sprint 3.

## Repository Structure

```text
KotiSpot-sprint2/
├── backend/                           # Express MVC application
├── frontend/                          # React application
├── img/                               # Contribution evidence
├── README.md
├── sprint-2-backlog-and-user-stories.md
├── sprint-ceremony-insights.md
└── team-contributions.md
```

## Technology

| Area | Technologies |
| --- | --- |
| Frontend | React, Vite, React Router, Tailwind CSS |
| Backend | Node.js, Express, MongoDB, Mongoose |
| Development approach | Independent frontend and backend work with agreed data structures |

## Running the Applications

Install and run each application independently from its own directory.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

The backend requires a local environment configuration containing `MONGO_URI`. `PORT` is optional and defaults to `4000`.

```bash
cd backend
npm install
npm run dev
```

The two applications are not connected in Sprint 2.

## Sprint Documentation

- [Sprint 2 Backlog and User Stories](./sprint-2-backlog-and-user-stories.md)
- [Sprint Ceremony Insights](./sprint-ceremony-insights.md)
- [Team Contributions](./team-contributions.md)
- [Complete Product Backlog and User Stories](https://github.com/amaroqq/KotiSpot-sprint1/blob/sprint-1/product-backlog-and-user-stories.md)

The complete Product Backlog is maintained in the Sprint 1 repository. This repository documents the Product Backlog items selected for Sprint 2.

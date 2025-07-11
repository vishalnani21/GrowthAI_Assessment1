# GrowthAI_Assessment
# GrowthAI Dashboard

A full-stack dashboard application built with React (Vite) frontend and Express backend. It provides business data management with dynamic headline generation.

---

## Features

- React + Vite for fast, modern frontend
- Redux Toolkit for state management
- Express backend APIs for business data and headline regeneration
- Responsive UI with Tailwind CSS
- Loading states with shimmer UI

---

## Project Structure

```bash
GrowthAI_Assessment1/
├── Dashboard-frontend/          # React frontend (Vite + Redux)
│   ├── public/                  # Public assets
│   ├── src/
│   │   ├── Components/          # React components (DisplayBox, Body, ShimmerBox)
│   │   ├── Utils/               # Redux slice and constants
│   │   ├── App.jsx              # Main React component
│   │   ├── main.jsx             # App entry point
│   │   └── index.css            # Tailwind CSS and global styles
│   ├── .env                     # Frontend environment variables (VITE_API_URL)
│   ├── vite.config.js           # Vite configuration
│   └── package.json             # Frontend dependencies and scripts
│
├── Dashboard-backend/          # Node.js Express backend
│   ├── src/
│   │   ├── Router/
│   │   │   └── businessRoutes.js # API endpoints for business data & headline
│   ├── .env                     # Backend environment variables (PORT)
│   ├── index.js                 # Server entry point
│   └── package.json             # Backend dependencies and scripts
│
├── .gitignore
└── README.md
```

### Prerequisites

- Node.js (v16+ recommended)
- Git

---

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/vishalnani21/GrowthAI_Assessment1.git
cd GrowthAI_Assessment1
```

2.  **Install Backend Dependencies**

Navigate to the backend folder and install dependencies:

```bash
cd Dashboard-backend
npm install
```
3. **Start the Backend Server**
Start the backend server with:


```bash
node src/app.js

The backend server will run at: http://localhost:3000.
```

4. **Install Frontend Dependencies**
Open a new terminal window/tab and navigate to the frontend folder:

```bash
cd ../Dashboard-frontend
npm install
```
5. **Start the Frontend Server**
Start the React frontend development server:

```bash

npm run dev
The frontend will be available at: http://localhost:5173.
```

6. ***Access the Application***
Open your browser and go to: http://localhost:5173

Ensure your backend server is running (http://localhost:3000) before interacting with the frontend.


***If you want to run on browser***

links:frontend-https://growthai-assessment1frontend.vercel.app/
      backend-https://growthai-assessment1backend.onrender.com
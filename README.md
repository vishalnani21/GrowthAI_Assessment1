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

/src # React frontend source code
/components # React components
/utils # Redux slices, constants, etc.
package.json # Frontend dependencies and scripts


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
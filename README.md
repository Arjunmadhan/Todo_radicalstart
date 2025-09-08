Project Concept:
Users can type a task name and click the Add button to move it to the Listed Tasks section. When a task’s checkbox is clicked, it automatically moves to the Completed Tasks section. This provides an interactive way to track pending and finished tasks in real time.

A full-stack Todo Application built using React, Redux Toolkit, GraphQL, Node.js, Express, Sequelize, and MySQL. This application allows users to manage tasks efficiently with a clean and responsive interface, providing real-time interaction between the frontend and backend.

Features

Add Tasks: Users can add tasks to their todo list. Tasks are stored in a MySQL database via the backend server.

Mark Complete: Tasks can be marked as completed, and completed tasks are displayed separately.

Server Connection Handling: The frontend detects server availability. If the backend is not connected, the application shows an alert and only displays local tasks without affecting the UI.

Real-time Updates: Using GraphQL, tasks are updated in real-time between the frontend and backend.

Persistent Storage: All tasks are stored in MySQL ensuring that data persists even after the app is closed or refreshed.

Technologies Used

Frontend:

React (functional components and hooks)

Redux Toolkit for state management

Apollo Client for GraphQL queries and mutations

Responsive and user-friendly UI

Backend:

Node.js and Express.js

GraphQL for API queries and mutations

=> Install backend dependencies and start the server:

cd backend
npm install
node index.js

=> Install frontend dependencies and start the frontend:

cd frontend
npm install
npm run dev
Sequelize ORM for MySQL database interaction

MySQL database for storing tasks

MySql=> Use your table for storing data.
create schema todoapp;
use todoapp;
CREATE TABLE IF NOT EXISTS tasks (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
SELECT DATABASE();
select *from tasks;

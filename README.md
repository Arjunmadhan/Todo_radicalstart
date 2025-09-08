# Todo App — Full Stack (React, Redux Toolkit, GraphQL, Node.js, Express, Sequelize, MySQL)

A full-stack Todo Application that allows users to add, complete, and manage their tasks efficiently with a clean, real-time interface. This project demonstrates seamless real-time interaction between frontend and backend, persistent storage with MySQL, and robust server connection handling.

---

## 🖥️ Local Development Ports

- **Frontend:** runs on `http://localhost:5174`
- **Backend (GraphQL API):** runs on `http://localhost:4000/graphql`

---

## 🚀 Project Overview

- **Add Tasks:** Users can type a task name and click “Add”; tasks appear in the Listed Tasks section.
- **Mark Complete:** Clicking a task’s checkbox automatically moves it to the Completed Tasks section.
- **Real-time Updates:** Tasks are updated in real-time between frontend and backend using GraphQL.
- **Persistent Storage:** All tasks are stored in MySQL for data persistence.
- **Server Connection Handling:** If the backend is disconnected, the frontend shows an alert and only displays local tasks (UI never freezes).

---

## 🛠️ Technologies Used

**Frontend:**
- React (with hooks)
- Redux Toolkit
- Apollo Client (GraphQL)
- Responsive UI

**Backend:**
- Node.js version is v23.1.0 & Express.js 
- GraphQL (express-graphql)
- Sequelize ORM (MySQL)
- MySQL Database

---

## 🟢 Getting Started — Step-by-Step Instructions

### 1. **Frontend Setup**

1. **Open the `frontend` folder**  
   Navigate to the `frontend` directory.

2. **Open your terminal in the `frontend` folder**  
   (In VS Code: right-click the folder → “Open in Integrated Terminal”)

3. **Install frontend dependencies**  
   ```bash
   npm install
   ```

4. **Start the frontend server**  
   ```bash
   npm run dev
   ```
   - The frontend will run at [http://localhost:5174](http://localhost:5174).

## ❓ Troubleshooting: Dependency Installation Errors

If you encounter errors after running `npm install` in either the `frontend` or `backend` folders, try installing the following dependencies manually:
   - 
### 👉 For the **Frontend** (React + Vite):

```bash
npm install react react-dom
npm install @reduxjs/toolkit react-redux
npm install @apollo/client graphql
```


---

### 2. **Backend Setup**

1. **Open the `backend` folder**  
   Navigate to the `backend` directory.

2. **Open your terminal in the `backend` folder**

3. **Install backend dependencies**  
   ```bash
   npm install
   ```
   - Ensure all dependencies (`express`, `express-graphql`, `graphql`, `sequelize`, `mysql2`, `cors`) are installed.
   - ---
## ❓ Troubleshooting: Dependency Installation Errors

If you encounter errors after running `npm install` in either the `frontend` or `backend` folders, try installing the following dependencies manually:

### 👉 For the **Backend** (Node.js + Express + GraphQL + MySQL):

```bash
npm install express
npm install graphql express-graphql
npm install mysql2
npm install sequelize
```

If you still face issues, double-check you are running the commands inside the correct directory (`frontend` or `backend`) and that your Node.js version matches the required version.



---

4. **Check MySQL credentials**  
   - Open the `database.js` or `data.js` file in `backend`.
   - Make sure your MySQL username and password are correct:
     ```js
     // Example (backend/database.js or data.js)
     const sequelize = new Sequelize('todoapp', 'YOUR_MYSQL_USERNAME', 'YOUR_MYSQL_PASSWORD', {
         host: 'localhost',
         dialect: 'mysql'
     });
     ```

---

### 3. **MySQL Database Setup**

1. **Open MySQL Workbench or your preferred MySQL client.**

2. **Paste and run the following SQL queries:**
   ```sql
   CREATE SCHEMA IF NOT EXISTS todoapp;
   USE todoapp;

   CREATE TABLE IF NOT EXISTS tasks (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     completed BOOLEAN DEFAULT FALSE,
     createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
     updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

3. **To verify:**
   ```sql
   SELECT DATABASE();
   SELECT * FROM tasks;
   ```

---

### 4. **Check Backend–MySQL Connection**

1. **Start the backend server:**  
   In the `backend` terminal, run:
   ```bash
   node index.js
   ```
2. **You should see:**  
   ```
   Database connection successfully
   ```
   - If you see any error, check your MySQL credentials and ensure MySQL is running.

---

### 5. **Run the Frontend**

1. **Go back to your `frontend` terminal** (if closed, open it again in `frontend`).

2. **Start the frontend server:**  
   ```bash
   npm run dev
   ```
   - The frontend will run on [http://localhost:5174](http://localhost:5174).

---



**You’re all set!**  
- Add tasks, mark them as complete, and enjoy real-time synchronization between frontend and backend.
- If you encounter any issues, double-check your MySQL credentials and database setup.

---

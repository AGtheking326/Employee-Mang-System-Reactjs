🚀 EMS – Employee Management System

A simple Employee Management System (EMS) built using React + Vite + Context API + Tailwind CSS.
This application allows an Admin to create and manage tasks, and Employees to view and update their assigned tasks.

## 🌍 Live Demo

[🚀 View Live Project](https://employee-mang-system-reactjs.vercel.app/)

📌 Features
🔐 Authentication

Admin login

Employee login

Session persistence using localStorage

Auto-login on page refresh

Logout functionality

👨‍💼 Admin Dashboard

View all employees

See task statistics for each employee:

New Tasks

Active Tasks

Completed Tasks

Failed Tasks

Create and assign tasks to employees

Tasks are stored in localStorage

👨‍💻 Employee Dashboard

Personalized welcome header

View task statistics

Horizontal scrollable task list

Task states:

🆕 New Task

🔵 Active Task

✅ Completed Task

❌ Failed Task

🛠️ Tech Stack

React 18

Vite

Context API

Tailwind CSS

LocalStorage (Mock Backend)

📂 Project Structure

ems-react/
│
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   │
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   │
│   │   ├── TaskList/
│   │   │   ├── TaskList.jsx
│   │   │   ├── NewTask.jsx
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   └── FailedTask.jsx
│   │   │
│   │   └── other/
│   │       ├── Header.jsx
│   │       ├── CreateTask.jsx
│   │       ├── AllTask.jsx
│   │       └── TaskListNumbers.jsx
│   │
│   ├── context/
│   │   └── AuthProvider.jsx
│   │
│   ├── utils/
│   │   └── localStorage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json

🔑 Demo Credentials
👑 Admin
Email: admin@me.com
Password: 123

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone <your-repo-url>
cd ems-react

2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm run dev

App will run on:

http://localhost:5173

🧠 How It Works
🔹 Authentication Logic

Admin credentials are hardcoded.

Employee credentials are fetched from localStorage.

On login, user data is stored in:

localStorage → loggedInUser

On app reload, login state is restored.

🔹 State Management

AuthContext manages employee data globally.

Tasks are stored inside each employee object.

Task counters are updated when new tasks are created.

🔹 Data Storage

All data is stored in:

localStorage:
- employees
- admin
- loggedInUser

This project does NOT use a real backend — it simulates one using localStorage.

📈 Task Status Flow
New Task → Active Task → Completed / Failed

Each task object contains:

{
  active: boolean,
  newTask: boolean,
  completed: boolean,
  failed: boolean,
  taskTitle: string,
  taskDescription: string,
  taskDate: string,
  category: string
}
⚠️ Known Limitations

No real backend (uses localStorage only)

No form validation beyond basic required fields

Task state transition logic is not fully implemented

FailedTask component is missing data prop (needs fix)

TaskListNumbers currently displays same count for all categories (needs correction)

🔮 Future Improvements

Add backend (Node.js + Express + MongoDB)

Add JWT authentication

Improve task status transitions

Add role-based routing

Add form validation

Add edit & delete task functionality

Improve UI responsiveness

Add dark/light mode toggle

📸 UI Highlights

Glassmorphism Login Screen

Responsive Dashboards

Horizontal Scroll Task Cards

Tailwind-based clean design

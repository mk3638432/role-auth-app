# Role-Based Authentication App (React + Tailwind CSS)

This is a small project I built using React to demonstrate **role-based authentication** using **React Router**, **Context API**, and **Tailwind CSS**. The login system uses mock users (no backend), and access to pages is controlled based on whether the user is an **Employee** or a **Manager**.

---

## ✨ Features

- Simple login form with mock users
- Role-based routing: Employee and Manager dashboards
- Protected routes using custom `PrivateRoute` and `RoleBasedRoute`
- Auth state is stored in `localStorage`
- A public Help page (accessible without login)
- Built with React Hooks and Context API for state management
- Styled with Tailwind CSS

---

## 🔐 Demo Login Credentials

**Manager**
- Username: `manager1`
- Password: `abcdef`

**Employee**
- Username: `employee1`
- Password: `123456`

---

## 🚀 Live Demo

You can check out the deployed app here:  
👉 [https://role-auth-app.vercel.app/](https://role-auth-app.vercel.app/)

---

## 🛠️ Getting Started

If you’d like to run this project locally:

```bash
git clone https://github.com/mk3638432/role-auth-app
cd role-auth-app
npm install
npm start

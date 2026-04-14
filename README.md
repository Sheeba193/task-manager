# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🗂 Task Dashboard App

A simple productivity dashboard built with **React + TailwindCSS** to help users manage tasks, track progress, and avoid missing deadlines.

---

## 🚀 Features

- User task creation (title, due date, priority)
- Task status tracking (pending / completed)
- Filter tasks (all / pending / completed)
- Dashboard-style task table view
- Overdue task highlighting
- Task actions (complete / undo / delete)
- Clean responsive UI using TailwindCSS

---

## 🧑‍💻 Tech Stack

- React (Vite)
- TailwindCSS
- Context API (state management)
- JavaScript (ES6+)

---

## 📦 Installation

```bash
# clone repo
git clone <your-repo-url>

# move into project
cd task-dashboard

# install dependencies
npm install

# run app
npm run dev

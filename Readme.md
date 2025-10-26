# 📌 MERN Stack Todo App

A simple yet functional Todo app built using the **MERN stack**, with enhancements over the original course implementation by **Hitesh Choudhary**.

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React"/></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB"/></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-404D59?logo=express&logoColor=white" alt="Express.js"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white" alt="TailwindCSS"/></a>
  <a href="https://www.postman.com/"><img src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white" alt="Postman"/></a>
  <a href="https://github.com/sudhanvapops/mern-todo-app/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-lightgrey" alt="License"/></a>
</p>

---

## 🚀 About This Project
This is an improved version of the **Todo app** taught in **Hitesh Choudhary's MERN course** on Udemy.  

- Original implementation used **React + Local Storage**  
- Enhanced version uses **MongoDB** for persistence and follows proper **MVC architecture**  

---

## 🛠 Tech Stack
- **React** – Frontend framework  
- **MongoDB** – Database for persistent storage  
- **Express.js** – Backend framework  
- **Tailwind CSS** – Styling  
- **Postman** – API testing tool  

---

## 📈 Features & Improvements
✅ Full CRUD operations (Create, Read, Update, Delete) using MongoDB  
✅ Applied **MVC architecture** for modular, maintainable code  
✅ Implemented optimizations beyond the course  
✅ Improved **state updates** after CRUD operations (no full refetch)  

---

## 🔍 Areas for Improvement
❌ UI is **not mobile-friendly**  
❌ **Basic styling** (can be enhanced for interactivity)  
✅ Optimized state updates after CRUD operations  

---

## 🆕 Optimization: State Updates
Previously, every **Create, Update, Delete** action triggered a full fetch of all todos.  

✅ Now:
- **Create Todo:** Append to existing state  
- **Update Todo:** Modify only updated todo  
- **Delete Todo:** Remove deleted todo  

This reduces API calls and improves performance 🚀  

---

## ⚠️ Setup Instructions
1. Ensure **MongoDB** is running locally  
2. Clone the repo:  
```bash
   git clone https://github.com/sudhanvapops/mern-todo-app.git
   cd mern-todo-app
```

3. Install dependencies:

```bash
npm install
```
4. Add missing `.env` variables (MongoDB URI, etc.)

---

## 📁 Project Structure

```
mern-todo-app/
├── frontend/              # React frontend
├── backend/               # Express backend
└── README.md           # Project documentation
```

---

## 📚 What I Learned

✅ Integrating **MongoDB** for persistence
✅ Implementing **MVC architecture** for cleaner code
✅ Using **Postman** to test API endpoints
✅ Optimizing **React state updates** for better performance
✅ Practical **full-stack MERN skills beyond the course**

---

## 📌 Conclusion

This project helped solidify my **MERN stack knowledge** while teaching me **state optimization, backend integration, and  MVC architecture**.
UI improvements and mobile responsiveness remain areas for future work. 🎯
Contributions and suggestions are welcome! 🚀

---

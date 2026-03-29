# 🌤 Async Weather Tracker
## Palak Singh 

---

## 📌 Project Overview

The **Async Weather Tracker** is a Vanilla JavaScript application that demonstrates asynchronous programming concepts using the Fetch API.

This project focuses on:

* Async/Await
* Promises
* Event Loop behavior
* Local Storage
* DOM manipulation
* Error handling
* Execution order logging

The application fetches real-time weather data from a public weather API and displays it with a clean, modern user interface.

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling (No frameworks used)
* **Vanilla JavaScript** – Logic & API handling
* **OpenWeather API** – Weather data

⚠️ No UI frameworks (Bootstrap, Tailwind, etc.) were used as per assignment restrictions.

---

## 🚀 Features Implemented

### 1️⃣ Weather Search Interface

* Input field to enter city name
* Search button to fetch weather data
* Displays:

  * City name
  * Temperature (°C)
  * Weather condition
  * Humidity
  * Wind speed

---

### 2️⃣ Asynchronous API Handling

* Uses `async/await`
* Fetches weather data using `fetch()`
* Demonstrates promise resolution flow

---

### 3️⃣ Error Handling

* Handles:

  * Invalid city names
  * Network errors
* Uses:

  * `try...catch`
  * Conditional response checks

---

### 4️⃣ Local Storage – Search History

* Saves searched cities in Local Storage
* Displays search history on page load
* Clicking a history button re-fetches weather data
* Includes **Clear History** button

---

### 5️⃣ Event Loop & Execution Order Logging

* Custom logging function displays execution steps
* Logs:

  * Before fetch
  * After fetch resolves
  * DOM update phase
* Demonstrates:

  * Call Stack
  * Web API
  * Microtask Queue
  * Event Loop behavior

Execution logs are displayed:

* In the browser console
* Inside the webpage (custom log panel)

---

### 6️⃣ UI/UX Enhancements

* Modern glassmorphism card design
* Smooth fade-in animation when weather updates
* Hover effects on buttons
* Styled execution log panel
* Responsive centered layout

---

## 📂 Project Structure

```
/project-folder
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🔄 How It Works

1. User enters city name.
2. Submit event triggers.
3. Fetch request is sent to weather API.
4. JavaScript continues synchronous execution.
5. When the promise resolves:

   * Data returns to the call stack via microtask queue.
   * DOM updates.
6. City is stored in Local Storage.
7. Search history updates dynamically.

---

## 🧠 Key Learning Outcomes

* Understanding asynchronous JavaScript execution
* Observing event loop behavior
* Handling promise states properly
* Working with Local Storage
* Writing clean and modular JS code
* Debugging real-world frontend issues

---

## 🎯 Conclusion

This project successfully demonstrates asynchronous programming concepts in JavaScript using a practical real-world example.

It fulfills all functional and UI requirements specified in the assignment rubric.

---

**Developed as part of Web Dev II – Lab Assignment 2**
Happy Coding! 🎉



<img width="1897" height="1063" alt="Screenshot 2026-03-04 011846" src="https://github.com/user-attachments/assets/45fa1866-46f5-4eac-b87e-022beea00115" />

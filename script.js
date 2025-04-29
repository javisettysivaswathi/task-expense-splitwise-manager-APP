document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active-sidebar");
  });
});

// Function to toggle sidebar visibility
// Function to toggle sidebar visibility
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(function(section) {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// JavaScript for showing and hiding sections
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('section-active');
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('section-active');
  }
}

// Toggling the visibility of the forms for task, expense, and splitwise
function toggleForm(formType) {
  const form = document.getElementById(`${formType}Form`);
  if (form.style.display === 'none' || form.style.display === '') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

// Add Task functionality
function addTask() {
  const taskName = document.getElementById('taskName').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const taskPriority = document.getElementById('taskPriority').value;
  const taskDueDate = document.getElementById('taskDueDate').value;
  const taskCompleted = document.getElementById('taskCompleted').checked;

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskName}</span> 
    <span>${taskDescription}</span> 
    <span>Priority: ${taskPriority}</span> 
    <span>Due: ${taskDueDate}</span> 
    <span>Completed: ${taskCompleted ? 'Yes' : 'No'}</span>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="removeTask(this)">Remove</button>
  `;
  taskList.appendChild(li);

  // Clear form fields after adding task
  document.getElementById('taskName').value = '';
  document.getElementById('taskDescription').value = '';
  document.getElementById('taskPriority').value = '';
  document.getElementById('taskDueDate').value = '';
  document.getElementById('taskCompleted').checked = false;
}

// Edit Task functionality
function editTask(button) {
  const li = button.parentElement;
  const taskName = prompt('Edit task name:', li.children[0].innerText);
  if (taskName) {
    li.children[0].innerText = taskName;
  }
}

// Remove Task functionality
function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

// Add Expense functionality
function addExpense() {
  const expenseName = document.getElementById('expenseName').value;
  const expenseAmount = document.getElementById('expenseAmount').value;
  const expenseList = document.getElementById('expenseList');
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${expenseName}</span> 
    <span>Amount: $${expenseAmount}</span>
    <button onclick="removeExpense(this)">Remove</button>
  `;
  expenseList.appendChild(li);
}

// Remove Expense functionality
function removeExpense(button) {
  const li = button.parentElement;
  li.remove();
}

// Add Splitwise functionality
function addSplit() {
  const splitName = document.getElementById('splitName').value;
  const splitAmount = document.getElementById('splitAmount').value;
  const splitwiseList = document.getElementById('splitwiseList');
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${splitName}</span> 
    <span>Amount: $${splitAmount}</span>
    <button onclick="removeSplit(this)">Remove</button>
  `;
  splitwiseList.appendChild(li);
}

// Remove Splitwise functionality
function removeSplit(button) {
  const li = button.parentElement;
  li.remove();
}

// Refresh Quote functionality
function refreshQuote() {
  const quotes = [
    `"The only way to do great work is to love what you do." - Steve Jobs`,
    `"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer`,
    `"Believe you can and you're halfway there." - Theodore Roosevelt`,
    `"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt`
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quoteText').innerText = randomQuote;
}

// Toggle collapse functionality
function toggleCollapse(formId) {
  const form = document.getElementById(formId);
  form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
}

// Toggle the visibility of a section with an active class
function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.classList.contains('section-active')) {
    section.classList.remove('section-active');
  } else {
    section.classList.add('section-active');
  }
}

// Toggle visibility of history section
function toggleHistory() {
  const historySection = document.getElementById('historySection');
  historySection.classList.toggle('section-active');
}
// Array to store the history of actions
// Array to store the history of actions
let actionHistory = [];

// Function to log actions and display them in the history section
function logAction(action) {
  // Add the action to the history
  actionHistory.push(action);
  
  // Update the action history on the page
  updateActionHistory();
}

// Function to update the action history list
function updateActionHistory() {
  const actionHistoryList = document.getElementById('actionHistoryList');
  actionHistoryList.innerHTML = ''; // Clear the current list

  // Loop through each action and create an item in the list
  actionHistory.forEach((action, index) => {
    const actionItem = document.createElement('li');
    actionItem.textContent = action; // Set the action text

    // Create a remove button for each action item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
      removeHistoryItem(index);  // Remove the action item when clicked
    };

    actionItem.appendChild(removeButton); // Add the remove button to the action item
    actionHistoryList.appendChild(actionItem); // Add the action item to the history list
  });
}

// Function to remove a specific action from the history
function removeHistoryItem(index) {
  actionHistory.splice(index, 1); // Remove the action from the array
  updateActionHistory(); // Refresh the action history list
}

// Function to clear the entire history
function clearHistory() {
  actionHistory = []; // Clear all actions from the array
  updateActionHistory(); // Refresh the action history list
}

// Function to simulate adding a task (can be used for other actions like expenses and splits)
function addTask() {
  const taskName = document.getElementById('taskName').value;
  const taskDescription = document.getElementById('taskDescription').value;
  
  if (taskName && taskDescription) {
    // Log the action to the history
    logAction(`Task Added: ${taskName} - ${taskDescription}`);
    
    // Add the task to the task list (optional)
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.textContent = `${taskName} - ${taskDescription}`;
    taskList.appendChild(taskItem);
  }
}

// Function to simulate adding an expense
function addExpense() {
  const expenseName = document.getElementById('expenseName').value;
  const expenseAmount = document.getElementById('expenseAmount').value;
  
  if (expenseName && expenseAmount) {
    // Log the action to the history
    logAction(`Expense Added: ${expenseName} - $${expenseAmount}`);
    
    // Add the expense to the expense list (optional)
    const expenseList = document.getElementById('expenseList');
    const expenseItem = document.createElement('li');
    expenseItem.textContent = `${expenseName} - $${expenseAmount}`;
    expenseList.appendChild(expenseItem);
  }
}

// Function to simulate adding a splitwise entry
function addSplit() {
  const splitName = document.getElementById('splitName').value;
  const splitAmount = document.getElementById('splitAmount').value;
  
  if (splitName && splitAmount) {
    // Log the action to the history
    logAction(`Splitwise Entry Added: ${splitName} - $${splitAmount}`);
    
    // Add the splitwise entry to the splitwise list (optional)
    const splitwiseList = document.getElementById('splitwiseList');
    const splitwiseItem = document.createElement('li');
    splitwiseItem.textContent = `${splitName} - $${splitAmount}`;
    splitwiseList.appendChild(splitwiseItem);
  }
}
// Save task to localStorage
function addTask() {
  let taskName = document.getElementById('taskName').value;
  let taskDescription = document.getElementById('taskDescription').value;
  let taskPriority = document.getElementById('taskPriority').value;
  let taskDueDate = document.getElementById('taskDueDate').value;
  let taskCompleted = document.getElementById('taskCompleted').checked;

  // Save the task object to localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      dueDate: taskDueDate,
      completed: taskCompleted
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Clear input fields after adding
  document.getElementById('taskName').value = '';
  document.getElementById('taskDescription').value = '';
  document.getElementById('taskPriority').value = '';
  document.getElementById('taskDueDate').value = '';
  document.getElementById('taskCompleted').checked = false;

  // Re-render tasks from localStorage
  renderTasks();
}

// Render tasks from localStorage
function renderTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear existing list
  tasks.forEach(task => {
      let li = document.createElement('li');
      li.textContent = `${task.name} - ${task.priority} - ${task.dueDate}`;
      taskList.appendChild(li);
  });
}

// Call renderTasks to populate the list on page load
window.onload = renderTasks;
// Function to show alert after adding an expense
function addExpense() {
  const expenseName = document.getElementById("expenseName").value;
  const expenseAmount = document.getElementById("expenseAmount").value;
  const expenseCategory = document.getElementById("expenseCategory").value;
  const expenseDate = document.getElementById("expenseDate").value;

  // Input validation
  if (!expenseName || !expenseAmount || !expenseCategory || !expenseDate) {
    alert("Please fill in all the fields.");
  } else {
    // Add expense to the list
    const expenseList = document.getElementById("expenseList");
    const newExpense = document.createElement("li");
    newExpense.textContent = `${expenseName} - Amount: $${expenseAmount} - Category: ${expenseCategory} - Date: ${expenseDate}`;
    expenseList.appendChild(newExpense);

    // Clear form after adding
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";
    document.getElementById("expenseDate").value = "";

    // Success alert
    alert("Expense added successfully!");
  }
}
// Function to show alert after adding an expense
function addExpense() {
  const expenseName = document.getElementById("expenseName").value;
  const expenseAmount = document.getElementById("expenseAmount").value;
  const expenseCategory = document.getElementById("expenseCategory").value;
  const expenseDate = document.getElementById("expenseDate").value;

  // Input validation
  if (!expenseName || !expenseAmount || !expenseCategory || !expenseDate) {
    alert("Please fill in all the fields.");
  } else {
    // Add expense to the list
    const expenseList = document.getElementById("expenseList");
    const newExpense = document.createElement("li");
    newExpense.textContent = `${expenseName} - Amount: $${expenseAmount} - Category: ${expenseCategory} - Date: ${expenseDate}`;
    expenseList.appendChild(newExpense);

    // Clear form after adding
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";
    document.getElementById("expenseDate").value = "";

    // Success alert
    alert("Expense added successfully!");
  }
}
// Function to show alert after adding a task
function addTask() {
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskPriority = document.getElementById("taskPriority").value;
  const taskDueDate = document.getElementById("taskDueDate").value;

  if (!taskName || !taskDescription || !taskPriority || !taskDueDate) {
    alert("Please fill in all the fields.");
  } else {
    // Add task to the list
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.textContent = `${taskName} - Priority: ${taskPriority} - Due Date: ${taskDueDate}`;
    taskList.appendChild(newTask);

    // Clear form after adding
    document.getElementById("taskName").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskPriority").value = "";
    document.getElementById("taskDueDate").value = "";

    // Success alert
    alert("Task added successfully!");
  }
}
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Check if the fields are not empty (optional validation)
  if (name && email && message) {
      // Custom logic: log the data to the console (you could also send it to a server here)
      console.log("Form submitted!");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      // Optionally, clear the form after submission
      document.getElementById("contact-form").reset();
  } else {
      // Handle missing fields (optional)
      alert("Please fill out all fields.");
  }
});

function showNotification(message, type) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.className = type; // 'success' or 'error'
  setTimeout(() => notification.textContent = '', 3000); // Clear after 3 seconds
}

// For success
showNotification("Task added successfully!", "success");

// For error
showNotification("Failed to add task. Please try again.", "error");
function toggleLoadingSpinner(show) {
  const spinner = document.getElementById("loadingSpinner");
  spinner.style.display = show ? 'block' : 'none';
}

// Example of showing spinner before task addition
toggleLoadingSpinner(true);
// Add task code...
toggleLoadingSpinner(false);

function deleteTask(taskId) {
  if (confirm("Are you sure you want to delete this task?")) {
    // Proceed with deletion logic
    document.getElementById(taskId).remove();
    alert("Task deleted successfully.");
  }
}
// Function to delete a split
function deleteSplit(splitId) {
  if (confirm("Are you sure you want to delete this split?")) {
    // Proceed with deletion logic
    document.getElementById(splitId).remove();
    alert("Split deleted successfully.");
  }
}
// Function to delete an expense
function deleteExpense(expenseId) {
  if (confirm("Are you sure you want to delete this expense?")) {
    // Proceed with deletion logic
    document.getElementById(expenseId).remove();
    alert("Expense deleted successfully.");
  }
}
// Search Tasks
function searchTasks() {
  const searchQuery = document.getElementById("searchBar").value.toLowerCase();
  const tasks = document.querySelectorAll("#taskList li");
  
  tasks.forEach(task => {
    const taskText = task.textContent.toLowerCase();
    if (taskText.includes(searchQuery)) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  });
}
let userDatabase = JSON.parse(localStorage.getItem('users')) || []; // Initialize at the beginning

// Login function
function doLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }

    const user = userDatabase.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById("loginForm").style.display = "none"; 
        document.getElementById("pageContent").style.display = "block"; 
        document.getElementById("userGreeting").innerText = `Hello, ${username}!`;
    } else {
        alert("Invalid credentials, please try again.");
    }
}

// Signup function
function doSignup() {
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    // Validate input
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("All fields are required.");
        return;
    }

    const existingUser = userDatabase.find(u => u.username === username);
    if (existingUser) {
        alert("Username already exists. Please choose another one.");
        return;
    }

    const newUser = { username, email, password };
    userDatabase.push(newUser);
    localStorage.setItem('users', JSON.stringify(userDatabase));

    alert("Signup successful! You can now log in.");
    goToLogin();
}

// Other functions like goToLogin(), goToSignup(), and logout()

// Navigate from Login to Signup Form
function goToSignup() {
  document.getElementById("loginForm").style.display = "none"; // Hide login form
  document.getElementById("signupForm").style.display = "block"; // Show signup form
}

// Navigate from Signup to Login Form
function goToLogin() {
  document.getElementById("signupForm").style.display = "none"; // Hide signup form
  document.getElementById("loginForm").style.display = "block"; // Show login form
}

// Logout function
function logout() {
  document.getElementById("loginForm").style.display = "block"; // Show login form again
  document.getElementById("pageContent").style.display = "none"; // Hide page content (dashboard)
  document.getElementById("username").value = ""; // Clear the input fields
  document.getElementById("password").value = ""; 
  document.getElementById("userGreeting").innerText = ""; // Reset greeting
}

// Login function (simplified version for example)
function doLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "user" && password === "password") {
      document.getElementById("loginForm").style.display = "none"; // Hide login form
      document.getElementById("pageContent").style.display = "block"; // Show page content (dashboard)
      document.getElementById("userGreeting").innerText = `Hello, ${username}!`; // Greet user
  } else {
      alert("Invalid credentials. Please try again.");
  }
}

// Signup function (simplified for demonstration)
function doSignup() {
  var username = document.getElementById("signupUsername").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;

  if (username && email && password) {
      alert("Signup successful! You can now log in.");
      goToLogin(); // Go back to login form after signup
  } else {
      alert("Please fill in all fields.");
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const signupButton = document.getElementById("signupButton");
  const loginButton = document.getElementById("loginButton");

  // Check if elements exist before adding event listeners
  if (signupButton) {
      signupButton.addEventListener("click", goToSignup);
  } else {
      console.log("Signup button not found.");
  }

  if (loginButton) {
      loginButton.addEventListener("click", goToLogin);
  } else {
      console.log("Login button not found.");
  }
});
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());  // Allow cross-origin requests (for development purposes)

// In-memory "database" for users (replace with a real DB like MongoDB, MySQL, etc.)
const users = [
  {
    id: 1,
    username: 'testuser',  // Username to match
    password: '$2a$10$wX3M4Iq6q9ghUnb6ZlNi9OoCOp76E1VrJ/tZnS5zAwfB03hVpmJ9C', // Hashed password (bcrypt)
  }
];

// Route to handle login (POST request)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });  // If username doesn't exist
  }

  // Compare the provided password with the stored hashed password using bcrypt
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({ message: 'Error during authentication' });
    }

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });  // If password doesn't match
    }

    // Generate JWT token (usually you store sensitive info in the payload like userId, but not the password)
    const token = jwt.sign({ id: user.id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });

    // Return the token to the frontend
    res.json({
      message: 'Login successful',
      token: token,  // Send token back to the frontend
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Attach a submit event listener to the login form
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the values of username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Create a new FormData object to send the data via POST request
  const loginData = {
    username: username,
    password: password
  };

  // Make an AJAX request using fetch API
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData) // Send the login data as JSON
  })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        // Login successful, store the token in localStorage
        localStorage.setItem('authToken', data.token);
        alert('Login successful');
        window.location.href = '/dashboard'; // Redirect to a protected page (change as needed)
      } else {
        // Show an error message if credentials are invalid
        document.getElementById('error-message').style.display = 'block';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('error-message').style.display = 'block'; // Show error if fetch fails
    });
});


const token = localStorage.getItem('authToken');
if (token) {
  document.getElementById('token').textContent = token; // Display the token (for demonstration)
} else {
  alert('Please log in to access this page');
  window.location.href = '/login.html'; // Redirect to login if no token found
}
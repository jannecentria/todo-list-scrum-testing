// =============================
// ToDo List Application Logic
// =============================

// Arrays to store tasks in memory
let taskList = [];             // Regular tasks
let importantTaskList = [];    // Important tasks
let historyList = [];          // Archived tasks

// When the page loads, restore data and render the UI
window.onload = function () {
    retrieveTasksFromLocalStorage();
    renderTasks();
    renderImportantTasks();
    renderArchive();
};

// ==============================
// Regular Task Functions
// ==============================

// Add a new regular task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter a task.');  // Alert for empty input
        return;
    }

    // Check for duplicate task
    if (taskList.some(t => t.text.toLowerCase() === task.toLowerCase())) {
        alert('This task already exists.');
        return;
    }

    // Add task to list and update UI
    taskList.push({ text: task, completed: false });
    taskInput.value = '';
    renderTasks();
    saveTasksToLocalStorage();
}

// Toggle completion state of a task
function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
    saveTasksToLocalStorage();
}

// Delete a regular task
function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
    saveTasksToLocalStorage();
}

// Archive all completed regular tasks
function archiveCompleted() {
    const completedTasks = taskList.filter(task => task.completed);
    historyList = historyList.concat(completedTasks); // Move to archive
    taskList = taskList.filter(task => !task.completed); // Remove from active list

    renderTasks();
    renderArchive();
    saveTasksToLocalStorage();
}

// Render all regular tasks in the UI
function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;
        taskListElement.appendChild(li);
    });
}

// ==============================
// Important Task Functions
// ==============================

// Add a new important task
function addImportantTask() {
    const taskInput = document.getElementById('importantTaskInput');
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter an important task.');
        return;
    }

    // Prevent duplicate important tasks
    if (importantTaskList.some(t => t.text.toLowerCase() === task.toLowerCase())) {
        alert('This important task already exists.');
        return;
    }

    importantTaskList.push({ text: task, completed: false });
    taskInput.value = '';
    renderImportantTasks();
    saveTasksToLocalStorage();
}

// Toggle completion state of an important task
function toggleImportantTask(index) {
    importantTaskList[index].completed = !importantTaskList[index].completed;
    renderImportantTasks();
    saveTasksToLocalStorage();
}

// Delete an important task
function deleteImportantTask(index) {
    importantTaskList.splice(index, 1);
    renderImportantTasks();
    saveTasksToLocalStorage();
}

// Archive completed important tasks
function archiveImportantTasks() {
    const completedTasks = importantTaskList.filter(task => task.completed);
    historyList = historyList.concat(completedTasks);
    importantTaskList = importantTaskList.filter(task => !task.completed);

    renderImportantTasks();
    renderArchive();
    saveTasksToLocalStorage();
}

// Render all important tasks in the UI
function renderImportantTasks() {
    const listElement = document.getElementById('importantTaskList');
    listElement.innerHTML = '';

    importantTaskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span onclick="toggleImportantTask(${index})">${task.text}</span>
            <button class="delete" onclick="deleteImportantTask(${index})">Delete</button>
        `;
        listElement.appendChild(li);
    });
}

// ==============================
// Archive / History Rendering
// ==============================

// Render archived tasks
function renderArchive() {
    const archiveListElement = document.getElementById('archiveList');
    archiveListElement.innerHTML = '';

    historyList.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.textContent = task.text;
        archiveListElement.appendChild(li);
    });
}

// ==============================
// Local Storage Management
// ==============================

// Save all task data to localStorage
function saveTasksToLocalStorage() {
    const data = {
        tasks: taskList,
        important: importantTaskList,
        history: historyList
    };
    localStorage.setItem('todoData', JSON.stringify(data));
}

// Retrieve all task data from localStorage on load
function retrieveTasksFromLocalStorage() {
    const savedData = localStorage.getItem('todoData');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            taskList = parsed.tasks || [];
            importantTaskList = parsed.important || [];
            historyList = parsed.history || [];
        } catch (e) {
            console.warn('Data in localStorage is invalid JSON');
        }
    }
}

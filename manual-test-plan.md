#  Manual Test Plan – ToDo List Web Application

This document outlines the manual test cases used to validate the application's key features and verify bug fixes.

---

## ✅ Test Case 1: Add Regular Task

**Steps:**
1. Enter a task in the regular task input field.
2. Click "Add Task."

**Expected Result:**
- Task appears in the regular task list.

---

## ✅ Test Case 2: Prevent Empty Regular Task

**Steps:**
1. Leave the input field empty.
2. Click "Add Task."

**Expected Result:**
- Alert appears: “Please enter a task.”

---

## ✅ Test Case 3: Prevent Duplicate Regular Task

**Steps:**
1. Add a task (e.g., "Buy milk").
2. Try adding the same task again (case-insensitive).

**Expected Result:**
- Alert appears: “This task already exists.”
- Duplicate task is not added.

---

## ✅ Test Case 4: Toggle Regular Task Completion

**Steps:**
1. Click on an existing regular task.

**Expected Result:**
- Task gets marked with a line-through (class `completed`).

---

## ✅ Test Case 5: Archive Completed Regular Tasks

**Steps:**
1. Mark a regular task as completed.
2. Click "Archive Completed Tasks."

**Expected Result:**
- Task is removed from the regular task list.
- Task appears in the Archive section.



---

## ✅ Test Case 6: Add Important Task

**Steps:**
1. Enter a task in the important task input.
2. Click "Add Important Task."

**Expected Result:**
- Task appears in the Important Task list.

---

## ✅ Test Case 7: Prevent Empty Important Task

**Steps:**
1. Leave the important task input empty.
2. Click "Add Important Task."

**Expected Result:**
- Alert appears: “Please enter an important task.”
- No task is added.

---

## ✅ Test Case 8: Prevent Duplicate Important Task

**Steps:**
1. Add an important task.
2. Try adding the same task again.

**Expected Result:**
- Alert appears: “This important task already exists.”
- Duplicate task is not added.

---

## ✅ Test Case 9: Toggle Important Task

**Steps:**
1. Click on an important task.

**Expected Result:**
- Task gets marked as completed (line-through effect).
- Toggle works correctly.

---

## ✅ Test Case 10: Archive Completed Important Tasks

**Steps:**
1. Mark an important task as completed.
2. Click "Archive Completed Important Tasks."

**Expected Result:**
- Task is removed from the important task list.
- Task is added to the Archive section.

---

## ✅ Test Case 11: Persistence After Refresh

**Steps:**
1. Add several regular and important tasks.
2. Complete and archive a few tasks.
3. Refresh the browser.

**Expected Result:**
- All tasks persist correctly.
- Archive shows correct items.
- No lost data or reappearing tasks.

---

**Status:** All tests passed manually during the sprint.

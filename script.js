document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
  
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => {
        data.forEach(task => {
          const li = document.createElement('li');
          li.textContent = task.text;
          taskList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching tasks:', error));
  });
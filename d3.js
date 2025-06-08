const form = document.getElementById('projectForm');
const list = document.getElementById('projectList');
let projects = [];

form.onsubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById('projectName').value.trim();
  const tech = document.getElementById('techStack').value.trim();

  if (name && tech) {
    const id = Date.now();
    const project = { id, name, tech };
    projects.push(project);
    renderProjects();
    form.reset();
  }
};

function renderProjects() {
  list.innerHTML = '';
  projects.forEach((proj) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${proj.name}</strong> — ${proj.tech}
      <button onclick="editProject(${proj.id})">Edit</button>
      <button onclick="deleteProject(${proj.id})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function editProject(id) {
  const proj = projects.find(p => p.id === id);
  const newName = prompt('Edit Project Name:', proj.name);
  const newTech = prompt('Edit Tech Stack:', proj.tech);
  if (newName && newTech) {
    proj.name = newName;
    proj.tech = newTech;
    renderProjects();
  }
}

function deleteProject(id) {
  projects = projects.filter(p => p.id !== id);
  renderProjects();
}

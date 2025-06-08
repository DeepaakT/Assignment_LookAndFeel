 // Bar Chart
new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Design', 'Dev', 'Marketing', 'Sales'],
    datasets: [{
      label: 'Completed Projects',
      data: [12, 19, 8, 15],
      backgroundColor: '#60a5fa'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Pie Chart
new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['In Progress', 'Completed', 'Delayed'],
    datasets: [{
      data: [25, 60, 15],
      backgroundColor: ['#34d399', '#60a5fa', '#f87171']
    }]
  },
  options: {
    responsive: true
  }
});

// Line Chart
new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'User Visits',
      data: [300, 450, 320, 580, 700],
      borderColor: '#6366f1',
      tension: 0.4,
      fill: false
    }]
  },
  options: {
    responsive: true
  }
});

// Doughnut Chart
new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: {
    labels: ['Mobile', 'Web', 'Desktop'],
    datasets: [{
      data: [45, 35, 20],
      backgroundColor: ['#fbbf24', '#3b82f6', '#10b981']
    }]
  },
  options: {
    responsive: true
  }
});

// Scatter Chart
new Chart(document.getElementById('scatterChart'), {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Client Response Time',
      data: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 15 },
        { x: 4, y: 25 },
        { x: 5, y: 22 }
      ],
      backgroundColor: '#f472b6'
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: { display: true, text: 'Project Phase' }
      },
      y: {
        title: { display: true, text: 'Response Time (hrs)' }
      }
    }
  }
});

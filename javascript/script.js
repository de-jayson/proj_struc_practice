// Get the elements
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mainContent = document.getElementById('main');

// Open the sidebar
menuBtn.addEventListener('click', function () {
    sidebar.style.width = '250px'; // Expand sidebar
    mainContent.style.marginLeft = '250px'; // Shift content to the right
});

// Close the sidebar
closeBtn.addEventListener('click', function () {
    sidebar.style.width = '0'; // Collapse sidebar
    mainContent.style.marginLeft = '0'; // Reset content position
});
// script.js

document.getElementById('#dashboard').addEventListener('click', function() {
    changeContent('dashboard');
});

document.getElementById('settings').addEventListener('click', function() {
    changeContent('settings');
});

document.getElementById('#profile').addEventListener('click', function() {
    changeContent('profile');
});

function changeContent(page) {
    const mainContent = document.getElementById('mainContent');

    if (page === 'dashboard') {
        mainContent.innerHTML = `
            <h1>Dashboard</h1>
            <p>This is the dashboard content.</p>
        `;
   
    }
}

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

// navbar.js
function includeNavbar() {
    const navbarContainer = document.getElementById('navbarContainer');
 
    if (navbarContainer) {
       fetch('navbar.html')
          .then(response => response.text())
          .then(data => {
             navbarContainer.innerHTML = data;
          })
          .catch(error => {
             console.error('Error fetching navbar:', error);
          });
    }
 }
 
 // Call the function to include the navbar on page load
 includeNavbar();
 
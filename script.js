document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    const projects = document.querySelectorAll(".project");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            const filter = link.getAttribute("data-filter");
            projects.forEach(function(project) {
                project.classList.remove("show");
                if (filter === "all" || project.classList.contains(filter)) {
                    project.classList.add("show");
                }
            });
            links.forEach(function(link) {
                link.classList.remove("active");
            });
            link.classList.add("active");
        });
    });
});
document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase(); // Get the value of the search input and convert it to lowercase
    const projects = document.querySelectorAll('.project'); // Select all project divs
    projects.forEach(project => {
        const title = project.querySelector('h2').textContent.toLowerCase(); // Get the title of each project and convert it to lowercase
        if (title.includes(searchValue)) { // Check if the search value is included in the project title
            project.style.display = 'flex'; // Show the project if it matches the search value
        } else {
            project.style.display = 'none'; // Hide the project if it doesn't match the search value
        }
    });
});

// Add these variables at the top of your script
var itemsPerPage = 3;
var currentPage = 1;

// Update the addLecture function to only add rows for the current page
function addLecture() {
  var lectureBody = document.getElementById("lectureBody");
  lectureBody.innerHTML = ""; // Clear existing rows

  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;

  var paginatedData = mockData.slice(startIndex, endIndex);

  paginatedData.forEach(function (data) {
    var newRow = lectureBody.insertRow();
    // ... (rest of your code to insert cells)

    cell5.appendChild(editButton);
    cell5.appendChild(deleteButton);
  });

  // Call a function to create pagination buttons
  createPaginationButtons();
}

// Function to create pagination buttons
function createPaginationButtons() {
  var paginationContainer = document.getElementById("pagination-container");
  paginationContainer.innerHTML = ""; // Clear existing buttons

  var totalPages = Math.ceil(mockData.length / itemsPerPage);

  for (var i = 1; i <= totalPages; i++) {
    var li = document.createElement("li");
    li.classList.add("page-item");

    var a = document.createElement("a");
    a.classList.add("page-link");
    a.href = "#";
    a.textContent = i;
    a.onclick = function (event) {
      event.preventDefault();
      currentPage = parseInt(event.target.textContent);
      addLecture();
    };

    li.appendChild(a);
    paginationContainer.appendChild(li);
  }
}

// Call the addLecture function to load initial data
window.onload = function () {
  addLecture();
  createPaginationButtons();
};

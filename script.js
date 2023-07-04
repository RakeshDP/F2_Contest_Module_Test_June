const students = [
  {
    ID: 1,
    name: "Alice",
    age: 21,
    grade: "A",
    degree: "Btech",
    email: "alice@example.com",
  },
   { 
    ID: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    degree: "MBA",
    email: "bob@example.com",
   },
    {
    ID: 3,
    name: "Charlie",
    age: 20,
    grade: "C",
    degree: "Arts",
    email: "charlie@example.com",
  },
];

// Function to render the students array as a table
function renderStudents() {
  const tableBody = document.getElementById("dataOfStudent");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Loop through each student and create table rows
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td id="both">
          ${student.degree}
          <div>
            <img src="./edit 1.png" alt="Edit" class="edit-icon" data-id="${student.ID}"/>
            <img src="./trash-2 1.png" alt="Delete" class="delete-icon" onclick="deleteStudent(${student.ID})" data-id="${student.ID}"/>
          </div>
        </td>
      `
    tableBody.appendChild(row);
  });
}

// Function to add a new student profile
function addStudent() {
  const nameInput = document.getElementsByName("name")[0];
  const emailInput = document.getElementsByName("email")[0];
  const gradeInput = document.getElementsByName("grade")[0];
  const ageInput = document.getElementsByName("age")[0];
  const degreeInput = document.getElementsByName("degree")[0];

  // Generate a unique ID for the new student
  const newId = students.length > 0 ? students[students.length - 1].ID + 1 : 1;

  // Create a new student object
  const newStudent = {
    ID: newId,
    name: nameInput.value,
    email: emailInput.value,
    age: parseInt(ageInput.value),
    grade: gradeInput.value,
    degree: degreeInput.value,
  };

  // Add the new student to the students array
  students.push(newStudent);

  // Clear input fields
  nameInput.value = "";
  emailInput.value = "";
  gradeInput.value = "";
  ageInput.value = "";
  degreeInput.value = "";

  // Render the updated students array
  renderStudents();
}

// Event listeners to add student button
const addButton = document.getElementById("button");
addButton.addEventListener("click", addStudent);

// Function to delete a student profile
function deleteStudent(id) {
    // Find the index of the student with the specified ID
    const index = students.findIndex((student) => student.ID === id);
  
    // Remove the student from the students array
    if (index !== -1) {
      students.splice(index, 1);
    }
  
    // Render the updated students array
    renderStudents();
  }
  
 // Function to update a student profile
    function updateStudent(id) {
        const nameInput = document.getElementsByName("name")[0];
        const emailInput = document.getElementsByName("email")[0];
        const gradeInput = document.getElementsByName("grade")[0];
        const ageInput = document.getElementsByName("age")[0];
        const degreeInput = document.getElementsByName("degree")[0];
      
        // Find the student with the specified ID
        const student = students.find((student) => student.ID === id);
      
        // Update the student object with new values
        if (student) {
          student.name = nameInput.value;
          student.email = emailInput.value;
          student.age = parseInt(ageInput.value);
          student.grade = parseFloat(gradeInput.value);
          student.degree = degreeInput.value;
        }
      
        // Clear input fields
        nameInput.value = "";
        emailInput.value = "";
        gradeInput.value = "";
        ageInput.value = "";
        degreeInput.value = "";
      
        // Render the updated students array
        renderStudents();
      }
  
  // Function to search for students by name, email, or degree
  function searchStudents() {
    const searchInput = document.getElementById("searchStudent");
    const searchValue = searchInput.value.toLowerCase();
  
    // Filter the students array based on search value
    const filteredStudents = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchValue) ||
        student.email.toLowerCase().includes(searchValue) ||
        student.degree.toLowerCase().includes(searchValue)
    );
  
    // Render the filtered students array
    renderFilteredStudents(filteredStudents);
  }
  
  // Function to render the filtered students array
  function renderFilteredStudents(filteredStudents) {
    const tableBody = document.getElementById("dataOfStudent");
  
    // Clear existing table rows
    tableBody.innerHTML = "";
  
    // Loop through each filtered student and create table rows
    filteredStudents.forEach((student) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td id="both">
          ${student.degree}
          <div>
            <img src="./edit 1.png" alt="Edit" class="edit-icon"  data-id="${student.ID}" />
            <img src="./trash-2 1.png" alt="Delete" class="delete-icon" onclick="deleteStudent(${student.ID})" data-id="${student.ID}" />
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  
  // Event listener to edit icons
    const table = document.getElementById("tableData");
    table.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-icon")) {
      const id = parseInt(event.target.getAttribute("data-id"));
      const student = students.find((student) => student.ID === id);
      if (student) {
        const nameInput = document.getElementsByName("name")[0];
        const emailInput = document.getElementsByName("email")[0];
        const gradeInput = document.getElementsByName("grade")[0];
        const ageInput = document.getElementsByName("age")[0];
        const degreeInput = document.getElementsByName("degree")[0];
  
        // Fill the form inputs with student data
        nameInput.value = student.name;
        emailInput.value = student.email;
        gradeInput.value = student.grade;
        ageInput.value = student.age;
        degreeInput.value = student.degree;
  
        // Change the button text to "Edit Student"
        addButton.innerText = "Edit Student";
        addButton.removeEventListener("click", addStudent);
  
        // Attach event listener to update student button
        addButton.addEventListener("click", () => {
          updateStudent(id);
          addButton.innerText = "Add Student";
          addButton.removeEventListener("click", updateStudent);
          addButton.addEventListener("click", addStudent);
        });
      }
    }
  });
  
  // Event listener to search button
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchStudents);

 // Render the initial students array
 renderStudents();

  

//  table.addEventListener("click", (event) => {
//     if (event.target.classList.contains("edit-icon")) {
//       const id = event.target.getAttribute("data-id");
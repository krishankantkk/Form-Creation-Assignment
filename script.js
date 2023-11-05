

  // Variables for college fields
const dropdownbtn = document.querySelector(".dropdown-btn-college");
const content = document.querySelector(".content");
const option = document.querySelector(".option");
const college_name = document.querySelector(".college_name");
const searchcollege = document.querySelector("#search-college");

// Array of colleges
let colleges = [
  "Malaviya National Institute of Technology", "Indian Institute of Technology", "BITS Pilani ", "Swami Keshwanand Rajasthan Agricultural University Bikaner", "University Of Rajasthan Jaipur", "Vedica Kanya College, Jaipur", "S.D. Govt College Ajmer", "Seth R. L. Saharia college, Jaipur", "Thapar University Patiala, Bhadson Road",
  "Indian Institute of Technology Ropar", "Birla Institute Of Scientific Research Jaipur", "BJS Rampuria Jain College, Bikaner", "Government College Ajmer", "IIT Bombay", "AIIMS Delhi", "IIM Banglore", "IISc Banglore"
];

// Function to add colleges to the dropdown
function addcollege() {
  colleges.forEach(college => {
    // Add a list item for each college
    let li = `<li onclick="updateCollege(this)">${college}</li>`;
    option.insertAdjacentHTML("beforeend", li);
  });
}

// Event listener for searching colleges
searchcollege.addEventListener("keyup", () => {
  // Create an empty array to hold search results
  let arr = [];
  let searchedValue = searchcollege.value.toLowerCase();
  // Filter colleges based on the search input
  arr = colleges.filter(data => {
    return data.toLowerCase().startsWith(searchedValue);
  }).map(data => `<li onclick="updateCollege(this)">${data}</li>`).join('');
  option.innerHTML = arr ? arr : `<p>Oops, college not found</p>`;
});

// Function to update the selected college
function updateCollege(selectedli) {
  searchedValue = "";
  addcollege();
  content.classList.remove("active");
  college_name.innerHTML = selectedli.innerHTML;
}

addcollege();

// Event listener for the "Sent To" dropdown button
dropdownbtn.addEventListener("click", () => {
  content.classList.toggle("active");
});

// Variables and event listeners for the "Branch" section
let dropdownBranch = document.querySelector(".dropdown-btn-branch");
const BranchContent = document.querySelector(".BranchContent");
const BranchOption = document.querySelector(".BranchOption");
const BranchName = document.querySelector(".Branch-Name");
const searchBranch = document.querySelector("#search-Branch");

// Array of branches
let BranchArr = [
  "Computer Science & Engineering", "Mechanical Engineering", "Civil Engineering", "Electronics and Communication Engineering",
  "Electrical Engineering", "Information Technology", "Robotics Engineering", "Automobile Engineering", "Chemical Engineering",
  "Construction Engineering", "Biomedical Engineering", "Aerospace Engineering", "Marine Engineering", "Petroleum Engineering",
  "Production & Industrial Engineering", "Environmental Engineering", "Metallurgical Engineering", "Ceramic Engineering", "Agricultural Engineering",
  "Energy Engineering"
];

// Event listener for the "Branch" dropdown button
dropdownBranch.addEventListener("click", () => {
  BranchContent.classList.toggle("active");
});

// Function to add branches to the dropdown
function addBranch() {
  BranchArr.forEach(BranchArr => {
    // Add a list item for each branch
    let li = `<li onclick="updateBranch(this)">${BranchArr}</li>`;
    BranchOption.insertAdjacentHTML("beforeend", li);
  });
}

addBranch();

// Event listener for searching branches
searchBranch.addEventListener("keyup", () => {
  // Create an empty array to hold search results
  let arr = [];
  let searchedValue = searchBranch.value.toLowerCase();
  // Filter branches based on the search input
  arr = BranchArr.filter(data => {
    return data.toLowerCase().startsWith(searchedValue);
  }).map(data => `<li onclick="updateBranch(this)">${data}</li>`).join('');
  BranchOption.innerHTML = arr ? arr : `<p>Oops, branch not found</p>`;
});

// Function to update the selected branch
function updateBranch(selectedli) {
  searchedValue = "";
  addBranch();
  BranchContent.classList.remove("active");
  BranchName.innerHTML = selectedli.innerHTML;
}

// Variables and event listeners for the "Admission" section
const dropdownbtnAddmission = document.querySelector(".dropdown-btn-addmision");
const AddmissionContent = document.querySelector(".AddmissionContent");
const AddmissionOption = document.querySelector(".AddmissionOption");
const AddmissionName = document.querySelectorAll(".AddmissionName");
const li = AddmissionOption.querySelectorAll("li");

// Event listener for the "Admission" dropdown button
dropdownbtnAddmission.addEventListener("click", () => {
  AddmissionContent.classList.toggle("active");
});

// Event listeners for the Admission options
li.forEach(item => {
  item.addEventListener("click", () => {
    // Get the text content of the clicked <li> item
    const selectedOption = item.textContent;

    // Display the selected option in the .AddmissionName element
    AddmissionName.forEach(nameElement => {
      nameElement.textContent = selectedOption;
    });

    // Hide the admission options by removing the "active" class
    AddmissionContent.classList.remove("active");
  });
});

// Variables and event listeners for the "Sent To" section with multiple selectors
const dropdownBtnSentto = document.querySelector(".dropdwon-btn-sentTo");
const senttoContent = document.querySelector(".sent-to-content");
const listCheckbox = document.querySelector(".listCheckbox");
const sentListItem = document.querySelectorAll(".sentListItem");

// Event listener for the "Sent To" dropdown button
dropdownBtnSentto.addEventListener("click", () => {
  senttoContent.classList.toggle("active");
});

// Event listeners for the sent items with checkboxes
sentListItem.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");
  });
});

// Event listener for the "Cancel" button to clear the form fields
document.getElementById("cancelButton").addEventListener("click", function() {
  // Clear the form fields
  document.getElementById("myForm").reset();
});

//code for to collect data from user when add button clicked form suubmit field
const form=document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let username=document.getElementById("name").value;
  let collegename=document.getElementById("college_name").innerHTML;
  let branch=document.getElementById("Branch-Name").innerHTML;
  let addmision=document.getElementById("AddmissionName").innerHTML;
  const radioButtons = document.querySelectorAll('input[name="Requirement"]');


//   console.log(username,collegename, branch, addmision,);
});
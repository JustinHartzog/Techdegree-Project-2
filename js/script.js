/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Added variables that store DOM elements
// and dynamically created the pagination links based on the number of students
const ul = document.querySelector('.student-list');
const lis = ul.children;
const numPages = Math.ceil(lis.length / 10);
const newDiv = document.createElement('div');
const newUl = document.createElement('ul');
newDiv.className = 'pagination';
document.querySelector('.page').appendChild(newDiv);
newDiv.appendChild(newUl);
const div = document.querySelector('.pagination');
for (let i = 1; i <= numPages; i += 1) {
  const li = document.createElement('li');
  var display = '';
  display = "<a href='#'>" + i + "</a>";
  li.innerHTML = display;
  newUl.appendChild(li);
}
const pageOne = document.querySelector('div.pagination li a');
pageOne.className = 'active';


// This function hides all the students except for those that should be displayed
function disappear(y, j) {
  for (let i = 0; i < y.length; i += 1) {
    let li = y[i];
    const top = j * 10;
    const bottom = top - 11;
    if(i < top && i > bottom) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  }
}

// This event listener gives the selected page the class name active
// and then sends the page number to the disapear function and updates which students are displayed
div.addEventListener('click', (e) => {
  const lastPage = document.querySelector(".active");
  lastPage.className = '';
  e.target.className = 'active';
  disappear(lis, e.target.textContent);
});

// calls the disappear function when the page first loads the program
// and shows olny the student on page 1
disappear(lis, 1);

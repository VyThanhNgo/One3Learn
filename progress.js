// Course data
const courses = [
    { name: "Basic English Grammar", level: "Beginner", progress: 70 },
    { name: "Intermediate English Conversation", level: "Intermediate", progress: 50 },
    { name: "Advanced Writing Skills", level: "Advanced", progress: 90 },
    { name: "English Vocabulary Expansion", level: "Beginner", progress: 20 },
    { name: "English for Business", level: "Advanced", progress: 100 }
  ];
  
  function renderCourses() {
    const courseList = document.getElementById('course-list');
  
    courses.forEach(course => {
      // Create a div for each course
      const courseElement = document.createElement('div');
      courseElement.classList.add('course');
  
      // Course Name
      const courseName = document.createElement('h2');
      courseName.textContent = course.name;
      courseElement.appendChild(courseName);
  
      // Course Level
      const courseLevel = document.createElement('p');
      courseLevel.classList.add('level');
      courseLevel.textContent = `Level: ${course.level}`;
      courseElement.appendChild(courseLevel);
  
      // Course Progress
      const progressContainer = document.createElement('div');
      progressContainer.classList.add('progress');
      
      const progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
      progressBar.style.width = `${course.progress}%`;
      progressBar.setAttribute('data-progress', course.progress);
      progressBar.textContent = `${course.progress}%`;
      
      progressContainer.appendChild(progressBar);
      courseElement.appendChild(progressContainer);
  
      // Append the course element to the course list
      courseList.appendChild(courseElement);
    });
  }
  
  // Run renderCourses when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', renderCourses);
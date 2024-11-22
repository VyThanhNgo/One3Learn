function showImage(functionName) {
    const imageMap = {
      login: "images/login.jpg",
      register: "images/login.jpg",
      forgot_pass: "images/PaswordRecovery.jpg",
      course_management: "images/courses.jpg",
      study_notes: "images/notes.jpg",
      track_progress: "images/Progess.jpg",
      tests: "images/TakeTest.jpg",
      community: "images/CommunityDiscusson.jpg",
    };

    const imgElement = document.getElementById('designImage');
    imgElement.src = imageMap[functionName] || "image/placeholder.png";
    imgElement.alt = `${functionName.replace('_', ' ')} Design`;
  }
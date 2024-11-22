function showImage(functionName) {
    const imageMap = {
      login: "images/Login.jpg",
      register: "images/Login.jpg",
      forgot_pass: "images/PaswordRecovery.jpg",
      course_management: "images/Courses.jpg",
      study_notes: "images/Notes.jpg",
      track_progress: "images/Progess.jpg",
      tests: "images/TakeTest.jpg",
      community: "images/CommunityDiscusson.jpg",
    };

    const imgElement = document.getElementById('designImage');
    imgElement.src = imageMap[functionName] || "image/placeholder.png";
    imgElement.alt = `${functionName.replace('_', ' ')} Design`;
  }

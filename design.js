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
  
  // Cập nhật src và alt
  imgElement.src = imageMap[functionName] || "images/placeholder.png";
  imgElement.alt = `${functionName.replace('_', ' ')} Design`;

  // Hiển thị hình ảnh khi có hình được chọn
  imgElement.style.display = "block";
}

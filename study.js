document.addEventListener("DOMContentLoaded", function() {
    const noteForm = document.getElementById("note-form");
    const saveMessage = document.getElementById("save-message");
    const notesList = document.getElementById("notes-list");
    const flashcardForm = document.getElementById("flashcard-form");
    const flashcardSaveMessage = document.getElementById("flashcard-save-message");
    const flashcardList = document.getElementById("flashcard-list");

    // Xử lý lưu ghi chú
    noteForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const topic = document.getElementById("topic").value;
        const content = document.getElementById("content").value;
        const noteItem = document.createElement("li");
        noteItem.innerHTML = `<strong>${topic}:</strong> ${content}`;
        notesList.appendChild(noteItem);
        saveMessage.classList.remove("hidden");
        setTimeout(() => saveMessage.classList.add("hidden"), 2000);
        noteForm.reset();
    });

    // Xử lý lưu flashcard
    flashcardForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const englishWord = document.getElementById("english-word").value;
        const vietnameseMeaning = document.getElementById("vietnamese-meaning").value;
        const flashcardItem = document.createElement("li");
        flashcardItem.innerHTML = `<strong>${englishWord}:</strong> ${vietnameseMeaning}`;
        flashcardList.appendChild(flashcardItem);
        flashcardSaveMessage.classList.remove("hidden");
        setTimeout(() => flashcardSaveMessage.classList.add("hidden"), 2000);
        flashcardForm.reset();
    });
});

// Chuyển đổi giữa các tab
function openTab(event, tabId) {
    const tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(content => content.style.display = "none");

    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Mặc định hiển thị tab "Không gian ghi chú"
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("noteTab").style.display = "block";
});

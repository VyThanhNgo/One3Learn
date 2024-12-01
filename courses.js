const cardElements = document.querySelectorAll('.card');
const courseDetailsModal = document.getElementById('course-details');

// Dữ liệu chi tiết khóa học
const courses = {
    course1: {
        title: "English for Beginners",
        description: "This course covers the basics of English grammar, vocabulary, and conversation.",
        grammar: [
            "Present Simple Tense: Used for daily actions and routines. Example: I eat breakfast at 7 AM.",
            "Subject Pronouns: I, You, He, She, It, We, They.",
            "Basic Sentence Structure: Subject + Verb + Object. Example: I like pizza.",
            "Articles: 'a' and 'an'. Example: I have a book. He has an apple.",
            "Verb 'to be': Forms - am, is, are. Example: I am a student."
        ],
        vocabulary: [
            "Hello (Xin chào)", 
            "Good morning (Chào buổi sáng)",
            "Goodbye (Tạm biệt)",
            "Eat (Ăn)",
            "Drink (Uống)"
        ],
        exercises: [
            "Fill in the blank: I ____ (eat) breakfast every morning. (Answer: eat)",
            "Make a sentence: 'I / like / pizza'. (Answer: I like pizza.)",
            "Choose the correct word: I have ___ apple. (a / an) (Answer: an)"
        ],
        dialogue: [
            "A: Hello, how are you? B: I am fine, thank you. And you?",
            "A: What is your name? B: My name is John."
        ],
        interestingFacts: [
            "English is the third most spoken language in the world.",
            "The letter 'e' is the most commonly used letter in the English language."
        ]
    },
    course2: {
        title: "Intermediate English",
        description: "Learn to speak more fluently with intermediate-level English grammar and vocabulary.",
        grammar: [
            "Past Simple Tense: Used to talk about completed actions. Example: I visited Paris last summer.",
            "Future Simple Tense: Used to talk about future actions. Example: I will go to the store tomorrow.",
            "Prepositions of Time: 'at', 'on', 'in'. Example: I will meet you at 5 PM.",
            "Comparatives: 'taller', 'smarter', 'more beautiful'. Example: John is taller than Mike."
        ],
        vocabulary: [
            "Car (Xe hơi)", 
            "Bus (Xe buýt)", 
            "Sunny (Nắng)", 
            "Cloudy (Mây)", 
            "Store (Cửa hàng)"
        ],
        exercises: [
            "Fill in the blank: I ____ (go) to the beach last weekend. (Answer: went)",
            "Choose the correct preposition: I will arrive ___ the airport at 8 AM. (Answer: at)",
            "Create a sentence using the word 'travel'."
        ],
        dialogue: [
            "A: What did you do last weekend? B: I went to the beach with my friends.",
            "A: What time will you arrive? B: I will arrive at 7 PM."
        ],
        interestingFacts: [
            "English is known for its irregular verbs, which can be challenging to learn.",
            "The shortest sentence in English is 'I am.'"
        ]
    },
    course3: {
        title: "Advanced English",
        description: "Enhance your English skills with advanced grammar, vocabulary, and speaking techniques.",
        grammar: [
            "Future Perfect Tense: Actions completed before a certain future time. Example: By 2025, I will have finished my degree.",
            "Conditionals (Type 1, 2, and 3): If I study, I will pass. If I had studied, I would have passed.",
            "Reported Speech: Convert direct speech to indirect. Example: She said she was going to the party.",
            "Relative Clauses: Example: The man who helped me is my friend."
        ],
        vocabulary: [
            "Deadline (Hạn chót)", 
            "Presentation (Thuyết trình)", 
            "Negotiation (Đàm phán)", 
            "Extraordinary (Phi thường)", 
            "Overwhelmed (Choáng ngợp)"
        ],
        exercises: [
            "Create a sentence using Future Perfect Tense.",
            "Convert direct speech to reported speech: 'I will go to the party tomorrow'.",
            "Write a dialogue using an idiom from this course."
        ],
        dialogue: [
            "A: Let's break the ice and start our meeting. B: Great idea! How should we begin?",
            "A: I had to burn the midnight oil to finish the project. B: Wow, that's dedication!"
        ],
        interestingFacts: [
            "Over 1 billion people speak English, making it a global language.",
            "English vocabulary has absorbed words from over 350 different languages."
        ]
    }
};

// Hàm mở modal và hiển thị nội dung
function openCourseDetails(courseId) {
    const course = courses[courseId];
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description;

    updateList('course-grammar', course.grammar);
    updateList('course-vocabulary', course.vocabulary);
    updateList('course-exercises', course.exercises);
    updateList('course-dialogue', course.dialogue);
    updateList('course-facts', course.interestingFacts);

    courseDetailsModal.style.display = 'flex';
    courseDetailsModal.style.opacity = 1;
}

// Hàm cập nhật danh sách trong modal
function updateList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

// Lắng nghe sự kiện mở và đóng modal
cardElements.forEach(card => card.addEventListener('click', () => openCourseDetails(card.dataset.course)));
courseDetailsModal.addEventListener('click', e => {
    if (e.target === courseDetailsModal) {
        courseDetailsModal.style.display = 'none';
    }
});
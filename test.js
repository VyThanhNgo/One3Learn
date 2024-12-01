document.getElementById('submitButton').onclick = function() {
    const correctAnswers = [
        1, // Q1
        1, // Q2
        1, // Q3
        1, // Q4
        1, // Q5
        1, // Q6
        1, // Q7
        1, // Q8
        1, // Q9
        1  // Q10
    ];
    
    let score = 0;
    let wrongQuestions = [];

    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = document.querySelector(`input[name="question${i}"]:checked`);
        if (selectedAnswer) {
            const answerValue = parseInt(selectedAnswer.value);
            if (answerValue === correctAnswers[i - 1]) {
                score++; // Tăng điểm cho câu trả lời đúng
            } else {
                wrongQuestions.push(`Q${i}`);
            }
        } else {
            wrongQuestions.push(`Q${i}`); // nếu không chọn câu trả lời
        }
    }

    // Hiển thị kết quả
    document.getElementById('result').innerHTML = `
        <p>Bạn đã trả lời đúng ${score} / 10 câu.</p>
        <p>Số câu sai: ${wrongQuestions.length} câu.</p>
        ${wrongQuestions.length > 0 ? '<p>Các câu sai: ' + wrongQuestions.join(', ') + '</p>' : ''}
    `;
};
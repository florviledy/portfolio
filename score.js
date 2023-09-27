document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("qcm-form");
    const submitButton = document.getElementById("submit-button");
    const resultDiv = document.getElementById("result");

    const questions = [
        {
            question: "Quelle équipe a remporté la coupe du monde en 2022 ?",
            answers: ["France", "Argentine", "Maroc"],
            correct: ["France"]
        },
       question: "Quelle équipe a remporté la coupe du monde en 2022 ?",
            answers: ["France", "Argentine", "Maroc"],
            correct: [""]
    ];

    submitButton.addEventListener("click", function () {
        const answers = [];

        questions.forEach(function (question, index) {
            const selectedAnswers = Array.from(form.elements[index]);
            const userAnswers = selectedAnswers.filter(answer => answer.checked).map(answer => answer.value);

            let isCorrect = true;
            if (userAnswers.length !== question.correct.length) {
                isCorrect = false;
            } else {
                userAnswers.forEach(function (userAnswer) {
                    if (!question.correct.includes(userAnswer)) {
                        isCorrect = false;
                    }
                });
            }

            answers.push(isCorrect);
        });

        displayResult(answers);
    });

    function displayResult(answers) {
        let score = 0;

        answers.forEach(function (answer) {
            if (answer) {
                score++;
            }
        });

        resultDiv.innerHTML = `<p>Votre score : ${score} / ${questions.length}</p>`;

        questions.forEach(function (question, index) {
            resultDiv.innerHTML += `<p>Question ${index + 1}: ${question.question}<br>`;

            if (answers[index]) {
                resultDiv.innerHTML += "<span class='correct'>Correct</span></p>";
            } else {
                resultDiv.innerHTML += "<span class='incorrect'>Incorrect</span></p>";
            }
        });

        resultDiv.classList.remove("hidden");
    }
});


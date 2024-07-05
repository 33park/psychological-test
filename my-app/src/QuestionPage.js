// src/QuestionPage.js
import React from "react";

function QuestionPage({ question, onAnswer }) {
	return (
		<div>
			<h2>{question.question}</h2>
			<button onClick={() => onAnswer(question.options)}>Next</button>
		</div>
	);
}

export default QuestionPage;

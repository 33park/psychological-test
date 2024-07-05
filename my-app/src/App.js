// src/App.js
import React, { useState } from "react";
import QuestionPage from "./QuestionPage";
import ResultPage from "./ResultPage";

function App() {
	const [values, setValues] = useState({ m: 0, b: 0, t: 0, i: 0 });
	const [currentPage, setCurrentPage] = useState(0);
	const [result, setResult] = useState(null);

	const questions = [
		{ question: "Question 1", options: { m: 1, b: 0, t: 0, i: 0 } },
		{ question: "Question 2", options: { m: 0, b: 1, t: 0, i: 0 } },
		{ question: "Question 3", options: { m: 0, b: 0, t: 1, i: 0 } },
		{ question: "Question 4", options: { m: 0, b: 0, t: 0, i: 1 } },
	];

	const handleAnswer = (selectedOption) => {
		setValues((prevValues) => ({
			m: prevValues.m + selectedOption.m,
			b: prevValues.b + selectedOption.b,
			t: prevValues.t + selectedOption.t,
			i: prevValues.i + selectedOption.i,
		}));

		if (currentPage < questions.length - 1) {
			setCurrentPage(currentPage + 1);
		} else {
			calculateResult();
		}
	};

	const calculateResult = () => {
		const valuesArray = Object.entries(values);
		valuesArray.sort((a, b) => b[1] - a[1]);
		const topTwo = valuesArray.slice(0, 2).map((item) => item[0]);
		setResult(topTwo);

		// 결과 데이터 전송 (예: 콘솔에 출력)
		console.log("Top two traits:", topTwo);
	};

	return <div>{result ? <ResultPage result={result} /> : <QuestionPage question={questions[currentPage]} onAnswer={handleAnswer} />}</div>;
}

export default App;

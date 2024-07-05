// src/ResultPage.js
import React from "react";

function ResultPage({ result }) {
	return (
		<div>
			<h2>Result</h2>
			<p>Your top two traits are: {result.join(" and ")}</p>
		</div>
	);
}

export default ResultPage;

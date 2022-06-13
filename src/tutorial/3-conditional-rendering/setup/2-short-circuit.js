import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState("");
	const [isError, setError] = useState(false);
	// const firstValue = text || 'hello world';
	// const secondValue = text && 'hello world';

	return (
		<>
			{/* <h1> {firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
			<h1>{text || "jone doe"}</h1>
			<button className="btn" onClick={() => setError(!isError)}>
				toogle error
			</button>
			{isError && <h1>Error...</h1>}
			{isError ? (
				<p>there is an error..</p>
			) : (
				<div>
					<h2>there is no error</h2>
				</div>
			)}
			{/* {!text && <h1>hello world</h1>} */}
		</>
	);
};

export default ShortCircuit;

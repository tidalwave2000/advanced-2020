import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
	// setup state variable to retrieve the size of browser window
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		console.log("useEffect");
		window.addEventListener("resize", checkSize);
		// cleanup function
		return () => {
			console.log("cleanup");
			// remove event listners that were previous created
			window.removeEventListener("resize", checkSize);
		};
	});

	console.log("render");

	return (
		<>
			<h1>window</h1>
			<h2>{size} PX</h2>
		</>
	);
};

export default UseEffectCleanup;

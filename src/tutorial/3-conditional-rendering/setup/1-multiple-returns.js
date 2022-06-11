import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
	const [isloading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setuser] = useState("default user");

	useEffect(() => {
		fetch(url)
			.then((resp) => {
				// if the response web page status is in the range of 200-299 are true then return response to json
				if (resp.status >= 200 && resp.status <= 299) {
					return resp.json();
				} else {
					// if resp.status if not inbetween 200 and 299 then
					//declare that there's an error.
					setIsLoading(false);
					setIsError(true);
					throw new Error(resp.statusText);
				}
			})
			.then((user) => {
				const { login } = user;
				setuser(login);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	if (isloading) {
		return (
			<div>
				<h1>Loading....</h1>
			</div>
		);
	}
	if (isError) {
		return (
			<div>
				<h1>Error....</h1>
			</div>
		);
	}
	return (
		<div>
			<h1>{user}</h1>
		</div>
	);
};

export default MultipleReturns;

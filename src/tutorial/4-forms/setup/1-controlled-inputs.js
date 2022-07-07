import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	// handler for form submited via event
	const handleSubmit = (e) => {
		// prevents the page from being refreshed
		e.preventDefault();
		if (firstName && email) {
			// lazy way to setup a unique id for each item in the array
			const person = { id: new Date().getTime().toString(), firstName, email };
			setPeople((people) => {
				// amend the people array with a new person object
				return [...people, person];
			});
			// clear the state values of firstName and email
			setFirstName("");
			setEmail("");
		} else {
			console.log("empty values");
		}
	};

	return (
		<>
			<article>
				{/* submit the data on the form when the form changes or you click a button */}
				<form className="form" onSubmit={handleSubmit}>
					<div className="form-control">
						{/* the label for the input field collecting namd  */}
						<label htmlFor="firstName">Name : </label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={firstName}
							// collects the event data from the input and updates the
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="form-control">
						{/* the label and input for the email address data */}
						<label htmlFor="email">Email : </label>
						<input
							type="text"
							id="email"
							name="email"
							value={email}
							// update state value with the event.target value
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type="submit">add person</button>
        </form>
        {/* iterate the new item added to the array and display them on screen */}
				{people.map((person) => {
					const { id, firstName, email } = person;
					return (
						<div className="item" key={id} >
							<h4>{firstName}</h4>
							<p>{email}</p>
						</div>
					);
				})}
			</article>
		</>
	);
};

export default ControlledInputs;

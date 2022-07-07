import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
  // handler for form submited via event
  const handleSubmit = (e) => {
    // prevents the page from being refreshed
		e.preventDefault();
		console.log(firstName, email);
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
			</article>
		</>
	);
};

export default ControlledInputs;

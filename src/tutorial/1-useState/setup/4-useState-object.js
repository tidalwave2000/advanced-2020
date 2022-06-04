import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    //if using object use spread operator to preserve the data in the object that's not going to change.
    // setmessage({ ...person, message: "Hello World" });
    setMessage("Hello World");
  };

  return (
		<>
			<h3>{name}</h3>
			<h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
		</>
	);
};

export default UseStateObject;

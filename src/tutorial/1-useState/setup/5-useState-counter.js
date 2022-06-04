import React, { useState } from 'react';

//const [value, setValue] = useState(0);

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    //setup timed delay of 2 seconds
    setTimeout(() => { 
      //setValue(value + 1);
      //grab the current state and update it in real time
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000);
    
  }

  return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h2>regular counter</h2>
				<h1>{value}</h1>
				<button className="btn" onClick={() => setValue(value - 1)}>
					Decrease
				</button>
				<button className="btn" onClick={reset}>
					{" "}
					Reset
				</button>
				<button className="btn" onClick={() => setValue(value + 1)}>
					Increase
				</button>
			</section>
			<section style={{ margin: "4rem 0" }}>
				<h2>more complex counter</h2>
				<h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          Increase Later
        </button>
			</section>
		</>
	);
  
};

export default UseStateCounter;

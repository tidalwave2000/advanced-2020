import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);
// when we want a side effect to happen
  useEffect(() => {
    console.log("call useEffect");
    //You can setup a condition statement in side of a hook not outside of a hook
    if (value >= 1) {
      document.title = `New Meassage(${value})`;
    }
    
  }, [value]);
  
  useEffect(() => {
    console.log("hello world");
  }, []);
  

  console.log("render component");


  return (
  <>
      <h1>{value}</h1>
      {/* increase value by 1 every time you click on the button it also rerenders on every click
      */}
      <button className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
      
    </>
  );
};

export default UseEffectBasics;

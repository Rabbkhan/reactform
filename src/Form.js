import React, { useState, Fragment } from 'react';
import { useRef } from 'react';

const Form = ({onSubmit}) => {
  const nameinputref = useRef();
  const ageinputref = useRef();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const userdatacollection = (e) => {
    setName(e.target.value);
  };

  const agedatacollection = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleSubmit(name);
    // handleSubmit(age)
    onSubmit({name, age});
    setName('');
    setAge('');
    console.log(nameinputref.current.value)
    // console.log(name);
    // console.log(age);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text"
         placeholder="username"
          value={name} 
          onChange={userdatacollection} 
          ref={nameinputref}
          /><br />
        <label htmlFor="age">Age</label>
        <input type="number"
         placeholder="age"
          value={age}
           onChange={agedatacollection}
           ref={ageinputref} 
           />
        <button type="submit">submit</button>
      </form>
    </Fragment>
  );
};

export default Form;

import React, { useState } from 'react';

const Form = ({onSubmit}) => {
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
    // console.log(name);
    // console.log(age);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" value={name} onChange={userdatacollection} /><br />
        <label htmlFor="age">Age</label>
        <input type="number" placeholder="age" value={age} onChange={agedatacollection} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;

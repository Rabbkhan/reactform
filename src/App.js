import { useState } from 'react';
import './App.css';
import Form from './Form';
import FormView from './FormView';
function App(props) {
// const data ={
//   'name':'rabbil',
//   'age':23

// }
const [submitData, SetSubmitData]= useState([])
 const handeFormSubmit =(data)=>{
  SetSubmitData([...submitData, data]);
 }

return (
    <>
    <Form onSubmit={handeFormSubmit}/>
    {submitData.map((formData, index) => (
        <FormView key={index} name={formData.name} age={formData.age} />
      ))}
    </>
  );
}

export default App;

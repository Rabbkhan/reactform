import { useState, Fragment } from 'react';
import './App.css';
import Form from './Form';
import FormView from './FormView';
function App(props) {

const [submitData, SetSubmitData]= useState([])
 const handeFormSubmit =(data)=>{
  SetSubmitData([...submitData, data]);
 }

return (
    <Fragment>
    <Form onSubmit={handeFormSubmit}/>
    {submitData.map((formData, index) => (
        <FormView key={index} name={formData.name} age={formData.age} />
      ))}
    </Fragment>
  );
}

export default App;

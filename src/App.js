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
        <FormView key={index} Product={formData.Product}  selling={formData.selling} productname={formData.productname} />
      ))}
    </Fragment>
  );
}

export default App;

import React, { useState, Fragment, useEffect } from 'react';
import { useRef } from 'react';

const Form = ({onSubmit}) => {
  const Productinputref = useRef();
  const sellinginputref = useRef();
  const productnameinputref =useRef();
  const [Product, setProduct] = useState('');
  const [selling, setselling] = useState('');
  const [productname, setProductName] = useState('');
const [data, setData] = useState('');

useEffect(()=>{
  const Storedata = localStorage.getItem('myData')
  if(Storedata){
    setData(Storedata)
  }
},[])
  const userdatacollection = (e) => {
    setProduct(e.target.value);
    setData(e.target.value);

  };

  const sellingdatacollection = (e) => {
    setselling(e.target.value);
    setData(e.target.value);

  };
  const productnamedatacollection = (e)=>{
    setProductName(e.target.value);
    setData(e.target.value);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmit({Product, selling, productname});
    setProduct('');
    setselling('');
    setProductName('');
    console.log(Productinputref.current.value)
  
  };
  const handleSave =()=>{
    localStorage.setItem('myData',data)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Product">Product Id</label>
        <input type="number"
         placeholder="Product"
    
    name={data}
    onClick={handleSave}
         value={Product} 
          onChange={userdatacollection} 
          ref={Productinputref}
          /><br />
        <label htmlFor="selling">selling</label>
        <input type="number"
         placeholder="selling"
    
    name={data}
    onClick={handleSave}
         value={selling}
           onChange={sellingdatacollection}
           ref={sellinginputref} 
           />
        <label htmlFor="ProductName">Product Name</label>
        <input type="text"
         placeholder="Product Name"
         name={data}
         onClick={handleSave}

          value={productname}
           onChange={productnamedatacollection}
           ref={productnameinputref} 
           />
        <button type="submit">submit</button>
      </form>
    </Fragment>
  );
};

export default Form;

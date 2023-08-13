import React, { useState, useEffect } from 'react';

const Form = ({ onSubmit }) => {
  const [Product, setProduct] = useState('');
  const [selling, setselling] = useState('');
  const [productname, setProductName] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const userdatacollection = (e) => {
    setProduct(e.target.value);
  };

  const sellingdatacollection = (e) => {
    setselling(e.target.value);
  };

  const productnamedatacollection = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ Product, selling, productname });
    setProduct('');
    setselling('');
    setProductName('');
  };

  useEffect(() => {
    // const productPrice = parseFloat(Product);
    const sellingPrice = parseFloat(selling);
    if ( !isNaN(sellingPrice)) {
      const calculatedTotalPrice =  sellingPrice;
      setTotalPrice(calculatedTotalPrice);
    }
  }, [Product, selling]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Product">Product Id</label>
        <input
          type="number"
          placeholder="Product"
          value={Product}
          onChange={userdatacollection}
        />
        <br />
        <label htmlFor="selling">selling</label>
        <input
          type="number"
          placeholder="selling"
          value={selling}
          onChange={sellingdatacollection}
        />
        <br />
        <label htmlFor="ProductName">Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          value={productname}
          onChange={productnamedatacollection}
        />
        <br />
        <button type="submit">submit</button>
      </form>
      <div>
        <p>Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Form;

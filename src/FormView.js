import React from 'react'
import './formview.css'
const FormView = ({Product,selling, productname}) => {
  return (
    <div>

<div className='container'>
    <div className='username'>
{Product}
    </div>
    <div className='age'>
        {selling}
    </div>
    <div className='age'>
        {productname}
    </div>
</div>

    </div>
  )
}

export default FormView
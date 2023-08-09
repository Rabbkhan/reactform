import React from 'react'
import './formview.css'
const FormView = ({name,age}) => {
  return (
    <div>

<div className='container'>
    <div className='username'>
{name}
    </div>
    <div className='age'>
        {age}
    </div>
</div>

    </div>
  )
}

export default FormView
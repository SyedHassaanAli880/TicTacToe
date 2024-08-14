import React from 'react';

const Square = (props) => {
  return (
    <div className='square-buttons' style = {{border:'1px solid', width : '34%', height:'100px'}}
    onClick={props.onClick}
    >
        <h1>{props.value}</h1>
    </div>
  )
}

export default Square

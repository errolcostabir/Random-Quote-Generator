import React from 'react';

const Button=({buttonName,clickHandler})=>(
    <button id="new-quote" type="button" class="btn btn-warning" style={{fontWeight:"bold", color: "white", marginBottom: "7px"}}  onClick={clickHandler}>{buttonName}</button>
);

export default Button;

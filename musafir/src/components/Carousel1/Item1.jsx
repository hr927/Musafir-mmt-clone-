import React from "react";

export default function Item1(props) {
  const style1 = { margin: "10px", border:"1px solid red", height:"60vh", display:"block",fontWeight:"400"};
  // const style2 = { boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" };
  return (
    <div style={{ ...style1 }}>
      <img src={props.url} alt={props.name}  style={{height:"80%", width:"100%"}}/>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p >{props.price}</p>
    </div>
  );
}
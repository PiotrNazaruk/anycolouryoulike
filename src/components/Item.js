import React, { Component } from 'react';
let ligthbox3 = require('lightbox2')
const Item = (props) => {
  return ( 
   <div style={{ backgroundImage:`url(${props.img})`  }} className={`gallery__img ${props.styleNumber}`} ><a href={props.img} data-lightbox="roadtrip"> <img src='' alt=""/></a></div>

   );
}
 
export default Item;
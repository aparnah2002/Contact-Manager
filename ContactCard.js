import React from "react";
import user from "../images/download.png";


const ContactCard =(props) =>{
    const {id,name,email} = props.contact;
  return(
  
    <div className="item" >
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <div style = {{marginLeft:"90%",color: "red"}}>
        <i className="trash alternate outline icon" 
           onClick={() => props.clickHandler(id)}>
           
        </i>
        </div>
        
    </div>
  );
}
export default ContactCard;

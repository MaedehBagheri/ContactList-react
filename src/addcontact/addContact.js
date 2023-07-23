import { useState } from "react"
import { addContact } from "../services/addServices"
import "./addContact.css"

const AddContact =({history})=>{
    const[contact,setContact] =useState({
        name:"",
        email:""
    })

const changeHandler=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
}



const submitForm =async(e)=>{
    if(!contact.name || !contact.email){
        alert("all fields are mandatory !");
        return;
    }
e.preventDefault();

try {
      
   await addContact(contact);
   setContact({name:" ", email : ""});
   history.push("/")
  
  } catch (error) {}
}


    return(
        <form className="form-contact" onSubmit={submitForm}>
<div>
    <label>name</label>
    <input type="text" name="name"
    value={contact.name}
    onChange={changeHandler}/>
</div>
<div>
    <label>email</label>
    <input type="text" name="email"
    value={contact.email}
    onChange={changeHandler}/>
</div>

<button className="submit">add contact</button>
        </form>
    )
}

export default AddContact;
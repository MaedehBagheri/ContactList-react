import { useEffect, useState } from "react"
import { getOneContact } from "../services/getOnrContact"
import { updateContact } from "../updateContact"
import "./editContact.css"
const EditContact =({history,match})=>{
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
try{
    await updateContact(match.params.id,contact);
    history.push("/")
}catch(error){}
}

useEffect(()=>{
const localFetch = async ()=>{
    try {
      const {data}=await  getOneContact(match.params.id);
      setContact({name:data.name , email:data.email})
    } catch (error) {
        
    };
}
localFetch();
},[])


    return(
        <form className="edit-form" onSubmit={submitForm}>
<div>
   
    <input type="text" name="name"
    value={contact.name}
    onChange={changeHandler}/>
</div>
<div>
  
    <input type="text" name="email"
    value={contact.email}
    onChange={changeHandler}/>
</div>

<button className="submit">add contact</button>
        </form>
    )
}

export default EditContact;
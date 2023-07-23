import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "../conntact/contact";
import { get } from "../services/getContact";
import  {useEffect, useState} from "react";
import { deleteContact } from "../services/deleteContact";
import "./contactList.css"
const ContactList =(props) =>{
const [Contacts,setContacts] = useState(null)  
const[searchItem,setSearchItem]= useState("")
const [allContacts ,setAllContacts]=useState("")
 useEffect(() =>{
        const getContacts =async()=>{
        const {data} =await get()
        setContacts(data);
        setAllContacts(data)
        }
        try {
          getContacts()
        } catch (error) {
          console.log(error)
        }
        },[])

        const removeHandler =async(id) =>{

            try {
              await deleteContact(id)
              const filteredContact =Contacts.filter((c)=> c.id !== id);
              setContacts(filteredContact);
              
            } catch (error) {
              
            }
            
            
              };

              const searchHandler =(e)=>{
                setSearchItem(e.target.value);
                const search =e.target.value;
if(search !== ""){
  const filteredContacts =allContacts.filter((c)=>{
    return Object.values(c)
    .join("")
    .toLowerCase()
    .includes(search.toLowerCase())});

    setContacts(filteredContacts)
}else{
  setContacts(allContacts)
}
              }
            
    return <>
  <div className="search">
    <div>
      <input type="text" 
      placeholder="search ..."
      value={searchItem} onChange={searchHandler}/>
    </div>
  <div>
       <Link to="/add">
       <button className="add-contact">add</button>
       </Link>
    </div>
  </div>
    {Contacts ?
        Contacts.map((contact) =>{
            const {name,email,id} =contact;
            return   (
            <Contact contact={contact} removeHandler={removeHandler}/>
            )
        }) : <p>loading !</p>
    }
    </>
}

export default ContactList;
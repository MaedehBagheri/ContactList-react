import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./contact.css";
const Contact =({contact,removeHandler})=>{
    const {name,email,id} =contact;
return(

    <div className="contact" key={id}>
<Link to={{pathname:`user/${id}`,state:{contact:contact}}}>
     <div className="contact-information">
     <p>{name}</p>
        <p>{email}</p>
     </div>
     </Link>
<div className="contact-btn">
<Link to={`/edit/${id}`}>
 <div>
 <button>edit</button>
 </div>
     </Link>
       <div>
       <button onClick={()=> removeHandler(id)}>delete</button>
       </div>
</div>
            </div>
)

}

export default Contact;
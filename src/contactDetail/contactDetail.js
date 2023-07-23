

const ContactDetail =({location})=>{

const {contact} = location.state;

    return(
<div>
<p>name:{contact.name}</p>
<p>email:{contact.email}</p>
</div>
    )
}

export default ContactDetail;
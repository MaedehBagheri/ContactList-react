
import './App.css';
import AddContact from './addcontact/addContact';
import ContactList from './contactlist/contactList';
import {Route,Switch }from "react-router-dom";
import ContactDetail from './contactDetail/contactDetail';
import EditContact from './editcontact/editContact';

function App() {
  return (
  <div className='main-app'>
      <div className="App">
   <h1>Contact App</h1>
<Switch>
<Route path= "/edit/:id" component={EditContact} />
<Route path= "/user/:id" component={ContactDetail} />
  <Route path ="/add" component={AddContact} />
  <Route path= "/" exact component={ContactList} />
</Switch>
    </div>
  </div>
  );
}

export default App;

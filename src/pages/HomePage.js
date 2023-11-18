import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getContacts, getUser } from "redux/selectors";


const HomePage = () => {

  const token = useSelector(getUser)

    const contacts = useSelector(getContacts);
    useEffect(() => {
      if (contacts.error === null || token.authorizationToken !== null) {
        return;
      }
      
      toast.error(contacts.error);
      return;
    }, [contacts]);

    return (
    <div style={{ padding: 20 }}>
        <h1 style={{ marginBottom: 10 }}>Phonebook</h1>
        <ContactForm />
  
        <h2 style={{ marginBottom: 10 }}>Contacts</h2>
        <Filter />
        <ContactList />
        
        <Toaster />
  
        
      </div>  );
}
 
export default HomePage;
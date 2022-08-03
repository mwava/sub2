import React from 'react';
import ContactItem from './ContactItem';

 
function ContactList({ contacts,onDelete,onArchive }) {
  const activeContact = contacts.filter((contact) => 
  contact.archived === false );
 return (
   <div className="contact-list">
     {activeContact.length !==0 ?(contacts.map((contact) => (
         <ContactItem 
         key={contact.id} 
         id={contact.id} 
         onDelete={onDelete}
         onArchive={onArchive} 
         {...contact} />
       ))):(<h2>kosong</h2>)
       
     }
   </div>
 );
}
 
export default ContactList;
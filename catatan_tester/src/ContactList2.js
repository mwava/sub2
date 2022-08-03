import React from 'react';
import ContactItem from './ContactItem';

 
function ContactList2({ contacts,onDelete,onArchive }) {
  const archiveContact = contacts.filter((contact) =>  
    contact.archived === true);
 return (
   <div className="contact-list">
      {archiveContact.length !==0 ?(contacts.map((contact) => (
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
 
export default ContactList2;
import React from 'react';
import ContactList from './ContactList';
import { getInitialData } from './data';
import ContactList2 from './ContactList2';
import ContactInput from './ContactInput';
import SearchKey from './SearchKey';


class ContactApp extends React.Component{
  constructor(props){
    super(props);
      this.state={
        contacts : getInitialData(),
        searchKey : getInitialData()
        
      }
      this.onArchiveHandler=this.onArchiveHandler.bind(this);
      this.onDeleteHandler=this.onDeleteHandler.bind(this);
      this.onAddContactHandler = this.onAddContactHandler.bind(this);
      this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onDeleteHandler(id){
    const contacts = this.state.contacts.filter(contact =>contact.id !==id);
    this.setState({contacts})
  }
  onArchiveHandler(id){
    const contacts =
    this.state.contacts.map((contact)=> contact.id === id ? {...contact, archived: !contact.archived} : contact)
    this.setState({contacts})
  }
  onSearchHandler(e) {
    this.setState((prevState) => ({
      searchKey: prevState.contacts.filter((contact) => contact.title.toLowerCase().includes(e.target.value.toLowerCase())),
    }));
  }
  onAddContactHandler({title,body}){
    let data = new Date()
    this.setState((prevState)=>{
      return{
        contacts:[
          ...prevState.contacts,
          {
            id: +new Date(),
        title ,
        body ,
        createdAt: data.toLocaleDateString() ,
        archived: false,
          }
        ],
        searchKey:[
          ...prevState.contacts,
          {
            id: +new Date(),
        title ,
        body ,
        createdAt: data.toLocaleDateString() ,
        archived: false,
          }
        ]
      }
    })
  }
 render(){
  
  
    return(
      <div className="contact-app">
        
   <h1>Daftar Kontak</h1>
   <SearchKey onSearch={this.onSearchHandler}></SearchKey>
   <h2>Tambah Kontak</h2>
   <ContactInput addContact={this.onAddContactHandler}/>
   <h2>Daftar Kontak</h2>
    <ContactList  contacts={this.state.contacts} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
  
   <h2>Daftar Kontak 2</h2>
   <ContactList2  contacts={this.state.contacts} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
   
 </div>
    )
  }
}

 
export default ContactApp;  
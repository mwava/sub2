import React from "react";
import {showFormattedDate} from './data'

class ContactInput extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            body:'',
            createdAt: showFormattedDate()
            
        }
            this.onTitleChangeHandler=this.onTitleChangeHandler.bind(this);
            this.onBodyChangeHandler=this.onBodyChangeHandler.bind(this);
            this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event){
        this.setState(()=>{
            return{
                title: event.target.value
            }
        })
    }

    onBodyChangeHandler(event){
        this.setState((
            
        )=>{
            return{
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault()

        this.props.addContact(this.state);
    }

    render(){
        return(
            <form className="contact-input" onSubmit={this.onSubmitHandler}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeHandler}></input>
                <textarea type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
                <button type="submit">Tambah</button>

            </form>
        )
    }
}


export default ContactInput
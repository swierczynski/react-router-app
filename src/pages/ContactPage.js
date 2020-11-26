import React, {Component} from 'react';
import {Prompt} from 'react-router-dom';
import '../styles/ContactPage.css'

class ContactPage extends Component {

    state={
        textAreaValue:''
    }
    handleChange =(e)=> {
        this.setState({
            textAreaValue: e.target.value,
        })
    }
    handleSubmit =(e)=> {
        e.preventDefault();
        this.setState({
            textAreaValue:'',
        })
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h1>Napisz do nas</h1>
                    <textarea value={this.state.textAreaValue} onChange={this.handleChange} placeholder='wpisz wiadomość...'></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt when={this.state.textAreaValue} message='Niewysłany formularz' />
            </div>
           
        )
    }
}
 
export default ContactPage;
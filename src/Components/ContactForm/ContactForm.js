import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css'

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    
    state = {
        name: '',
        number: ''
    }

    nameInputId = uuidv4();
    numberInputId = uuidv4();

    handleChange = e => {
        const value = e.currentTarget.name
        
        this.setState({
            [value]: e.currentTarget.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const idContact=uuidv4()

        this.props.onSubmit(this.state, idContact)
        this.reset()
    }

    reset = () => {
        this.setState({
        name: '',
        number: ''
    })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label htmlFor={this.nameInputId}>Name
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        id={this.nameInputId}
                    />
                </label>

                <label htmlFor={this.numberInputId}>Number
                    <input
                        type='text'
                        name='number'
                        value={this.state.number}
                        onChange={this.handleChange}
                        id={this.numberInputId}
                    />
                </label>

                <button type='submit'>Add contact</button>
            </form>
        );
    }
}


 
export default ContactForm;
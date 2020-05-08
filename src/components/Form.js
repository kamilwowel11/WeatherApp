import React from 'react'
import './Form.css'

const Form = props => {
    return (
        <form onSubmit = {props.submit} className="inputButton">
            <input type="text" 
            value={props.value} 
            onChange={props.change}
            placeholder="Wpisz miasto"
            
            />
            <button>Wyszukaj miasto </button>

        </form>
    )

}

export default Form
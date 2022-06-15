import React, { Fragment, useState } from 'react';

const initialState = {
        name: '',
        description: '',
        link: '',
        imagem: ''
    }

const Form = (props) => {
    const [fields, setFields] = useState(initialState)
    const handleFieldsChange = (event) => setFields({
        ...fields, [event.currentTarget.name]: event.currentTarget.value
    });

    const handleSubmit = (event) => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialState)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input id='name' type='text' name='name' value={fields.name} onChange={handleFieldsChange}></input>
                </div>
                <br/>
                <div>
                    <label htmlFor='description'>description: </label>
                    <textarea id='description' type='text' name='description' value={fields.description} onChange={handleFieldsChange}></textarea>
                </div>
                <br/>
                <div>
                    <label htmlFor='link'>Link: </label>
                    <input id='link' type='text' name='link' value={fields.link} onChange={handleFieldsChange}></input>
                </div>
                <br/>
                <div>
                    <label htmlFor='imagem'>Imagem: </label>
                    <input id='imagem' type='text' name='imagem' value={fields.imagem} onChange={handleFieldsChange}></input>
                </div>
                <br/>
                <input type='submit'/>
            </form>
        </Fragment>
    );
}

export default Form;
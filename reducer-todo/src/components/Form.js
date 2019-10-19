import React from 'react';

export default function Form({item, handleSubmit, handleChange, clear}) {

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeHolder="New Todo Item"
                value={item}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
            <button onClick={clear}>Clear</button>
        </form>
    )
}
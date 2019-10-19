import React from 'react';

export default function Todo({item, toggle, id, completed}) {
    return (
        <div style={completed ? {textDecoration: "line-through"} : {}} onClick={() => toggle(id)}>
            <h2>{item}</h2>
        </div>
    )
}
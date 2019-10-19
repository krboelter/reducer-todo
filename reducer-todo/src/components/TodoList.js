import React from 'react';
import Todo from './Todo';

export default function TodoList({todos, toggle}) {
    return (
        <>
            {todos.map (item => (
                <Todo key={item.id} {...item} toggle={toggle} />
        ))}
        </>
    )
}
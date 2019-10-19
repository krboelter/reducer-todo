import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import { reducer, initialState } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleSubmit(event) {
    event.preventDefault()
    dispatch({ type: "ADD_TODO", payload: state.item})
  }

  function handleChange(event) {
    dispatch({ type: "INPUT_ITEM", payload: event.target.value})
  }

  function clear(event) {
    event.preventDefault();
    dispatch({ type: "CLEAR"})
  }

  function toggle(id) {
    dispatch({ type: "TOGGLE_TODO", payload: id})
  }

  return (
    <div className="App">
      <TodoList todos={state.todos} toggle={toggle} />
      <Form item={state.item} handleSubmit={handleSubmit} handleChange={handleChange} clear={clear} />
    </div>
  );
}

export default App;

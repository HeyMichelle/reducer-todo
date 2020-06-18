import React from 'react';

export default function TodoForm(props) {
  return(
    <div>
      <div>
        <form onSubmit={props.handleSubmit}>
          <label>
            <input type='text' name='description' onChange={props.handleChanges} />
          </label>
          <button type='submit'>Submit</button>
          <button onClick={props.clearCompleted}>Clear Completed Tasks</button>
        </form>
      </div>
    </div>
  )
}


// - Using the `reducer` hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
// - Now render your list of todos from your reducer in your app
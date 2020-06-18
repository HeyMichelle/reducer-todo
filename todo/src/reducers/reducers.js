export const initialState = [
    {
      task: 'First task to do, make a todo-list',
      completed: false,
      id: 392182
    },
    {
      task: 'Study reducer patterns',
      completed: false,
      id: 392379
    }
  ]

export function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            task: action.payload, // was item
            completed: false,
            id: new Date()
          }
        ]
      case 'COMPLETED':
        return state.map(task => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: !task.completed
            }
          }
          return task
        })
      case 'CLEAR_COMPLETED':
        return state.filter(task => !task.completed)
  
  
      default:
        return 'default'
    }
  }

  // titleReducer is a place to organize all the actions we want to do for titles in the application. All of those actions get dispatched to this reducer, and the state gets updated here. The actions being performed are TOGGLE_EDITING and UPDATE_TITLE

// Let’s define each building block of this pattern before we write our first reducer.

// Pure function definition:
// 1. no side effects
// 2. always returns the same result when given the same inputs

// Reducer definition:
// 1. Pure function
// 2. takes 2 objects and returns 1 (hence the name)
// 3. For useReducer and Redux, the first object is previous state, and the second is an action object
// 4. The reducer returns a new state object based on the action applied to the state object passed in

// Action definition:
// 1. An object with a required 'type' key
// 2. optional 'payload' key

// Actions are "dispatched" by dispatch functions

// Export two things: initialState, titleReducer
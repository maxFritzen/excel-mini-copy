

export const defaultState = {
  "inst1": {
    id: "inst1",
    text: 'Fill out column B with first names of column A',
    done: false
  },
  "inst2": {
    id: "inst2",
    text: 'Fill out column C with last names of column A',
    done: false
  },
  "inst3": {
    id: "inst2",
    text: 'Fill out column D with email addresses of column A, using the form "firstname.lastname@email.com"',
    done: false
  }
}

export default (state = defaultState, action) => {
  const inst = state[action.id]
  switch (action.type) {
    case 'DONE':
      return {
        ...state,
        [action.id]: {
          ...inst,
          done: true
        }
      }

    default: return state;

  }
}

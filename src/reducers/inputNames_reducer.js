import {
  FNAMEINPUT,
  LNAMEINPUT,
  EMAILINPUT,
  FILLFIRSTNAMES,
  FILLLASTNAMES,
  FILLEMAILS } from '../actions';

export const defaultState = {
    'person1': {
      id: "person1",
      firstname: "",
      lastname: "",
      email: ""
    },
    "person2": {
      id: "person2",
      firstname: "",
      lastname: "",
      email: ""
    },
    "person3": {
      id: "person3",
      firstname: "",
      lastname: "",
      email: ""
    },
    "person4": {
      id: "person4",
      firstname: "",
      lastname: "",
      email: ""
    }
}

export default (state = defaultState, action) => {
  const person = state[action.id];
  switch(action.type) {
    case FNAMEINPUT:
      return {
        ...state,
        [action.id]: {
          ...person,
          firstname: action.text
        }
      };
    case LNAMEINPUT:

      return {
        ...state,
        [action.id]: {
          ...person,
          lastname: action.text
        }
      };
    case EMAILINPUT:

      return {
        ...state,
        [action.id]: {
          ...person,
          email: action.text
        }
      };

    case FILLFIRSTNAMES: {
      const length = action.firstNames.length;
      const newState = {...state};
      for(let i = 0; i < length; i++) {
        const id = `person${i + 1 }`;
        newState[id].firstname = action.firstNames[i];
      }
      return newState;
    }

    case FILLLASTNAMES: {
      const length = action.lastNames.length;
      const newState = {...state};
      for(let i = 0; i < length; i++) {
        const id = `person${i + 1 }`;
        newState[id].lastname = action.lastNames[i];
      }
      return newState;
    }

    case FILLEMAILS: {
      const length = action.emails.length;
      const newState = {...state};
      for(let i = 0; i < length; i++) {
        const id = `person${i + 1 }`;
        newState[id].email = action.emails[i];
      }
      return newState;
    }

    default: return state;
  }
}

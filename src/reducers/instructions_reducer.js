

export const defaultState = {
  "inst1": {
    id: "inst1",
    text: 'Fyll kolumn B med förnamnen på personerna i kolumn A',
    done: false
  },
  "inst2": {
    id: "inst2",
    text: 'Fyll kolumn C med efternamnen på personerna i kolumn A',
    done: false
  },
  "inst3": {
    id: "inst2",
    text: 'Fyll kolumn D med epost-adresser enligt formen "förnamn.efternamn@epost.se"',
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

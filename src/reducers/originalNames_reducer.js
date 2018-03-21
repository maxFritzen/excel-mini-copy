export const defaultState = [
  {
    firstname: "Per",
    lastname: "Gessle",
    email: "per.gessle@epost.se"
  },
  {
    firstname: "Lisa",
    lastname: "Ekdahl",
    email: "lisa.ekdahl@epost.se"
  },
  {
    firstname: "Sven",
    lastname: "Melander",
    email: "sven.melander@epost.se"
  },
  {
    firstname: "Miriam",
    lastname: "Bryant",
    email: "miriam.bryant@epost.se"
  }
]

export default (state = defaultState, action) => {
  switch (action.type) {
    default: return state;
  }
}

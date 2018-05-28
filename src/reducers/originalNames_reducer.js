export const defaultState = [
  {
    firstname: "Per",
    lastname: "Gessle",
    email: "per.gessle@email.com"
  },
  {
    firstname: "Lisa",
    lastname: "Ekdahl",
    email: "lisa.ekdahl@email.com"
  },
  {
    firstname: "Sven",
    lastname: "Melander",
    email: "sven.melander@email.com"
  },
  {
    firstname: "Miriam",
    lastname: "Bryant",
    email: "miriam.bryant@email.com"
  }
]

export default (state = defaultState, action) => {
  switch (action.type) {
    default: return state;
  }
}

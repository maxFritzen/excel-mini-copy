

export const FNAMEINPUT = 'FNAMEINPUT';
export const LNAMEINPUT = 'LNAMEINPUT';
export const EMAILINPUT = 'EMAILINPUT';
export const DONE = 'DONE';
export const FILLFIRSTNAMES = 'FILLFIRSTNAMES';
export const FILLLASTNAMES = 'FILLLASTNAMES';
export const FILLEMAILS = 'FILLEMAILS';


// const extractFirstNames = (array) => {
//   // const firstNames = [];
//   // const length = array.length;
//   // let i;
// const firstNames = array.map((person) => {
//     return person.firstname;
//   });
//
// }

export const firstNameInput = (text, id) => {
  return {
    type: FNAMEINPUT,
    text,
    id
  }
}
export const lastNameInput = (text, id) => {
  return {
    type: LNAMEINPUT,
    text,
    id
  }
}
export const emailInput = (text, id) => {
  return {
    type: EMAILINPUT,
    text,
    id
  }
}

export const done = (instructionId) => {
  return {
    type: DONE,
    id: instructionId
  }
}

export const fillFirstNames = (originalNames) => {
  // const firstNames = extractFirstNames(originalNames);
  const firstNames = originalNames.map((person) => {
      return person.firstname;
    });
  return {
    type: FILLFIRSTNAMES,
    firstNames
  }
}

export const fillLastNames = (originalNames) => {
  // const firstNames = extractFirstNames(originalNames);
  const lastNames = originalNames.map((person) => {
      return person.lastname;
    });
  return {
    type: FILLLASTNAMES,
    lastNames
  }
}

export const fillEmails = (originalNames) => {
  // const firstNames = extractFirstNames(originalNames);
  const emails = originalNames.map((person) => {
      return person.email;
    });
  return {
    type: FILLEMAILS,
    emails
  }
}

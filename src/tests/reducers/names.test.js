import inputNames, { defaultState } from '../../reducers/inputNames_reducer';

test('should setup defaultState', () => {
  const state = inputNames(undefined, { type: undefined });
  expect(state).toEqual(defaultState);
});

test('should set new value to firstname', () => {
  const action = {
    type:'FNAMEINPUT',
    text: 'hej',
    id:'person1'
  };
  const state =  inputNames(undefined, action);
  expect(state['person1'].firstname).toBe('hej');
});

test('should set new value to lastname', () => {
  const action = {
    type:'LNAMEINPUT',
    text: 'Ek',
    id:'person1'
  };
  const state =  inputNames(undefined, action);
  expect(state['person1'].lastname).toBe('Ek');
});

test('should set new value to email', () => {
  const action = {
    type:'EMAILINPUT',
    text: 'per.gessle',
    id:'person1'
  };
  const state =  inputNames(undefined, action);
  expect(state['person1'].email).toBe('per.gessle');
});

test('should fill up firstnames correctly', () => {
  const firstNames = ['Victor', 'Per'];
  const action = {
    type: 'FILLFIRSTNAMES',
    firstNames
  };
  const state =  inputNames(undefined, action);
  expect(state['person2'].firstname).toBe('Per');
});

test('should fill up lastnames correctly', () => {

  const lastNames = ['Bankler', 'Fritzén'];
  const action = {
    type: 'FILLLASTNAMES',
    lastNames
  };
  const state =  inputNames(undefined, action);
  expect(state['person1'].lastname).toBe('Bankler');
});

test('should fill up emails correctly', () => {

  const emails = ['v.bank@epost.se', 'p.fritz@epost.se'];
  const action = {
    type: 'FILLEMAILS',
    emails
  };
  const state =  inputNames(undefined, action);
  expect(state['person1'].email).toBe('v.bank@epost.se');
});

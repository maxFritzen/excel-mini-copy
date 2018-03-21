import instructions, { defaultState } from '../../reducers/instructions_reducer';

test('should setup defaultState', () => {
  const state = instructions(undefined, { type: undefined });
  expect(state).toEqual(defaultState);
});

test('should set done to true', () => {
  const action = {
    type: 'DONE',
    id: 'inst1'
  };
  const state = instructions(undefined, action);
  expect(state['inst1'].done).toBe(true);
});

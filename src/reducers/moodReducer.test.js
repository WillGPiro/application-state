import reducer from './moodReducer';
import { drinkCoffee } from '../actions/moodActions';

describe('drink coffee reducer', () => {
  it('handles the DRINK_COFFEE action', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = drinkCoffee();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });
})
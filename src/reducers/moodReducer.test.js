import reducer from './moodReducer';
import { drinkCoffee, eatSnack, takeNap } from '../actions/moodActions';

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

  it('handles the EAT_SNACK action', () => {
    const state = {
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = eatSnack();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      coffees: 1,
      snacks: 1,
      naps: 0,
      studies: 0
    });
  })

  it('handles a TAKE_NAP action', () => {
    const state = {
      coffees: 1,
      snacks: 1,
      naps: 0,
      studies: 0
    };
    const action = takeNap();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      coffees: 1,
      snacks: 1,
      naps: 1,
      studies: 0
    });
    
  })
})
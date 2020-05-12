import { drinkCoffee, DRINK_COFFEE } from "./moodActions";

describe('drink coffe action', () => {
  it('creates a DRINK_COFFEE action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });
});
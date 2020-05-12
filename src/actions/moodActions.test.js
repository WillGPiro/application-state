import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK } from "./moodActions";

describe('drink coffe action', () => {
  it('creates a DRINK_COFFEE action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates a EAT_SNACK action', () => {
    const action = eatSnack();

    expect(action).toEqual({
      type: EAT_SNACK
    })
  });
});
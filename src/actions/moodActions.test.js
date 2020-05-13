import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK, TAKE_NAP, takeNap, study, STUDY } from "./moodActions";

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

  it('creates a TAKE_NAP action', () => {
    const action = takeNap();

    expect(action).toEqual({
      type: TAKE_NAP
    });
  });

  it('creates a STUDY action', () => {
    const action = study();

    expect(action).toEqual({
      type: STUDY
    });
  });
});
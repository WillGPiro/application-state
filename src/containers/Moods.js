import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useSelector, useDispatch } from 'react-redux'
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions.js';

const Moods = () => {
  const { coffees, snacks, naps, studies } = useSelector(state => state);
  const dispatch = useDispatch()


    return (
      <>
        <Controls>
          <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
          <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
          <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
          <button onClick={() => dispatch(study())}>studies - {studies}</button>
        </Controls>
        <Face />
      </>
    );
  }

  export default Moods;


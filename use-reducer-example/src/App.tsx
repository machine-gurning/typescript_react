import React, {useReducer, useState} from 'react';
import './App.css';
import {AppContainer, CounterContainer, CounterValue, ControlsContainer, CounterButton} from "./styles";

interface counterType {
    counter: number
    multi: number
}

interface payloadType {
    action: "INCREASE" | "DECREASE"
}

const counterReducer = (state: counterType, payload: payloadType): counterType => {
    switch (payload.action) {
        case "INCREASE":
            return {...state, counter: state.counter + 1}
        case "DECREASE":
            return { ...state, counter: state.counter - 1}
        default:
            return {...state}
    }
}

function App() {
    // const [counterValue, setCounterValue] = useState(0);
    const [state, dispatch] = useReducer(counterReducer, {counter: 0, multi:1})

  return (
   <AppContainer>
       <CounterContainer>
           <CounterValue>{state.counter}</CounterValue>
           <ControlsContainer>
               <CounterButton onClick={ ()=> dispatch({action: "DECREASE"})}>
                  Decrease
               </CounterButton>
               <CounterButton onClick={ ()=> dispatch({action: "INCREASE"})}>
                  Increase
               </CounterButton>
           </ControlsContainer>
           <CounterValue></CounterValue>
       </CounterContainer>
   </AppContainer>
  );
}

export default App;

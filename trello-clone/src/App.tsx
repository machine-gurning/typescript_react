import React from 'react';
import {AppContainer} from "./styles";
import {Column} from "./Column";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./AppStateContext";


function App() {
    const {state,dispatch} = useAppState();
  return (
      <AppContainer>
          {state.lists.map((l, i) => {
             return <Column index={i} key={l.id} text={l.text} id={l.id}/>
          })}
          <AddNewItem onAdd={text => dispatch({type: "ADD_LIST", payload: text})} toggleButtonText="+ Add new column"/>
      </AppContainer>
  );
}

export default App;



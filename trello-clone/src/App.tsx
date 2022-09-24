import React from 'react';
import {AppContainer} from "./styles";
import {Column} from "./Column";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";


function App() {
  return (
      <AppContainer>
          <Column text="Heyo mate">
              <Card text="First little card"/>
              <Card text="First little card"/>
              <Card text="First little card"/>
              <Card text="First little card"/>
              <Card text="First little card"/>
          </Column>
          <Column text="Heyo mate">
              <Card text="First little card"/>
              <Card text="First little card"/>
              <Card text="First little card"/>
              <Card text="First little card"/>
          </Column>
          <AddNewItem onAdd={()=> console.log("new col please")} toggleButtonText="+ Add new column"/>
      </AppContainer>
  );
}

export default App;

import {AppContainer, ColumnContainer, CardContainer, ColumnTitle} from './styles'
import {Column} from "./Column";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";

// Make a reducer function for which the payload is:
// {type: ADD_CARD or ADD_COLUMN, value: text column: column_number/name?}
//


export const App = () => {
    const  = () => {

    }


  return (
      <AppContainer>
          <Column text= "Test title">
             <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
              <AddNewItem onAdd={()=> {console.log("item created")}} toggleButtonText="+ Add new item" dark={true}/>
          </Column>
          <Column text="old mate">
              <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
              <AddNewItem onAdd={()=> {console.log("item created")}} toggleButtonText="+ Add new item" dark={true}/>
          </Column>
          <AddNewItem onAdd={(e) => console.log(e)} toggleButtonText="+ Add new column" dark={false}/>
      </AppContainer>
  );
}

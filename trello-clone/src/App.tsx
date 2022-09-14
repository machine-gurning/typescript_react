import {AppContainer, ColumnContainer, CardContainer, ColumnTitle} from './styles'
import {Column} from "./Column";
import {Card} from "./Card";

export const App = () => {
  return (
      <AppContainer>
          <Column text= "Test title">
             <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
          </Column>
          <Column text="old mate">
              <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
              <Card text="This is the writing on the card"/>
          </Column>
      </AppContainer>
  );
}

import React from "react";
import {ColumnContainer, ColumnTitle} from "./styles";
import {AddNewItem} from "./AddNewItem";

// create an interface to feed-in
interface ColumnProps {
    text: string
}

export const Column = ({text, children}: React.PropsWithChildren<ColumnProps>) => {
    return <ColumnContainer>
        <ColumnTitle>
            {text}
        </ColumnTitle>
        {children}
        <AddNewItem onAdd={()=> console.log('heymate')} toggleButtonText= "+ Add new card" dark={true}/>
    </ColumnContainer>
}

import {ColumnContainer, ColumnTitle, CardContainer } from "./styles";
import React from "react";
import {Card} from "./Card";


type ColumnProps = {
    text: string,
    children?: React.ReactNode
}

export const Column = ({text, children}: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    )
}
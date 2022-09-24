import React from "react";
import {ColumnContainer, ColumnTitle} from "./styles";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./AppStateContext";
import {Card} from "./Card";

// create an interface to feed-in
interface ColumnProps {
    text: string
    index: number
    id: string
}

export const Column = ({text, index, id}: ColumnProps) => {
    const {state, dispatch} = useAppState();
    return <ColumnContainer>
        <ColumnTitle>
            {state.lists[index].text}
        </ColumnTitle>
        {state.lists[index].tasks.map((t)=> {
            return <Card key={t.id} text={t.text}/>
        })}
        <AddNewItem
            onAdd={(text) => {
                dispatch({
                    type: "ADD_TASK",
                payload: {
                        text, taskId: id
            }})}}
            toggleButtonText= "+ Add new card"
            dark={true}
        />
    </ColumnContainer>
}

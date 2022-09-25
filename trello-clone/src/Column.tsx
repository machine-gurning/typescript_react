import React, {useRef} from "react";
import {ColumnContainer, ColumnTitle} from "./styles";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./AppStateContext";
import {Card} from "./Card";
import {useItemDrag} from "./useItemDrag";
import {useDrop} from "react-dnd";
import {DragItem} from "./DragItem";
import {hover} from "@testing-library/user-event/dist/hover";

// create an interface to feed-in
interface ColumnProps {
    text: string
    index: number
    id: string
}

export const Column = ({text, index, id}: ColumnProps) => {
    const {state, dispatch} = useAppState();
    const ref = useRef<HTMLDivElement>(null);

    const { drag } = useItemDrag({type: "COLUMN", id, index, text})


    const [_,drop] = useDrop({
        accept: "COLUMN",
        hover(item: DragItem) {
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }

            dispatch({type:"MOVE_LIST", payload: {dragIndex, hoverIndex}})
            item.index = hoverIndex
        }
    })

    drag(drop(ref));

    return <ColumnContainer ref={ref}>
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
        <button onClick={()=> dispatch({type: "MOVE_LIST", payload: {dragIndex: index, hoverIndex: 1}})}>test</button>

    </ColumnContainer>
}

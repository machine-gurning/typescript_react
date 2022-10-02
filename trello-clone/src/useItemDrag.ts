// The app state will tell us whether something is being dragged or not
// This hook will update the app state when we start dragging, then again when we stop dragging

import {DragItem} from "./DragItem";
import {useAppState} from "./AppStateContext";
import {useDrag} from "react-dnd";

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState();
    const [_, drag] = useDrag({
        type: item.type,
        item:  () => {
            dispatch({
                // callback is triggered when drag starts
                type: "SET_DRAGGED_ITEM",
                payload: item
                })
        return item}, // The item itself
        end: () => // callback triggered when item finishes
            dispatch({type: "SET_DRAGGED_ITEM", payload: undefined})
    })
    return{ drag }
}
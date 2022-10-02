import React, {createContext, useContext, useReducer} from "react";
import {v4 as uuid} from "uuid";
import {findItemIndexById} from "./utils/findItemIndexById";
import {hover} from "@testing-library/user-event/dist/hover";
import {moveItem} from "./moveItem";
import {DragItem} from "./DragItem";

const appData: AppState = { lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ],
    draggedItem: undefined
}

interface Task {
    id: string;
    text: string
}
interface List {
    id: string;
    text: string;
    tasks: Task[]
}

export interface AppState {
    lists: List[];
    draggedItem: DragItem | undefined
}

// Create context so the entire app can access the appData
interface AppStateContextProps {
    state: AppState
    dispatch: React.Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

// We need to pass this through a provider, so we build a helper function to simplify it, and then
// wrap the entire app in it. Here is the helper function

export const AppStateProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appStateReducer, appData);
    return (
        <AppStateContext.Provider value = {{state, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

// We can use this function to return the current context of the app
export const useAppState = () => {
    return useContext(AppStateContext)
}


// Now we define our actions and reducer functions
type Action =
    | {
    type: "ADD_LIST",
    payload: string
} | {
    type: "ADD_TASK",
    payload: {text: string; taskId: string}
} | {
    type: "MOVE_LIST",
    payload: {
        dragIndex: number,
        hoverIndex: number
    }
} | {
    type: "SET_DRAGGED_ITEM",
    payload: DragItem | undefined
}


const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "ADD_LIST": {
            return {
                ...state, lists: [
                    ...state.lists,
            {id: uuid(), text: action.payload, tasks: []}
                ]}
        }
        case "ADD_TASK": {
            const targetListIndex = findItemIndexById(state.lists, action.payload.taskId)
            state.lists[targetListIndex].tasks.push({
                id: uuid(),
                text: action.payload.text })
            return {...state }
        }
        case "MOVE_LIST": {
            // things
            const {dragIndex, hoverIndex} = action.payload;
            moveItem(state.lists, dragIndex, hoverIndex);
            // state.lists = moveItem(state.lists, dragIndex, hoverIndex)
            return {...state}
        }
        case "SET_DRAGGED_ITEM": {
            return {...state, draggedItem: action.payload}
        }
        default: {
            return state
        }
    } 
}
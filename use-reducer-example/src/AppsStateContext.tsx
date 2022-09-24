import React, { createContext } from "react"

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
    ]
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
    lists: List[]
}

// Create context so the entire app can access the appData

interface AppStateContextProps {
    state: AppState
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

// We need to pass this through a provider, so we build a helper function to simplify it, and then
// wrap the entire app in it. Here is the helper function
export const AppStateProvider = ({children}: React.PropsWithChildren<{}>) => {
    return (
        <AppStateContext.Provider value = {{state: appData}}>
            {children}
        </AppStateContext.Provider>
    )
}

import React, {SyntheticEvent, useState} from 'react';
import {AddItemButton} from "./styles";
import {NewItemForm} from "./NewItemForm";

type AddNewItemProps = {
    onAdd(text: string): void,
    toggleButtonText: string,
    dark?: boolean
}


export const AddNewItem = ({onAdd, toggleButtonText, dark}: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false)

    if (showForm) {
        // Render the form
        return (
            <NewItemForm onAdd={(text) => {onAdd(text); setShowForm(false)}}/>
        )
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setShowForm(false)
        }
    }

    // Else we will render the "add new" button
    return (
        <AddItemButton dark={dark} onClick={()=> setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}
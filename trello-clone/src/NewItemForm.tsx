import React, {useState} from "react";
import {NewItemInput, NewItemFormContainer, NewItemButton} from "./styles";
import {useFocus} from "./utils/useFocus";

interface NewItemFormProps {
    onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState('')
    const inputRef = useFocus();

    return <NewItemFormContainer>
        <NewItemInput ref={inputRef} value={text} onChange={e => setText(e.target.value)}/>
        <NewItemButton onClick={()=> onAdd(text)}>Add</NewItemButton>
    </NewItemFormContainer>
}




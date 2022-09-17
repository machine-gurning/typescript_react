import React, {useState} from "react";
import {NewItemFormContainer, NewItemInput, NewItemButton} from "./styles";
import {useFocus} from "./utils/useFocus";

type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
   // The form updates with its value as it is written
   const [text, setText] = useState("");
   const inputRef = useFocus();

   const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
       if (event.key === "Enter") {
           onAdd(text)
       }
   }
   return (
       <NewItemFormContainer>
           <NewItemInput
               value={text}
               ref={inputRef}
               onChange={(e) => setText(e.target.value)}
               onKeyDown={handleAddText}/>
           <NewItemButton onClick={() => onAdd(text)}>Add</NewItemButton>
       </NewItemFormContainer>
   )
}
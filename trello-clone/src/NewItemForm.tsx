import react, {useState} from "react";
import {NewItemFormContainer, NewItemButton, NewItemInput} from "./styles";

interface NewItemFormProps = {

}

export const NewItemForm = ({}: NewItemFormProps) => {
    const [text, setText] = useState("")

    return (
        <NewItemFormContainer>
            <NewItemInput>
                {text}
            </NewItemInput>
        </NewItemFormContainer>
    )
}
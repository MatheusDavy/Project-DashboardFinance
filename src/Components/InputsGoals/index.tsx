import { useRef } from "react"
import { defaultClassError } from "../../Context/Utils/FormValidate/type-validate"
import { Container, Input, InputContainer, Label, MessageError } from "./styles"
import { RiErrorWarningLine } from 'react-icons/ri'

interface Props {
    name: string
    value: string | number
    setValue: (event: React.ChangeEvent<HTMLInputElement>) => void
    typeInput: string
    typeFormat: 'default' | 'currency'
    messageError: string
    icon: any
    borderBottom: boolean
    idError: string
    label: string
    placeholder: string
}

export function InputGroup({placeholder, label, idError, name, value, setValue, typeInput, typeFormat, icon, borderBottom, messageError }: Props) {
    function handleInputValues(event: React.ChangeEvent<HTMLInputElement>){
        setValue(event)
    }
    
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <InputContainer
                borderBottom={borderBottom}
            >
                {icon}
                <Input
                    type={typeInput}
                    name={name}
                    value={value}
                    typeFormat={typeFormat}
                    onChange={(event) => handleInputValues(event)}
                    placeholder={placeholder}
                />
            </InputContainer>
            <MessageError id={`message-error-${idError}`} className={defaultClassError}>
                <RiErrorWarningLine size={13} />
                {messageError}
            </MessageError>
        </Container>
    )
}
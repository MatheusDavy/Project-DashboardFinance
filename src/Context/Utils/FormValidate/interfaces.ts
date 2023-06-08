export interface ValidationConstructorFormsProps {
    input: string | number
    messageErrorId: string
    typeInput: string
}

export interface ValidationFormsProps {
    input: string | number
    messageError: string
    typeInput: string
    error: boolean
    
}

export interface InputDataToValidate {
    values: string | number
    messageErrorId: string
    type: string
}


import * as validationType from './type-validate'
import { defaultClassError, defaultClassActiveError } from './type-validate'
import { InputDataToValidate, ValidationConstructorFormsProps } from './interfaces'

class ValidationForms {

    input: string | number
    messageError: string
    typeInput: string
    error: boolean

    constructor(input: string | number, messageErrorId: string, typeInput: string) {
        this.input = input;
        this.messageError = messageErrorId;
        this.typeInput = typeInput;
        this.error = false;

        this.removeAllErrorMessage();
        this.validateInputsFields();
    }

    validateInputsFields() {
        switch (this.typeInput) {
            // The code will identify the input type and apply the correct validate
            case validationType.TYPE_NAME: {
                if (!this.isValidName(this.input.toString()) || this.input == "") {
                    this.showMessageError();
                    this.error = true;
                }

                break;
            }
            case validationType.TYPE_EMAIL: {
                if (!this.isValidEmail(this.input.toString())) {
                    this.showMessageError();
                    this.error = true;
                }

                break;
            }
            case validationType.TYPE_PHONE: {
                break;
            }
            case validationType.TYPE_NOT_NULL: {
                if (this.input == '') {
                    this.showMessageError();
                    this.error = true;
                }

                break
            }
            case validationType.TYPE_CURRENCY: {
                const arraySeparator = this.input.toString().split('')
                const verifyString = () => {
                    if (arraySeparator[length - 1] == '0' && arraySeparator[length - 2] == '0' || arraySeparator[0] == '0' ) {
                        return true
                    } else { return false }
                }

                if ((this.input == '' || verifyString())) {
                    this.showMessageError();
                    this.error = true
                }

                break
            }
        }
    }

    isValidEmail(emailAddress: string) {
        var pattern = new RegExp(
            /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
        );
        return pattern.test(emailAddress);
    }

    isValidName(name: string) {
        const regexContainNumbers = /\d+/;
        const verifyRegex = regexContainNumbers.test(name);
        return verifyRegex;
    }

    // It will remove all error that be in screen
    removeAllErrorMessage() {
        const errorMessages = document.querySelectorAll(`.${defaultClassError}`);
        errorMessages.forEach((element) => {
            element.classList.remove(defaultClassActiveError);
        });
    }
    // Show Message Error
    showMessageError() {
        const element: HTMLElement | null = document.getElementById(`message-error-${this.messageError}`);
        element!.classList.add(defaultClassActiveError);
    }

    return() {
        return this.error;
    }
}

export default class SubmitFieldsToValidate {

    error: boolean
    allFields: InputDataToValidate[]

    constructor([...inputs]: InputDataToValidate[]) {
        this.error = false;
        this.allFields = inputs;
        this.main();
    }

    main() {
        // Send all fields in Array to validate
        for (let i = 0; i < this.allFields.length;) {
            // If haven´t no one error it will continue validate
            if (!this.error) {
                const { values, type, messageErrorId } = this.allFields[i];
                this.error = new ValidationForms(
                    values,
                    messageErrorId,
                    type
                ).return();
                i++;
            } else {
                // Case have one error this looping will be break
                break;
            }
        }

        this.submit();
    }

    submit() {
        const isItAllowedToSend = !this.error;
        return isItAllowedToSend;
    }
}

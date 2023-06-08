export function maskInputCurrency(value: string) {
    value = value.replace(/[^\d]/g, '');
    let newValue
    if (value.length < 5) {
        const integerPart = value.slice(0, -2);
        const decimalPart = value.slice(-2);
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const number = `${formattedIntegerPart},${decimalPart}`
        newValue = number.padStart(4, '0')

    } else if (value[0] == '0') {
        let arrayValue = value.split('')
        while (arrayValue[0] == '0') {
            arrayValue.shift();
        }
        const joinedArray = arrayValue.join('')
        const integerPart = joinedArray.slice(0, -2);
        const decimalPart = joinedArray.slice(-2);
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        newValue = `${formattedIntegerPart},${decimalPart}`

    } else {
        const integerPart = value.slice(0, -2);
        const decimalPart = value.slice(-2);
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        newValue = `${formattedIntegerPart},${decimalPart}`
    }

    return newValue
}
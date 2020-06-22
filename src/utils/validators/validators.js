export const required = (value) => {
    if(value) {
        return undefined;
    } else {
        return 'Field is required';
    }
}

export const maxLengthAC = (wordLength) => {
    return (value) => {
        if(value.length > wordLength) {
            return `Maximum length is ${wordLength}`;
        }else {
            return undefined;
        }
    }
}
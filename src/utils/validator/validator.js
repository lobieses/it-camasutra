export const required = value => {
    if(value === undefined) return 'Field is required';
    return undefined;
}
export const maxLength = maxLength => value => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbol`;
    return undefined;
}

export const isEmail = value => {
    if(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value)) return undefined;
    return 'error email';
}
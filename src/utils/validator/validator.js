export const ValidateList = validators => values => {
    let errors = {};
    for(const func of validators) {
        for(let field in values) {
            const checkForError = func(values[field]);
            if(checkForError) {
                errors[field] = checkForError;
            }
        }
    }


    return errors;
}

export const required = value => {
    if(value.trim() === '') return 'Field is required';
}

export const maxLength = maxLength => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbol`;
}

export const isEmail = value => {
    if(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value)) return undefined;
    return 'error email';
}

export const ResponseValidatorForUpdateProfileData = errorsArr => {
    let errors = {};

    const regularForContactsFields = new RegExp(/^(.+)\(Contacts->(.+)\)/g);
    const regularForOtherFields = new RegExp(/^The .+ (field .+)\. \((.+)\)/g);

    for(let error of errorsArr) {
        if(regularForContactsFields.test(error)) {
            error.replace(regularForContactsFields, (found, errorText, nameField) => {
                let correctName = 'contacts.' + nameField.toLowerCase();
                errors[correctName] = errorText;
            });
        } else {
            error.replace(regularForOtherFields, (found, errorText, nameField) => {
                let correctName = nameField.charAt(0).toLowerCase() + nameField.slice(1);
                errors[correctName] = errorText;
            });
        }
    }

    return errors
}




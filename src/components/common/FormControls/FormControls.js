import style from './FormControls.module.css';
import React from "react";

export const FormControls = ({ name, errors, status = {},...props }) => {
    return (
        <div className={style.form + ' ' + ((errors[name] || status[name]) ? style.error : undefined)}>
            <div>
                {props.children}
            </div>
            <div>
                <p>{errors[name]}</p>
                <p>{status[name]}</p>
            </div>
        </div>
    )
}

export const Textarea = ({ field, form, ...props }) => {
    return <FormControls {...form} name={field.name}><textarea {...field} {...props}/></FormControls>
}

export const Input = ({ field, form, ...props }) => {
    return <FormControls {...form} name={field.name}><input {...field} {...props}/></FormControls>
}









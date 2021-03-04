import style from './FormControls.module.css';

const FormControls = ({meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.form + ' ' + (hasError ? style.error : null)}>
            <div>
                {props.children}
            </div>
            <div>
                <span>{hasError && meta.error}</span>
            </div>

        </div>

    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControls {...props}><textarea {...input} {...restProps} /></FormControls>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControls {...props}><input {...input} {...restProps} /></FormControls>
}




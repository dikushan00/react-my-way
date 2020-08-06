import React from 'react'
import style from './FormControl.module.css'

export const Element = Element => ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;
    return(
        <div className={style.inputArea + " " + (hasError ? style.error : "")}>
            <Element {...input} {...props} />
            <span>{hasError && meta.error}</span>
        </div>
    )
}
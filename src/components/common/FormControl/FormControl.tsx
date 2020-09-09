import React, { EventHandler, DragEvent, FocusEvent, ChangeEvent } from 'react'
import style from './FormControl.module.css'
import { WrappedFieldProps, EventOrValueHandler } from 'redux-form'

type FormControlType = (params: WrappedFieldProps) => React.ReactNode

type ElementType = {
    checked?: boolean
    value: any
    onBlur: EventOrValueHandler<FocusEvent<any>>
    onChange: EventOrValueHandler<ChangeEvent<any>>
    onDragStart: EventHandler<DragEvent<any>>
    onDrop: EventHandler<DragEvent<any>>
    onFocus: EventHandler<FocusEvent<any>>
}

export function Element(Element: any): FormControlType{
    
    return function( {input, meta, ...props} ) {

    const hasError = meta.touched && meta.error

    return <div className={style.inputArea + " " + (hasError ? style.error : "")}>
        
            <Element {...input} {...props} />
            <span>{hasError && meta.error}</span>
        </div>
}}

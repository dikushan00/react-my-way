import React, { ChangeEvent } from "react"
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import style from "../../common/FormControl/FormControl.module.css";
import {Element} from "../../common/FormControl/FormControl";

const Input = Element("input");

type PropsType = {
    fields: {photo: any}
}

type FormValueType = {
    photo: string
}

const UpdateMainPhotoForm: React.FC<InjectedFormProps<FormValueType, PropsType> & PropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        e.preventDefault()
        const { fields } = props
        const files = e.target.files
        fields.photo.handleChange(files)
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="photo">Загрузите фото:</label>
                <Field type='file' name='photo'  component={Input} id='photo' onChange={onChangeHandler} value={'null'} />
            </div>
            <div>
                <button type='submit'>Загрузить фотографию</button>
            </div>
            {props.error && <div className={style.commonError}>{props.error}</div>}
        </form>
    )
}

export const UpdateMainPhotoFormRedux = reduxForm<FormValueType, PropsType >({
    form: 'uploadMainPhoto'
})(UpdateMainPhotoForm)
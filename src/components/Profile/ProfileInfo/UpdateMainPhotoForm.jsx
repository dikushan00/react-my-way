import React from "react"
import {Field, reduxForm} from "redux-form";
import style from "../../common/FormControl/FormControl.module.css";
import {Element} from "../../common/FormControl/FormControl";

const Input = Element("input");

const UpdateMainPhotoForm = (props) => {

    const onChangeHandler = (e)=> {
        e.preventDefault()
        const { fields } = props;
        const files = [ ...e.target.files ];
        fields.photo.handleChange(files);
        console.log(e.target.files[0])
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

export const UpdateMainPhotoFormRedux = reduxForm({
    form: 'uploadMainPhoto'
})(UpdateMainPhotoForm)
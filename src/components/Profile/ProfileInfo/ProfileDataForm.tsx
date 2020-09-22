import React, { useState } from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { Element } from '../../common/FormControl/FormControl';
import style from '../../common/FormControl/FormControl.module.css'
import  s from './ProfileInfo.module.css'
import { SaveProfileType } from '../../../Types/Types';

const Input = Element('input')
const Textarea1 = Element('textarea')
const Textarea2 = Element('textarea')
const Checkbox = Element('input')

type LoginFormValuesKeys = Extract<keyof ProfileFormValuesType, string>

const ProfileDataForm: React.FC<PropsType & InjectedFormProps<ProfileFormValuesType, PropsType>> = (props) => {
    return <form onSubmit = {props.handleSubmit} style={{position:'relative'}}>
        <button className={'btn ' + s.btn}>Save</button>
        {props.error && <div className={style.commonError}>{props.error}</div>}
        <span>{props.profile.fullName}</span>
        <div>
            <b>About me: </b>
            <Field placeholder='about me..' name='aboutMe' component={Textarea1}/>
        </div>
        <div>
            <b>Looking for a job: </b>
            <span><Field placeholder='Looking for a job..' name='lookingForAJob' component={Checkbox} type='checkbox' /></span>
        </div>
        <div>
            <b>My work skills: </b>
            <Field placeholder='description..' name='lookingForAJobDescription' component={Textarea2}/>
        </div>
        <div>
            <b>Contacts</b>: { props.profile.contacts && Object.keys(props.profile.contacts).map(key => {
                return <Field key={key} placeholder={key} name={'contacts.' + key} component = {Input}/>})}
        </div>
    </form>
}

export const ProfileDataFormRedux = reduxForm<ProfileFormValuesType, PropsType>({form: 'editProfileData'})(ProfileDataForm)


type PropsType = {
    handleSubmit: () => {}
    error: string
    profile: SaveProfileType
}
export type ProfileFormValuesType = {
    aboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
}
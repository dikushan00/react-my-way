import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { ProfileType } from '../../../Types/Types'
import  s from './ProfileInfo.module.css'

const ProfileData: React.FC<ProfileDataType> = ({profile, ...props}) => {

    return <div style={{position: 'relative'}} className={s.profileData}>
        {props.isOwner && <button onClick = {props.onEditMode} className = {s.editBtn + ' ' + s.btn}/>}
        <div style={{display:'flex'}}>
            <span className={s.infoKey}> 
                <FontAwesomeIcon icon={faStickyNote} /> 
                About me: 
            </span>
            <span className={s.infoValue}>{profile.aboutMe}</span></div>
        <div style={{display:'flex'}}> 
            <span className={s.infoKey}> 
                <FontAwesomeIcon icon={faCheck} /> 
                Looking for a job: 
            </span>
            <span className={s.infoValue}>{profile.lookingForAJob ? 'yes' : 'no'}</span>
        </div>
        {profile.lookingForAJob 
            && <div style={{display:'flex'}}>
                <span className={s.infoKey}>
                    <FontAwesomeIcon icon={faBriefcase} /> 
                    My work skills:
                </span>
                <span className={s.infoValue}>
                {profile.lookingForAJob && profile.lookingForAJobDescription}</span>
            </div>}
        <div>
            <span className={s.infoKey}> <FontAwesomeIcon icon={faAddressBook} /> Contacts </span>: 
            {
            profile.contacts && Object
                .keys(profile.contacts)
                .map(key => {
                    //@ts-ignore
                    return profile.contacts[key as keyof ContactsType] 
                        && <Contact key={key} 
                                    className={s.infoValue} 
                                    contactTitle={key} 
                                    //@ts-ignore
                                    contactValue={profile.contacts[key as keyof ContactsType]} />
            })
            }
        </div>
    </div>
}

const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><span className={s.infoKey}>{contactTitle}:</span> <a href={contactValue}>{contactValue}</a></div>
}

export default ProfileData


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean

    onEditMode: () => void
}

type ContactType = { 
    contactTitle: string
    contactValue: string
    className: string
}
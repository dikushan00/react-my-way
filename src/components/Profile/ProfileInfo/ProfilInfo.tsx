import React, { RefObject } from 'react';
import  s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import photoUser from '../../../img/user.svg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileDataFormRedux} from "./ProfileDataForm"
import { ProfileType, SaveProfileType, ContactsType } from '../../../Types/Types';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg } from '../../utils/Validators/cropImgFunctions';

class ProfileInfo extends React.PureComponent<PropsType> {

    state = {
        editMode: false,
        src: null as string | null,
        crop : {
          unit: '%' as "%" | "px" | undefined,
          width: 30,
          height: 30,
          x: 0,
          y: 0,
          aspect: 1 / 1
        },
        croppedObject: {
            croppedImageFile: null as null | File,
            croppedImageUrl: '',
        },
        isLoadImg: true
    }

    inputRef = React.createRef();

    onInputPhoto = (e: any) => {
        if(e.target.files.length && e.target.files.length > 0){
            this.setState({isLoadImg: true})
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState( { src: reader.result } )
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    onImageLoaded = (image: HTMLImageElement) => {
        this.imageRef = image;
      };
    
    onCropComplete = (crop: ReactCrop.Crop , percentCrop: ReactCrop.PercentCrop) => {
      this.makeClientCrop(crop);
    };
  
    onCropChange = (crop: ReactCrop.Crop, percentCrop: ReactCrop.PercentCrop) => {
        this.setState({ crop });
      };
    imageRef: any;
    
      async makeClientCrop(crop: ReactCrop.Crop) {
        if (this.imageRef && crop.width && crop.height) {
          const croppedObject = await getCroppedImg(
            this.imageRef,
            crop,
            'newFile.jpeg'
          )
          //@ts-ignore
          
          this.setState({ croppedObject });
        }
      }
    
    onSubmit = (data: SaveProfileType) => {
        this.props.saveProfile(data).then(() => {
            this.setState({editMode: false})
        });
    }

    updatePhotoCrop = () => {
        this.state.croppedObject.croppedImageFile && this.props.updatePhoto(this.state.croppedObject.croppedImageFile)
        this.setState({isLoadImg: false})
        this.refreshInputArea()
    }

    refreshInputArea = () => {
      this.setState({
        src: null,
        croppedObject: null,
        isLoadImg: true
      })
      //@ts-ignore
      this.inputRef.current.value = null
    }
        
    render(){
        const { crop, src } = this.state;

        if (!this.props.profile){
            return <Preloader />
        }

        return (<div>
            <div className={s.descriptionBlock}>
                <div style={{display:'flex'}}>
                    <img src={ this.props.profile.photos.large || photoUser } alt="photo" className={s.avaImg}/>
                    <div style={{marginLeft:"20px"}}>
                        <p><b>{this.props.profile.fullName || 'unknown user '}</b></p>
                        <ProfileStatusWithHooks status = {this.props.status} updateStatus = {this.props.updateStatus}/>
                    </div>
                    {this.props.isOwner && <input type="file" ref={this.inputRef as RefObject<HTMLInputElement> | null} onChange={this.onInputPhoto} className={s.inputPhoto}/>}
                </div>

                { 
                src && this.state.isLoadImg && <div>
                    <ReactCrop
                        src={src}
                        crop={crop}
                        ruleOfThirds
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                />
                {   this.state.croppedObject.croppedImageUrl && 
                    //@ts-ignore
                    <img alt="Crop" style={{ maxWidth: '100%' }} src={this.state.croppedObject.croppedImageUrl} />
                }
                <button onClick = {() => this.updatePhotoCrop()}>Send</button>
                </div>
                }

                {
                this.state.editMode 
                //@ts-ignore
                    ? <ProfileDataFormRedux initialValues = {this.props.profile} profile = {this.props.profile} onSubmit = {this.onSubmit}/>
                    : <ProfileData profile = {this.props.profile} onEditMode = {() => this.setState({editMode: true})} isOwner={this.props.isOwner}/>
                }
            </div>
        </div>);
    }
}

const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}  style={{display:'flex'}}><span className={s.infoKey}>{contactTitle}:</span> {contactValue}</div>
}

const ProfileData: React.FC<ProfileDataType> = ({profile, ...props}) => {

    return <div style={{position: 'relative'}} className={s.profileData}>
        {props.isOwner && <button onClick = {props.onEditMode} className = {s.editBtn + ' ' + s.btn}/>}
        <div style={{display:'flex'}}><span className={s.infoKey}>About me: </span><span className={s.infoValue}>{profile.aboutMe}</span></div>
        <div style={{display:'flex'}}><span className={s.infoKey}>Looking for a job: </span><span className={s.infoValue}>{profile.lookingForAJob ? 'yes' : 'no'}</span></div>
        {profile.lookingForAJob && <div style={{display:'flex'}}><span className={s.infoKey}>My work skills: </span><span className={s.infoValue}>{profile.lookingForAJob && profile.lookingForAJobDescription}</span></div>}
        <div>
            <span className={s.infoKey}>Contacts</span>: 
            {
            profile.contacts && Object
                .keys(profile.contacts)
                .map(key => {
                return profile.contacts[key as keyof ContactsType] && <Contact key={key} className={s.infoValue} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
            })
            }
        </div>
    </div>
}

export default ProfileInfo;


type ContactType = {
    contactTitle: string
    contactValue: string
    className: string
}


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    onEditMode: () => void
}

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    status: string

    updatePhoto: (file: File) => void
    saveProfile: (data: SaveProfileType) => Promise<SaveProfileType>
    updateStatus: (data: string) => void
}
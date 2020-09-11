import  s from './ProfileInfo.module.css'
import photoUser from '../../../img/user.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import  React, { useState } from 'react';
import { getCroppedImg } from '../../utils/Validators/cropImgFunctions';
import  ReactCrop  from 'react-image-crop';
import DropzoneAva from './DropzoneAva';

const AvatarPhoto: React.FC<PropsType> = ({avatar, fullName, isOwner, updatePhoto}) => {

    const [isBigMode, setBigMode] = useState(false)

    if(isBigMode) {
        document.body.classList.add('pop_overflow')
    } else {
        document.body.classList.remove('pop_overflow')
    }

    return <div className={s.avaArea}>
        <img src={ avatar || photoUser } alt="photo" className={s.avaImg} onClick = {() => setBigMode(true)}/>
        <span className = {s.avaHover}>
            <FontAwesomeIcon icon={faSearch} onClick = {() => setBigMode(true)}/> 
        </span>
        {
            isBigMode 
                && <AvatarBigMode 
                    isBigMode = {isBigMode} 
                    setBigMode = {setBigMode} 
                    avatarPhoto = {avatar} 
                    fullName = {fullName} 
                    isOwner = {isOwner}
                    updatePhoto = {updatePhoto}/>
        }
    </div>
}

const AvatarBigMode: React.FC<BigModeType> = ({ isBigMode, setBigMode, avatarPhoto, fullName, isOwner, updatePhoto}) => {
    
    const [imageRef, setImageRef] = useState(null as null | HTMLImageElement)
    const [isLoadImg, setIsLoadImg] = useState(false)
    const [src, setSrc] = useState(null as string | ArrayBuffer | null)
    const [croppedObject, setCroppedObject] = useState({
            croppedImageFile: null as null | File,
            croppedImageUrl: '',
        } as CroppedImgType | null)
    const [crop, setCrop] = useState({
          unit: "%" as "%" | "px" | undefined,
          width: 30,
          height: 30,
          x: 0,
          y: 0,
          aspect: 1 / 1 as number
        })

    const onImageLoaded = (image: HTMLImageElement) => {
        setImageRef(image)
      };
    
    const onCropComplete = (crop: ReactCrop.Crop) => {
      makeClientCrop(crop);
    };
  
    const onCropChange = (crop: ReactCrop.Crop) => {
        //@ts-ignore
        setCrop( crop );
      };
    
    const makeClientCrop = async (crop: ReactCrop.Crop) => {
        if (imageRef && crop.width && crop.height) {
          const croppedObject = await getCroppedImg(
            imageRef,
            crop,
            'newFile.jpeg'
          )
          
          //@ts-ignore
          setCroppedObject( croppedObject );
        }
      }

    const updatePhotoCrop = () => {
        croppedObject && croppedObject.croppedImageFile && updatePhoto(croppedObject.croppedImageFile)
        setIsLoadImg(false)
        refreshInputArea()
    }

    const refreshInputArea = () => {
      setSrc(null)
      setCroppedObject(null)
      setIsLoadImg(true)
    }

    return <div>
    <div id="overlay" className = {isBigMode ? "overlay" : ''} onClick={() => setBigMode(false)}></div>
    <div className = {isBigMode  ? s.BigModeArea : ''} id = {s.BigModeArea}>
        <div>
            <h3>Текущее фото: </h3>
            <img src={avatarPhoto ? avatarPhoto : photoUser} alt="PHOTO" />
        </div>
        <div className = {s.rightContent} >
            <span style = {{display: "flex", alignItems: "center", height: "60px", borderBottom: "1px solid #ccc"}}>
                <img src={avatarPhoto ? avatarPhoto : photoUser} alt="PHOTO" className = {s.postImg} />
                <span className={s.user}>{fullName}</span>
            </span>
            <span className = {s.closeBig} onClick={() => setBigMode(false)}></span>
            {isOwner 
                && <div>
                    <span>Изменить фото: </span>
                    <DropzoneAva setIsLoadImg = {setIsLoadImg} setSrc = {setSrc} />
                </div> 
            }
            { 
                src && isLoadImg && <div>
                    <ReactCrop
                    //@ts-ignore
                        src={src}
                        crop={crop}
                        ruleOfThirds
                        onImageLoaded={onImageLoaded}
                        onComplete={onCropComplete}
                        onChange={onCropChange}
                />
                {   croppedObject && croppedObject.croppedImageUrl && 
                    //@ts-ignore
                    <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedObject.croppedImageUrl} />
                }
                <button onClick = {() => updatePhotoCrop()}> Send </button>
                </div>
            }
        </div>
    </div>
    </div>
}

export default AvatarPhoto

type PropsType = {
    avatar: string | null
    fullName: string
    isOwner: boolean

    updatePhoto: (file: File) => void
}

type BigModeType = {
    isBigMode: boolean
    avatarPhoto: string | null | undefined
    fullName: string
    isOwner: boolean

    setBigMode: (n: boolean) => void
    updatePhoto: (file: File) => void
}

type CroppedImgType = {
    croppedImageFile: null | File
    croppedImageUrl: string
}

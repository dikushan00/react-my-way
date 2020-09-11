import React from 'react'
import Dropzone from 'react-dropzone'
import  s from './ProfileInfo.module.css'

const DropzoneAva: React.FC<PropsType> = ({setIsLoadImg, setSrc}) => {

    const handleDrop = (files: any, rejectedFiles: any) => {
        if(files && files.length > 0){
            setIsLoadImg(true)
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                setSrc( reader.result )
            );
            reader.readAsDataURL(files[0]);
        }
    }

    return <Dropzone onDrop={handleDrop} multiple = {false} accept = {"image/*"} maxSize={8000000}>
        {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className = {s.dropzone}>
                <p>Drop files here, or click to select files</p>
                <input {...getInputProps()} />
            </div>
        )}
  </Dropzone>

}

export default DropzoneAva


type PropsType = {
    setIsLoadImg: (b: boolean) => void
    setSrc: (url: string | ArrayBuffer | null) => void
}
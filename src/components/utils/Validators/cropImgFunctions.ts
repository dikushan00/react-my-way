

export const base64StringtoFile = (base64String: string, filename: string) => {
    if(base64String && base64String.length && base64String.length > 0){
        var arr = base64String.split(','),
        //@ts-ignore
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, 
        u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, {type: mime})
    }
  }

    
export const getCroppedImg = (image: HTMLImageElement, crop: ReactCrop.Crop, fileName: string) => {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  ctx && ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  )

  return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        //@ts-ignore
        blob.name = fileName; 
        let reader = new FileReader()
        reader.readAsDataURL(blob) 
        reader.onload = function() {
        const myFilename = "previewFile.jpg"
        //@ts-ignore
        const croppedImageFile = base64StringtoFile(reader.result, myFilename)
        const croppedImageUrl = window.URL.createObjectURL(blob)
        let newCropObject = {
          croppedImageFile,
          croppedImageUrl
        }
        resolve(newCropObject);
        };
      }, 'image/jpeg');
    });
}

export const downloadCroppedImg = (url: string) => {
  var a = document.createElement('a')
  a.href = url
  a.download = 'avatar.jpeg'
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
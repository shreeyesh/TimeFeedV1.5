import styles from "./MintNftContainer.module.css";
import { useState } from "react"

const MintNftContainer = () => {
  const [imageId, setImageId] = useState(null)
  const [loading, setLoading] = useState("")
  const [file, setFile] = useState(null)

  // const imgSrc = useImageObject(imageId)

  // const { getRootProps, getInputProps } = useDropzone({
  //   maxFiles: 1,
  //   accept: {
  //     "image/png": [".png"],
  //     "image/jpeg": [".jpg", ".jpeg"]
  //   },
  //   onDrop: async acceptedFiles => {
  //     if (acceptedFiles.length > 0) {
  //       try {
  //         const firstFile = acceptedFiles[0]
  //         const newFile = await resizeImage(firstFile, ImageMaxWidth)
  //         setFile(newFile)
  //       } catch (error) {
  //         console.error(error)
  //       }
  //     }
  //   }
  // })

  async function submitImage(event) {
    const files = event.target.files;
    const file = files[0];
    if (!file) return;

    try {
      setLoading(true);
      console.log("File:", file);

      // Perform image processing tasks and file upload

      // Update the state or perform any additional actions
    } catch (error) {
      console.error("Error submitting image:", error);
    } finally {
      setLoading(false);
    }
  }
  // async function submitImage() {
  //   if (file == null) {
  //     return
  //   }

  //   setLoading("Submitting...")
  //   setImageId(null)

  //   const fileArray = await fileToCanisterBinaryStoreFormat(file)
  //   const imageActor = makeImageActor()
  //   const newImageId = await imageActor.create(fileArray)
  //   setImageId(newImageId)

  //   setLoading("")
  // }
  return (
    <div className={styles.upload}>
      <button className={styles.mintNftButton} autoFocus>
        <div className={styles.text}>MINT NFT</div>
      </button>
      {/* <label>Image loaded from canister: &nbsp;</label>
        {imgSrc && <img src={imgSrc} alt="canister-image" />} */}
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <div className={styles.uploadsection}>
        <img
          className={styles.uploadAreaIcon}
          alt=""
          src="/upload-area@2x.png"
        />
        {/* <div className={styles.addimage} {...getRootProps()} > */}
        {/* <input {...getInputProps()} /> */}
          <input className={styles.button} type="file" onChange ={submitImage} />
          
          <div className={styles.dragYourDocuments}>
            Drag your documents, photos, or videos here to start uploading.
          </div>
          <img className={styles.folderIcon} alt="" src="/folder@2x.png" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default MintNftContainer;

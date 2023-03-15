import "../CSS/addroom.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage, dataref, } from "./firebase";
import { v4 } from "uuid";
import {postData} from "./Addroom"

function Imgup() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // getDownloadURL(snapshot.ref).then((url) => {
      //   setImageUrls((prev) => [...prev, url]);
      alert("Image is uploaded");
//       storage.ref('images').child(imageUpload.name).getdownloadurl()
//       .then((url) =>{
//         setImageUrls(url);
// })
    })
      
    // });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // postData.ref("users").push().set({
          //   url : url,
          // }).catch(alert);
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      <br></br>
      <p> <a herf={imageUrls}> {imageUrls}</a></p>
      </div>
      // {/* {imageUrls.map((url) => {
      //   return <img src={url} />;
      // })} */}
    
  );
}

export default Imgup;

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
// import axios from "axios";\
import Imgup from "./Imgup.js";
import "../CSS/addroom.css";
import { useAuth0 } from "@auth0/auth0-react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function Addroom() {
  const [user, setUser] = useState({
    nama: "",
    loca: "",
    adr: "",
    bhk: "",
    rent: "",
    dis: "",
  });
  const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // getDownloadURL(snapshot.ref).then((url) => {
      //   setImageUrls((prev) => [...prev, url]);
      alert("sjwb");
    });
    // });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { nama, loca, adr, bhk, rent, dis } = user;
    const res = await fetch(
      "https://kota-35cec-default-rtdb.firebaseio.com/addrooms.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          loca,
          adr,
          bhk,
          rent,
          dis,
        }),
      }
    );
    if (res) {
      setUser({
        nama: "",
        loca: "",
        adr: "",
        bhk: "",
        rent: "",
        dis: "",
      });
      alert("Room Info Added!");
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ textAlign: "center", padding: "40px" }}>
          Room Information
        </h3>
      </div>
      <form>
        <form method="POST">
          {/* <form onSubmit={(e)=>submit(e)}> */}
          <div style={{ textAlign: "center" }}>
            <Box
              component="form"
              // onSubmit={submitAddroom} id = "Room_form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  name="nama"
                  id="nmae"
                  label="Name"
                  defaultValue=""
                  value={user.nama}
                  onChange={getUserData}
                  required
                />
                <TextField
                  name="loca"
                  id="loc"
                  label="Location"
                  defaultValue=""
                  value={user.loca}
                  onChange={getUserData}
                  required
                />
                <TextField
                  name="adr"
                  id="add"
                  label="Address"
                  defaultValue=""
                  value={user.adr}
                  onChange={getUserData}
                  required
                />
                <TextField
                  name="bhk"
                  id="bhk"
                  label="BHK"
                  defaultValue=""
                  value={user.bhk}
                  onChange={getUserData}
                  required
                />
                <TextField
                  name="rent"
                  id="rentt"
                  label="Rent"
                  defaultValue=""
                  value={user.rent}
                  onChange={getUserData}
                  required
                />
                <TextField
                  name="dis"
                  id="Des"
                  label="Descreption"
                  defaultValue=""
                  value={user.dis}
                  onChange={getUserData}
                  required
                />
              </div>
            </Box>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "auto",
              paddingLeft: "50%",
            }}
          >
            {/* <Button type="submit"
            style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", backgroundColor: "#87d5fc"
            }}>
            submit
          </Button> */}
           <button
              class="button-21"
              onClick={isAuthenticated ? postData : () => loginWithRedirect()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#87d5fc",
              }}
            >
              Add Room
            </button>
          </div>
          {/* <div className="imgg">
        <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
            <button  onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
      </div> */}
        </form>
      </form>
      <div>
        <Imgup />
      </div>
    </React.Fragment>
  );
}
export default Addroom;

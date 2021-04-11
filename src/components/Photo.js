import React, { useState, useContext } from "react";
import styled from "styled-components";

import UpdateBar from "./Reusables/UpdateBar";
import BackArrow from "./Reusables/BackArrow";

import { DataContext } from "../DataBase/DataContext";

import { storage } from "../DataBase/Firebase";

const PhotoStyles = styled.div`
  height: 100vh;
  padding: 15px;
  font-weight: 700;
  color: var(--black);
  width: 92%;
  h1 {
    font-size: 1.4rem;
    padding: 10px 0;
    text-align: center;
  }
  img {
    width: 300px;
    justify-self: center;
  }
  input {
    margin-bottom: 15px;
    font-weight: 700;
  }

  .picWrapper {
    display: grid;
    grid-template-rows: auto 1fr 12%;
    height: 50%;
    width: 100%;
    justify-content: center;
  }
  .wrapper {
    padding: 0px 20px;
    height: 100%;
  }
  .inputWrapper {
    border: 2px solid var(--lightGrey);
    padding: 8px;
  }
  .updateBar {
    grid-row-start: 3;
  }
  .progress {
    justify-self: center;
  }
  @media (min-width: 768px) {
    img {
      width: 500px;
    }
  }
`;

export default function Photo() {
  // state for process bar
  const [progress, setProgress] = useState(0);
  // context values are set to usestate hooks in App.js containing our profile data
  const { image, setImage } = useContext(DataContext);

  // variable to hold image infomation
  let imageFile;

  // condition for types of files we will allow to be loaded
  const types = ["image/png", "image/jpeg"];

  //method for saving file upload to a variable
  const handleChange = (e) => {
    e.preventDefault();
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      imageFile = selected;
    } else {
      alert("wrong file type, please use a jpeg or png file");
    }
  };

  // method for uploading image to firebase
  const handleUpload = (e) => {
    e.preventDefault();
    // delete the prior images from firebase
    storage
      .ref("images")
      .listAll()
      .then((res) => {
        // make sure there is an image in firebase
        if (res.items) {
          res.items.forEach((item) => {
            item.delete();
          });
        }
      });
    // upload the new image to firebase
    const uploadTask = storage.ref(`images/${imageFile.name}`).put(imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(imageFile.name)
          .getDownloadURL()
          .then((url) => {
            // setUrl(url);
            setImage(url);
            setProgress(0);
          });
      }
    );
  };

  // dynamically display progress bar
  let progressBar;
  if (!progress) {
    progressBar = null;
  } else {
    progressBar = <progress className="progress" value={progress} max="100" />;
  }

  return (
    <PhotoStyles>
      <BackArrow />
      <div className="wrapper">
        <h1>Upload a photo of yourself:</h1>
        <form className="picWrapper" onSubmit={handleUpload}>
          <img src={image} alt="" />
          {progressBar}
          <div className="updateBar">
            <input type="file" onChange={handleChange} />
            <UpdateBar />
          </div>
        </form>
      </div>
    </PhotoStyles>
  );
}

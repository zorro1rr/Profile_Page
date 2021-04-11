import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Home from "./components/Home";
import Name from "./components/Name";
import Photo from "./components/Photo";
import Phone from "./components/Phone";
import Email from "./components/Email";
import About from "./components/About";

import firebase, { storage } from "./DataBase/Firebase";
import { DataContext } from "./DataBase/DataContext";

function App() {
  // data/loading states
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);
  // image state
  const [image, setImage] = useState();

  // method for updating firebase data
  const updateData = (value) => {
    const ref = firebase.firestore().collection("profile_data");
    ref
      .doc("profile1")
      .update(value)
      .catch((err) => console.log(err));
  };

  // state for passing our update method
  const [updateProfileData] = useState({ updateData });

  // querying firebase data
  useEffect(() => {
    // needed to include this again in useEffect to prevent warning
    const ref = firebase.firestore().collection("profile_data");
    // onSnapshot is a method recommended by firebase that provides realtime access to the DB
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      // fill out ProfileData state with our firebase query results
      setProfileData(items[0]);
      // query firebase storage for the image to populate our app with
      storage
        .ref("images")
        .listAll()
        .then((res) => {
          res.items[0].getDownloadURL().then((url) => {
            setImage(url);
            // once we get data from firebase the loading state is set to true
            setLoading(true);
          });
        });
    });
  }, []);

  if (!loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <GlobalStyles />
      {/* Using useContext hook to share data through routes */}
      <DataContext.Provider
        value={{
          profileData,
          setProfileData,
          updateProfileData,
          image,
          setImage,
        }}
      >
        <Route path="/" exact component={Home} />
        <Route path="/Name" component={Name} />
        <Route path="/Photo" component={Photo} />
        <Route path="/Phone" component={Phone} />
        <Route path="/Email" component={Email} />
        <Route path="/About" component={About} />
      </DataContext.Provider>
    </div>
  );
}

export default App;

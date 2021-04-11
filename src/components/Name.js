import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import UpdateBar from "./Reusables/UpdateBar";
import BackArrow from "./Reusables/BackArrow";

import { DataContext } from "../DataBase/DataContext";

const NameStyles = styled.div`
  height: 100vh;
  padding: 15px;
  font-weight: 700;
  color: var(--black);

  h1 {
    font-size: 1.4rem;
    padding: 10px 0;
  }
  form {
    display: grid;
    grid-template-rows: auto 1fr 12%;
    height: 50%;
  }
  label {
    color: var(--grey);
  }
  input,
  input:focus {
    padding-top: 8px;
    font-weight: 700;
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
  }
  .updateBar {
    grid-row-start: 3;
  }
  .wrapper {
    padding: 0px 20px;
    height: 100%;
  }
  .inputsDiv {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
  }
  .inputWrapper {
    display: inline-block;
    border: 2px solid var(--lightGrey);
    width: 40%;
    padding: 8px;
  }
  @media (min-width: 768px) {
    h1 {
      text-align: center;
    }
    .inputsDiv {
      flex-direction: column;
      align-items: center;
    }
    .inputWrapper {
      width: 70%;
      margin-bottom: 10px;
    }
    .updateBar {
      justify-self: center;
      width: 50%;
    }
  }
`;

export default function Name() {
  // context values are set to usestate hooks in App.js containing our profile data
  const { profileData, setProfileData, updateProfileData } = useContext(
    DataContext
  );

  // call useHistory to redirect to homepage after updating data
  const history = useHistory();

  // update to firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfileData.updateData({ ...profileData });
    history.push("/");
  };

  //methods to deal with two-way binding
  const handleFnameChange = (e) => {
    setProfileData({ ...profileData, fname: e.target.value });
  };
  const handleLnameChange = (e) => {
    setProfileData({ ...profileData, lname: e.target.value });
  };

  return (
    <NameStyles>
      <BackArrow />
      <div className="wrapper">
        <h1>What's your name?</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputsDiv">
            <div className="inputWrapper">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                name="fname"
                value={profileData.fname}
                onChange={handleFnameChange}
                required
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                name="lname"
                value={profileData.lname}
                onChange={handleLnameChange}
                required
              />
            </div>
          </div>
          <div className="updateBar">
            <UpdateBar />
          </div>
        </form>
      </div>
    </NameStyles>
  );
}

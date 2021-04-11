import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import UpdateBar from "./Reusables/UpdateBar";
import BackArrow from "./Reusables/BackArrow";

import { DataContext } from "../DataBase/DataContext";

const EmailStyles = styled.div`
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
  input,
  input:focus {
    padding-top: 8px;
    font-weight: 700;
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
  }
  label {
    color: var(--grey);
  }
  .updateBar {
    grid-row-start: 3;
  }
  .wrapper {
    padding: 0px 20px;
    height: 100%;
  }
  .inputWrapper {
    border: 2px solid var(--lightGrey);
    padding: 8px;
  }
  @media (min-width: 768px) {
    h1 {
      text-align: center;
    }
    .inputDiv {
      display: flex;
      justify-content: center;
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

export default function Email() {
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

  //method to deal with two-way binding
  const handleEmailChange = (e) => {
    setProfileData({ ...profileData, email: e.target.value });
  };
  return (
    <EmailStyles>
      <BackArrow />
      <div className="wrapper">
        <h1>What's your email?</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputDiv">
            <div className="inputWrapper">
              <label htmlFor="email">Your email address</label>
              <input
                type="email"
                name="email"
                pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={profileData.email}
                onChange={handleEmailChange}
                required
              />
            </div>
          </div>
          <div className="updateBar">
            <UpdateBar />
          </div>
        </form>
      </div>
    </EmailStyles>
  );
}

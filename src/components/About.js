import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import UpdateBar from "./Reusables/UpdateBar";
import BackArrow from "./Reusables/BackArrow";

import { DataContext } from "../DataBase/DataContext";

const AboutStyles = styled.div`
  height: 100vh;
  padding: 15px;
  font-weight: 700;
  color: var(--black);

  .wrapper {
    padding: 0px 20px;
    height: 100%;
    h1 {
      font-size: 1.4rem;
      padding: 10px 0;
    }
    form {
      display: grid;
      grid-template-rows: 45% 1fr 12%;
      height: 50%;
      .inputWrapper {
        border: 2px solid var(--lightGrey);
        padding: 8px;
        height: 100%;
        textarea,
        textarea:focus {
          font-weight: 700;
          outline: none;
          border: none;
          background-color: transparent;
          width: 100%;
          height: 100%;
          overflow: auto;
        }
      }
      .updateBar {
        grid-row-start: 3;
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      text-align: center;
    }
    .inputDiv {
      display: flex;
      justify-content: center;
      .inputWrapper {
        width: 70%;
        margin-bottom: 10px;
      }
    }
    .updateBar {
      justify-self: center;
      width: 50%;
    }
  }
`;

export default function About() {
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
  // method to deal with two-way binding
  const handleAboutChange = (e) => {
    setProfileData({ ...profileData, about: e.target.value });
  };
  return (
    <AboutStyles>
      <BackArrow />
      <div className="wrapper">
        <h1>What type of passenger are you?</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputDiv">
            <div className="inputWrapper">
              <textarea
                name="about"
                value={profileData.about}
                onChange={handleAboutChange}
                required
              />
            </div>
          </div>
          <div className="updateBar">
            <UpdateBar />
          </div>
        </form>
      </div>
    </AboutStyles>
  );
}

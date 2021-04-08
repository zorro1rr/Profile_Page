import React from "react";
import styled from "styled-components";

import UpdateBar from "./Reusables/UpdateBar";
import BackArrow from "./Reusables/BackArrow";

import Shippo from "../images/shippo2.png";

const PhotoStyles = styled.div`
  height: 100vh;
  padding: 15px;
  font-weight: 700;
  color: var(--black);
  h1 {
    font-size: 1.4rem;
    padding: 10px 0;
  }
  img {
    width: 300px;
  }

  .picWrapper {
    display: grid;
    grid-template-rows: auto 1fr 12%;
    height: 50%;
  }
  .wrapper {
    padding: 0px 20px;
    height: 100%;
  }
  .inputWrapper {
    border: 2px solid var(--lightGrey);
    padding: 8px;
  }
`;

export default function Photo() {
  return (
    <PhotoStyles>
      <BackArrow />
      <div className="wrapper">
        <h1>Upload a photo of yourself:</h1>
        <div className="picWrapper">
          <img src={Shippo} alt="" />
          <UpdateBar />
        </div>
      </div>
    </PhotoStyles>
  );
}

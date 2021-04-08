import React from "react";
import styled from "styled-components";

import UpdateBar from "./Reusables/UpdateBar";
import BackArrow from "./Reusables/BackArrow";

const AboutStyles = styled.div`
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
    grid-template-rows: 45% 1fr 12%;
    height: 50%;
  }
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
  label {
    color: var(--grey);
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

export default function About() {
  return (
    <AboutStyles>
      <BackArrow />
      <div className="wrapper">
        <h1>What type of passenger are you?</h1>
        <form>
          <div className="inputWrapper">
            <textarea
              type="email"
              name="email"
              placeholder="Write a little bit about yourself. Do you like chatting? Are you smoker? Do you bring pets with you? Etc."
              required
            />
          </div>
          <UpdateBar />
        </form>
      </div>
    </AboutStyles>
  );
}

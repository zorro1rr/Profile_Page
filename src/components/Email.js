import React from "react";
import styled from "styled-components";

import UpdateBar from "./Reusables/UpdateBar";
import BackArrow from "./Reusables/BackArrow";

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
  .wrapper {
    padding: 0px 20px;
    height: 100%;
  }
  .inputWrapper {
    border: 2px solid var(--lightGrey);
    padding: 8px;
  }
`;

export default function Email() {
  return (
    <EmailStyles>
      <BackArrow />
      <div className="wrapper">
        <h1>What's your email?</h1>
        <form>
          <div className="inputWrapper">
            <label htmlFor="email">Your email address</label>
            <input
              type="email"
              name="email"
              placeholder="Timcook@icloud.com"
              required
            />
          </div>
          <UpdateBar />
        </form>
      </div>
    </EmailStyles>
  );
}

import React from "react";
import styled from "styled-components";

import UpdateBar from "./Reusables/UpdateBar";
import BackArrow from "./Reusables/BackArrow";

const PhoneStyles = styled.div`
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

export default function Phone() {
  return (
    <PhoneStyles>
      <BackArrow />
      <div className="wrapper">
        <h1>What's your phone number?</h1>
        <form>
          <div className="inputWrapper">
            <label htmlFor="phone">Your phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="(212) 561-601-6167"
              required
            />
          </div>
          <UpdateBar />
        </form>
      </div>
    </PhoneStyles>
  );
}

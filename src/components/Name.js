import React from "react";
import styled from "styled-components";

import UpdateBar from "./Reusables/UpdateBar";
import BackArrow from "./Reusables/BackArrow";

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
    max-width: 40%;
    padding: 8px;
  }
`;

export default function Name() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              <input type="text" name="fname" placeholder="Justin" required />
            </div>
            <div className="inputWrapper">
              <label htmlFor="lname">Last name</label>
              <input type="text" name="lname" placeholder="Howard" required />
            </div>
          </div>
          <UpdateBar />
        </form>
      </div>
    </NameStyles>
  );
}

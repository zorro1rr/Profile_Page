import React from "react";
import styled from "styled-components";

const UpdateBarStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  background-color: var(--black);
  color: #f9f9f9;
  box-shadow: 1px 1px 15px #5b5b5b;
  width: 100%;
  input[type="submit"],
  input[type="submit"]:focus {
    border: none;
    outline: none;
    background-color: var(--black);
    color: #f9f9f9;
    padding: 0;
    font-size: 1rem;
    width: 100%;
    height: 100%;
  }
`;

export default function UpdateBar() {
  return (
    <UpdateBarStyles>
      <input type="submit" value="Update" />
    </UpdateBarStyles>
  );
}

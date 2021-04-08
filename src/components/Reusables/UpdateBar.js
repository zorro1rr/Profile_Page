import React from "react";
import styled from "styled-components";

const UpdateBarStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  grid-row-start: 3;
  background-color: var(--black);
  color: #f9f9f9;
  box-shadow: 1px 1px 15px #5b5b5b;

  input[type="submit"] {
    border: none;
    background-color: var(--black);
    color: #f9f9f9;
    padding: 0;
    font-size: 1rem;
  }
`;

export default function UpdateBar() {
  return (
    <UpdateBarStyles>
      <input type="submit" value="Update" />
    </UpdateBarStyles>
  );
}

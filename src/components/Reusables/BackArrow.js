import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HiOutlineArrowLeft } from "react-icons/hi";

const ArrowStyles = styled.div`
  .arrow {
    padding-top: 10px;
    font-size: 1.4rem;
    color: var(--black);
    text-decoration: none;
  }
`;

export default function BackArrow() {
  return (
    <ArrowStyles>
      <Link to="/">
        <HiOutlineArrowLeft className="arrow" />
      </Link>
    </ArrowStyles>
  );
}

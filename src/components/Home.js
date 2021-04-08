import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AiOutlineRight } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

import Shippo from "../images/shippo2.png";

const HomeStyles = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  h1 {
    color: var(--blue);
    font-size: 1.5rem;
  }
  p {
    font-weight: 700;
  }
  img {
    height: 146px;
    width: 194px;
    clip-path: circle(31.6% at 50% 50%);
  }
  .profileWrap {
    display: grid;
    grid-template-columns: repeat(20, 20px);
    grid-template-rows: 20px 20px 1fr;
    position: relative;
    height: 150px;
  }
  .profileBorder {
    clip-path: circle(34.5% at 50% 50%);
    display: inline-block;
    grid-column: 6 / span 5;
    grid-row: 1;
    height: 146px;
    width: 194px;
    background: var(--blue);
    box-sizing: border-box;
  }
  .pencilWrap {
    grid-column: 12 / span 2;
    grid-row: 2;
    z-index: 2;
  }
  .pencil {
    color: var(--blue);
    background-color: #ffffff;
    padding: 6px;
    border-radius: 50%;
    overflow: visible;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-decoration: none;
    border-bottom: 1px solid var(--grey);
    color: var(--black);
  }
  .arrow {
    font-size: 1.4rem;
    min-width: 16px;
    color: var(--grey);
  }
  .infoDiv {
    max-width: 90%;
  }
  .label {
    color: var(--grey);
  }
`;

export default function Home() {
  // State for user info
  const [info, setInfo] = useState({
    fname: "Justin",
    lname: "Howard",
    phone: "(202) 867-5309",
    email: "Timcook@icloud.com",
    about:
      "Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.",
  });

  return (
    <HomeStyles>
      <h1>Edit Profile</h1>
      <Link to="/photo">
        <div className="profileWrap">
          <div className="pencilWrap">
            <GoPencil className="pencil" />
          </div>
          <div className="profileBorder">
            <img src={Shippo} alt="" />
          </div>
        </div>
      </Link>
      <Link className="inputs" to="/name">
        <div className="infoDiv">
          <p className="label">Name</p>
          <p>{info.fname + " " + info.lname}</p>
        </div>
        <AiOutlineRight className="arrow" />
      </Link>
      <Link className="inputs" to="/phone">
        <div className="infoDiv">
          <p className="label">Phone</p>
          <p>{info.phone}</p>
        </div>
        <AiOutlineRight className="arrow" />
      </Link>
      <Link className="inputs" to="/email">
        <div className="infoDiv">
          <p className="label">Email</p>
          <p>{info.email}</p>
        </div>
        <AiOutlineRight className="arrow" />
      </Link>
      <Link className="inputs" to="/about">
        <div className="infoDiv">
          <p className="label">Tell us about yourself</p>
          <p>{info.about}</p>
        </div>
        <AiOutlineRight className="arrow" />
      </Link>
    </HomeStyles>
  );
}

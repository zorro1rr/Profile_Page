import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AiOutlineRight } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

import { DataContext } from "../DataBase/DataContext";

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  h1 {
    color: var(--blue);
    font-size: 1.5rem;
  }
  .profileWrap {
    display: grid;
    grid-template-columns: repeat(20, 20px);
    grid-template-rows: 20px 20px 1fr;
    position: relative;
    height: 150px;
    .pencilWrap {
      grid-column: 12 / span 2;
      grid-row: 2;
      z-index: 2;
      .pencil {
        color: var(--blue);
        background-color: #ffffff;
        padding: 6px;
        border-radius: 50%;
        overflow: visible;
      }
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
      img {
        height: 146px;
        width: 194px;
        clip-path: circle(31.6% at 50% 50%);
      }
    }
  }
  .inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-decoration: none;
    border-bottom: 1px solid var(--grey);
    color: var(--black);
    .infoDiv {
      max-width: 90%;
      .label {
        color: var(--grey);
      }
      p {
        font-weight: 700;
      }
    }
    .infoDiv > p {
      margin: 12px 0;
    }
    .arrow {
      font-size: 1.4rem;
      min-width: 16px;
      color: var(--grey);
    }
  }
`;

export default function Home() {
  // context values are set to usestate hooks in App.js containing our profile data
  const { profileData, image } = useContext(DataContext);

  return (
    <HomeStyles>
      <h1>Edit Profile</h1>
      <Link to="/photo">
        <div className="profileWrap">
          <div className="pencilWrap">
            <GoPencil className="pencil" />
          </div>
          <div className="profileBorder">
            <img src={image} alt="" />
          </div>
        </div>
      </Link>
      <Link className="inputs" to="/name">
        <div className="infoDiv">
          <p className="label">Name</p>
          <p>{profileData.fname + " " + profileData.lname}</p>
        </div>
        <AiOutlineRight className="arrow" />
      </Link>
      <Link className="inputs" to="/phone">
        <div className="infoDiv">
          <p className="label">Phone</p>
          <p>{profileData.phone}</p>
        </div>
        <AiOutlineRight className="arrow" />
      </Link>
      <Link className="inputs" to="/email">
        <div className="infoDiv">
          <p className="label">Email</p>
          <p>{profileData.email}</p>
        </div>
        <AiOutlineRight className="arrow" />
      </Link>
      <Link className="inputs" to="/about">
        <div className="infoDiv">
          <p className="label">Tell us about yourself</p>
          <p>{profileData.about}</p>
        </div>
        <AiOutlineRight className="arrow" />
      </Link>
    </HomeStyles>
  );
}

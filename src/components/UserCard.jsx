import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import Image from 'react-bootstrap/Image';

const UserCard = () => {
  return (
    <StyleWrapper>
      <div className="card-container">
        <img
          className="round"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="user"
        />
        <h3>Ricky Park</h3>
        <h6>New York</h6>
        <p>
          User interface designer and front-end developer User interface designer and front-end developerUser interface designer and front-end developer
        </p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div>
        <div className="skills">
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
    </StyleWrapper>
  );
};

const StyleWrapper = styled.div`
  h3 {
    margin: 10px 0;
  }

  h6 {
    margin: 5px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 10px;
    line-height: 12px;
  }

  .card-container {
    background-color: #231e39;
    /* border-radius: 10px; */
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    color: #b3b8cd;
    padding-top: 30px;
    position: relative;
    width: 300px;
    max-width: 100%;
    text-align: center;
  }

  /* .card-container .pro {
    color: #231e39;
    background-color: #febb0b;
    border-radius: 3px;
    font-size: 10px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
  } */

  .card-container .round {
    border: 1px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
  }
  p {
    padding-left: 7px;
    padding-right: 7px;

  }

  button.primary {
    margin: 5px;
    background-color: #03bfcb;
    border: 1px solid #03bfcb;
    border-radius: 3px;
    color: #231e39;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 4px 20px;
    
  }

  button.primary.ghost {
    background-color: transparent;
    color: #02899c;
  }

  .skills {
    background-color: #1f1a36;
    text-align: left;
    padding: 15px;
    margin-top: 10px;
  }

  .skills ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .skills ul li {
    border: 1px solid #2d2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
  }

  footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
  }

  footer p {
    margin: 10px 0;
  }

  footer i {
    color: red;
  }

  footer a {
    color: #3c97bf;
    text-decoration: none;
  }
`;

export default UserCard;

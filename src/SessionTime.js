import React from "react";
import styled from "styled-components";

const Time = styled.div`
  text-align: left;
  color: #009a79;
  background-color: #ecf5f4;
  padding: 0.5em 64px;
  display: none;
  font-size: 20px;
  border-top: 1px solid #b8d2cf;
  position: sticky;
  top: 0;
  z-index: 1;

  grid-column: 1 / -1;
  align-self: center;

  @media (max-width: 992px) {
    display: block;
  }

  @media (max-width: 576px) {
    padding: 8px;
  }
`;

const SessionTime = ({ time }) => <Time>{time}</Time>;

export default SessionTime;

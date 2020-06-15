import React, { memo } from "react";
import styled from "styled-components";

const SessionBox = styled.div`
  text-align: left;
  padding: 8px;
  border: 1px dashed rgba(0, 0, 0, 0.4);
  border-radius: 5px;

  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRowStart} / ${(props) => props.gridRowEnd};

  @media (max-width: 992px) {
    align-self: center;
    border: none;

    grid-column: 2;
    grid-row: auto;
  }

  @media (max-width: 576px) {
    grid-column: 1 / -1;
  }
`;

const SessionContent = styled.div`
  position: sticky;
  top: 120px;

  @media (max-width: 992px) {
    position: relative;
    top: 0;
  }
`;

const SessionTime = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

const SessionTitle = styled.div`
  font-size: 18px;

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const SessionSpeaker = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #009a79;
`;

const SessionInfo = styled.div`
  font-size: 18px;
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

const Session = (props) => {
  return (
    <SessionBox {...props}>
      <SessionContent>
        <SessionTime>
          {props.sessionStartTime} ~ {props.sessionEndTime}
        </SessionTime>
        <SessionTitle>{props.title}</SessionTitle>
        <SessionSpeaker>
          {props.speaker && `by ${props.speaker}`}
        </SessionSpeaker>
        <SessionInfo>
          {props.room} - {props.sessionTotalTime} mins
        </SessionInfo>
      </SessionContent>
    </SessionBox>
  );
};

export default memo(Session);

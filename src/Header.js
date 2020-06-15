import React from "react";
import styled from "styled-components";

const Rooms = styled.div`
  background-color: hsla(0, 0%, 100%, 0.8);

  position: sticky;
  top: 0;

  display: grid;
  grid-template-columns: repeat(${(props) => props.rooms.length}, 200px);
  grid-template-rows: 120px;
  gap: 0 12px;
  z-index: 1;

  @media (max-width: 992px) {
    display: none;
  }
`;

const Room = styled.div`
  width: 200px;
  color: rgba(0, 0, 0, 0.4);
`;

const RoomTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
`;

const Header = ({ rooms }) => (
  <Rooms rooms={rooms}>
    {rooms.map((room) => (
      <Room key={room}>
        Room
        <RoomTitle>{room}</RoomTitle>
      </Room>
    ))}
  </Rooms>
);

export default Header;

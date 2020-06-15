import React, { useMemo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import Session from "./Session";
import SessionTime from "./SessionTime";

const minutePerRow = 5;

const SessionTable = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridColumns}, 200px);
  grid-template-rows: repeat(${(props) => props.gridRows}, 40px);
  gap: 0 12px;

  @media (max-width: 992px) {
    grid-template-columns: 120px auto;
    grid-template-rows: ${(props) =>
      props.rowCount.map((rc) => `60px repeat(${rc}, 130px) `)};
  }
`;

const Schedule = ({ data: { rooms, sessions, startTime, endTime } }) => {
  // 結束時間 - 起始時間(m)
  const minuteDiff = useMemo(() => dayjs(endTime).diff(dayjs(startTime), "m"), [
    endTime,
    startTime,
  ]);

  let temp,
    rowCount = [];

  const sessionsTile = sessions.map((session) => {
    const sessionTime = temp !== session.start && (
      <SessionTime time={dayjs(session.start).format("HH:mm")} />
    );

    if (temp !== session.start) {
      temp = session.start;
      rowCount.push(1);
    } else {
      rowCount[rowCount.length - 1]++;
    }

    const props = {
      ...session,
      sessionStartTime: `${dayjs(session.start).format("HH:mm")}`,
      sessionEndTime: `${dayjs(session.end).format("HH:mm")}`,
      sessionTotalTime: dayjs(session.end).diff(dayjs(session.start), "m"),
      gridColumn: rooms.indexOf(session.room) + 1,
      gridRowStart:
        dayjs(session.start).diff(dayjs(startTime), "m") / minutePerRow + 1,
      gridRowEnd:
        dayjs(session.end).diff(dayjs(startTime), "m") / minutePerRow + 1,
    };

    return (
      <React.Fragment key={session.id}>
        {sessionTime}
        <Session key={session.id} {...props} />
      </React.Fragment>
    );
  });

  return (
    <SessionTable
      gridColumns={rooms.length}
      gridRows={minuteDiff / 5}
      rowCount={rowCount}
    >
      {sessionsTile}
    </SessionTable>
  );
};

export default Schedule;

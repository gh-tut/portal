import React, { useState } from 'react';
import IFrame from '../components/IFrame';
import styled from 'styled-components/macro';
import Selector from '../components/Selector';

const iframe = `<iframe
        src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=MTg2OHV0bTQwbjFtNWd0YThwMm02YTdnMWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      />`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Color = {
  Red: '#F7444E',
  White: '#F7F8F3',
  Teal: '#78BCC4',
  Black: '#002C3E',
  Pink: '#F375B5',
  Yellow: '#FCD783',
  Violet: '#816AD6'
};
const statusOption = [
  { value: 'Meeting Room 1', label: 'Meeting Room 1', color: Color.Violet },
  { value: 'Meeting Room 2', label: 'Meeting Room 2', color: Color.Red },
  { value: 'Kitchen', label: 'Kitchen', color: Color.Yellow },
  { value: 'Monitor', label: 'Monitor', color: Color.Teal },
  { value: 'Whiteboard 1', label: 'Whiteboard 1', color: Color.Black },
  { value: 'Whiteboard 2', label: 'Whiteboard 2', color: Color.Pink }
];

function renderCalendar(option) {
  let iframe = `<iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=NHAxZGNndWwyNmJoaDhubDU4bzR0bGgxYThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23EF6C00" width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
  switch (option) {
    case `Meeting Room 1`:
      iframe = `<iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=NHAxZGNndWwyNmJoaDhubDU4bzR0bGgxYThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23EF6C00" width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
      break;
    case `Meeting Room 2`:
      iframe = `<iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=Y2dsbGNoMHU2cWY2MjI5bHIzYTNlbXYzdThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%239E69AF"  width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
      break;
    case `Kitchen`:
      iframe = `<iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=MTg2OHV0bTQwbjFtNWd0YThwMm02YTdnMWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161"  width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
      break;
    case `Monitor`:
      iframe = `<iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=MG5wdHE3dTFncGhvcTJjNDdpczR2cDU1dDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F09300"  width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
      break;
    case `Whiteboard 1`:
      iframe = `<iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=aGczYms4czdzOW44dDF1Zmx0dmNldW45Z29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000"  width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
      break;
    case `Whiteboard 2`:
      iframe = `<iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=ZXM1NDRtYTk2ZWx2OGs1ZjhwbTJmMnNndDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F09300"  width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
      break;
    default:
      iframe = `<iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=NHAxZGNndWwyNmJoaDhubDU4bzR0bGgxYThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23EF6C00" width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
      break;
  }
  return <IFrame iframe={iframe} />;
}
function Calender() {
  const [currentFilter, setCurrentFilter] = useState('Meeting Room 1');
  const handleListFiltered = value => {
    setCurrentFilter(value);
  };
  return (
    <Wrapper>
      <Selector
        name={'calendar'}
        options={statusOption}
        onChange={handleListFiltered}
        css={`
          margin-bottom: 20px;
        `}
      />
      {renderCalendar(currentFilter)}
    </Wrapper>
  );
}

export default Calender;

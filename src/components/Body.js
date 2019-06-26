import React from 'react';
import Home from '../pages/Home';
import Form from '../pages/Form';
import Calender from '../pages/Calender';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function Body(props) {
  const page =
    props.pageState === 0 ? (
      <Home />
    ) : props.pageState === 1 ? (
      <Form />
    ) : (
      <Calender />
    );

  return <Wrapper>{page}</Wrapper>;
}

export default Body;

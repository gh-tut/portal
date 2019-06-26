import React from 'react';
import styled from 'styled-components/macro';
import { Container } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 100vh;
  /* justify-content: center; */
  margin-bottom: -8px;
`;
const Title = styled.h2`
  font-family: 'Inter', 'san';
  size: 2rem;
  color: lightgoldenrodyellow;
  margin: 0 0 5px 0;
`;
const SubTitle = styled.p`
  font-family: 'Inter', 'san';
  size: 1rem;
  color: darkred;
`;
const ReserveBtn = styled.a`
  height: 1.5rem;
  width: 150px;
  border: 2px solid lightgoldenrodyellow;
  border-radius: 20px;
  padding: 10px 20px;
  color: lightgoldenrodyellow;
  font-family: 'Inter', 'sans';
  text-align: center;
  transition: all 0.3s;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  :hover,
  :focus {
    cursor: pointer;
    color: darkred;
    border: 2px solid darkred;
    transform: translateY(-2px);
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  max-width: 500px;
  max-height: 600px;
  margin: 10px;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  background-image: linear-gradient(
    109.6deg,
    rgba(253, 199, 141, 1) 11.3%,
    rgba(249, 143, 253, 1) 100.2%
  );
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  @media screen and (min-width: 475px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
function Home() {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <div
          css={`
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            height: 30vh;
          `}
        >
          <div
            css={`
              display: flex;
              flex-direction: column;
            `}
          >
            <Title>TUT Assembly Room </Title>
            <Title
              css={`
                margin-bottom: 20px;
              `}
            >
              Reservation System
            </Title>
            <SubTitle>Reserve Assembly Room through Web site</SubTitle>
          </div>
          <ReserveBtn
            href="https://forms.gle/WQ3zw2AJ32Gz1Cmu8"
            target="_blank"
            rel="nofollow"
          >
            Reserve Now
          </ReserveBtn>
        </div>

        <Grid>
          <Card>
            <Title>What's TUT ARRS?</Title>
            <SubTitle>
              TUT ARR stands for "TUT Assembly Room Reservation System" that you
              can reserve Assembly Room through Website.
            </SubTitle>
          </Card>
          <Card>
            <Title>What you can do?</Title>
            <SubTitle>
              You can check events like workshop, UnitLeaders' meeting,
              screening party and more.
              <br />
              Also you can book Assembly room for some reason.
            </SubTitle>
          </Card>
          <Card>
            <Title>What's coming next?</Title>
            <SubTitle>
              Since we are working hard on making our site better,
              <br />
              you can expect more update from us in the future.
            </SubTitle>
          </Card>
        </Grid>
      </Container>
    </Wrapper>
  );
}
export default Home;

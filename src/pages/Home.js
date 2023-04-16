import styled from 'styled-components';

const Wrapper = styled.div`
  minheight: calc(100vh - 50px);
  display: flex;
  alignitems: center;
  justifycontent: center;
`;

const Title = styled.h1`
  fontweight: 500;
  fontsize: 48;
  textalign: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>
        Contact manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Wrapper>
  );
};

export default Home;

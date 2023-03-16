import styled from 'styled-components';
import '../App.css';

const MainArea = styled.div`

  max-height: 864px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 128px 0px 0 0px;

`;

const IntroWrap = styled.div`
  margin: 0 50px;

  .name-text {
    font-size: 20px;
  }

  .paragraph-light {
    font-size: 16px;
  }

  .heading-jumbo {
    margin: 10px 0;
    font-size: 64px;
    font-weight: 400;
  }
`;


const Render = () => {
  return (
    <>
      <MainArea>
        <IntroWrap>
          <div className='name-text'>Hyojin Ju</div>
          <div className='paragraph-light'>Frontend Engineer</div>
          <h1 className='heading-jumbo'>
            Hey there! I am a creative frontend engineer based in sunny San Francisco, CA.
          </h1>
        </IntroWrap>
      </MainArea>
    </>
  );
};

export default Render;

import styled from 'styled-components';
import '../App.css';

const IntroArea = styled.div`
  max-width: 100%;
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroWrap = styled.div`
  width: 1140px;
  margin: 100px 0 140px;
  .name-text {
    font-size: 20px;
    height: 34px;
  }

  .paragraph-light {
    font-size: 16px;
    height: 24px;
  }

  .heading-jumbo {
    margin: 10px 0;
    font-size: 64px;
    font-weight: 400;
  }

  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;


const Intro = () => {
  return (
    <>
      <IntroArea>
        <IntroWrap>
          <div className='name-text'>Hyojin Ju</div>
          <div className='paragraph-light'>Frontend Engineer</div>
          <h1 className='heading-jumbo'>
            Hey there! I am a creative frontend engineer based in sunny San Francisco, CA.
          </h1>
        </IntroWrap>
      </IntroArea>
    </>
  );
};

export default Intro;

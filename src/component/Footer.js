import styled from 'styled-components';
import '../App.css';

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868e96;
  font-size: 12px;

  .footer-name {
    width: 220px;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;

    .footer-name {
      height: 35px;
      text-align: center;
    }
  }

`;

const FooterItems = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  .footer-items {
    height: 20px;
    margin: 0 20px;
    transition: 0.3s;
  }
  .footer-items:hover {
    cursor: pointer;
    color: black;
    transition: 0.3s;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .footer-items {
    height: 40px;
  }
  }
`;

const Footer = () => {
  return (
    <div className="footer">
      <Wrapper>
        <div className='footer-name'>POWERED BY WEBFLOW</div>
          <FooterItems>
            <div className='footer-items'>FACEBOOK</div>
            <div className='footer-items'>TWITTER</div>
            <div className='footer-items'>INSTAGRAM</div>
          </FooterItems>
      </Wrapper>
    </div>
  );
};

export default Footer;

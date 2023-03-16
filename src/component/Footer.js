import styled from 'styled-components';
import '../App.css';

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 40px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868e96;
  font-size: 12px;

  .footer-logo {
    width: 220px;
  }

  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
  }
`;

const FooterItems = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  .footer-items {
    height: 20px;
    margin: 0 20px;
  }
`;

const Footer = () => {
  return (
    <div className="footer">
      <Wrapper>
        <div className='footer-logo'>POWERED BY WEBFLOW</div>
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

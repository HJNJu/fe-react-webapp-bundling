import styled from 'styled-components';
import '../App.css';
import logo_svg from '../icon/codestates2.png';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  display: flex;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 600;
    text-decoration : underline;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  .menu {
    height: 38px;
    padding: 9px 20px
  }

`;

const Nav = () => {
  return (
    <>
      <div className="header">
        <Wrapper>
          <div className='logo'>Portfolio</div>
          <Menu>
            <div className='menu'>HOME</div>
            <div className='menu'>ABOUT</div>
            <div className='menu'>STYLEGUIDE</div>
          </Menu>
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;

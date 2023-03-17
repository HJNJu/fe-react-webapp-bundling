import styled from 'styled-components';
import '../App.css';


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
  font-size: 12px;
  
  .nav {
    display: flex;
    justify-content: flex-end;
  }

  .menu {
    height: 38px;
    padding: 9px 20px;
    list-style: none;
  }
  .home {
    font-weight: bold;
  }

  .menu-icon {
    display: none;
  }

  @media only screen and (max-width: 991px) {
    display: flex;
    justify-content: flex-end;

    .menu {
      display: none;
    }

    .menu-icon {
      display: block;
      width: 22px;
      height: 18px;
    }
  }

`;

const Nav = () => {
  return (
    <>
      <div className="header">
        <Wrapper>
          <div className='logo'>Portfolio</div>
          <Menu>
            <ul className='nav'>
              <li className='menu home'>HOME</li>
              <li className='menu'>ABOUT</li>
              <li className='menu'>STYLEGUIDE</li>
            </ul>
            <img src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5c6e7f27bf98b2b5a6f64eb6_menu-icon.png" alt="" className="menu-icon" />
          </Menu>
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;

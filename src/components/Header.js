import React, {useState} from 'react'
import styled from 'styled-components'
// import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/carFolder/carSlice"
import { useSelector } from "react-redux";

function Header() {
  const [IconNavStatus, setIconNavStatus] = useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        {cars && cars.map((car, index) =>
          <a key={index} href='#'>{ car }</a>
        )}
      </Menu>
      <MenuRight>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        {/* <a><IconNav onClick={() => setIconNavStatus(true)} /></a> */}
        <a onClick={() => setIconNavStatus(true)}>Menu</a>
      </MenuRight>

      <IconNavMenu show={IconNavStatus}>
        <CloseBtnWrap>
          <li><CloseBtn onClick={() => setIconNavStatus(false)} /></li>
        </CloseBtnWrap>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Tade-in</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Commercial Energy</a></li>
      </IconNavMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  right:0;
  left: 0;
  z-index: 10;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    padding: 0 15px;
    flex-wrap: nowrap;
    cursor: pointer;
  }
  a:hover{
    background-color:#d6d7da;
    border-radius:8px;
    padding: 7px;
  }
  @media(max-width:768px){
    display : none;
  }
`
const MenuRight = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    margin-right: 10px;
    padding: 0 10px;
    cursor: pointer;
  }
  a:hover{
    background-color:#d6d7da;
    border-radius:8px;
    padding: 7px;
  }
`
// const IconNav = styled(MenuIcon)`
//     cursor: pointer;
// `
const IconNavMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .8s ease-in-out;
  li{
    padding: 15px 0;
    //border-bottom: 1px solid rgba(0, 0, 0, .2);

    a{
      font-weight: 600;
    }
  }
`
const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
`

const CloseBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`
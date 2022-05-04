import styled from 'styled-components'

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  width: 100%;
  background-color: ${ props => props.theme.colors.stormBlue };
  font-family: ${ props => props.theme.fonts };
  color: ${ props => props.theme.textColors.primary };
  letter-spacing: 1px;
  
`

export default NavBar

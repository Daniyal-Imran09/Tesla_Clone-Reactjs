import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {
  const [burgerstatus,setburgerstatus] = useState(false);
  return (
    <Container>
       <a>
        <img src = "/images/logo.svg" alt ="" />
       </a>
       <Menu>
          <a href="#"> Model S</a>
          <a href="#"> Model 3</a>
          <a href="#"> Model X</a>
          <a href="#"> Model Y</a>
       </Menu>
       <RightMenu>
        <a href = "#">Shop</a>
        <a href = "#">Tesla Account</a>
        <Custommenu onClick={()=>setburgerstatus(true)}/>
       
       </RightMenu>
      
       <Burgernav  show = {burgerstatus}>
        <Crossicon>
              <Close onClick={()=>setburgerstatus(false)}/>
        </Crossicon>
       
            <li><a>existing inventory</a></li>
            <li><a>used inventory</a></li>
            <li><a>trade-in</a></li>
            <li><a>cybertruck</a></li>
            <li><a>roadaster</a></li>
            <li><a>new inventory</a></li>
          </Burgernav>

    </Container>
  )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0px 20px;
top: 0;
left: 0;
right: 0;
 z-index:1;
`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
  font-weight:600;
  text-transform:uppercase;
  padding: 0px 10px;
  flex-wrap: nowrap;
}

@media(max-width:768px){
  display:none;
}

`

const RightMenu = styled.div`
display:flex;
align-items:center;
justify-content:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:  10px;
  flex-wrap: nowrap;
}
`

const Custommenu = styled(MenuIcon)`
cursor:pointer;
`

const Burgernav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
list-style:none;
padding:20px;
text-align:start;
cursor:pointer;
transform:${props=> props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.2s ease-in;
li{
  padding: 15px 0px;
  text-transform:uppercase;
  font-weight:600;
  border-bottom: 1px solid rgba(0,0,0,.2);
  a{

  }
}

`

const Close = styled(CloseIcon)`
cursor:pointer;
`

const   Crossicon = styled.div`
display:flex;
justify-content:end;

`
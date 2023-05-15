import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title,description,leftbtntext,rightbtntext,backgroundimage}) {

  return (
    <Wrap bgimg={backgroundimage} dani ={backgroundimage}>   
    <Fade bottom>
        <ItemText>
  <h1> {title} </h1>
  <p>{description}</p>
        </ItemText>
        </Fade>
<Button>
  <Fade bottom>
        <Buttongroup>
            <LeftButton class="dani">
                     {leftbtntext}
            </LeftButton>
            {rightbtntext && 
            <RightButton>
                {rightbtntext}
            </RightButton>
}
        </Buttongroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg">

        </DownArrow>
        </Button>

    </Wrap>
 
   
  )
}

export default Section

const Wrap = styled.div`

width:100vw;
height:100vh;
background-size:cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props => `url("/images/${props.bgimg}" ) `};
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`

const Buttongroup = styled.div`
display:flex;
margin-bottom:30px;
flex-direction:column;

`




const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width: 256px;
font-size:15px;
color:white;
border-radius:100px;
display:flex;
justify-content:center;
align-items:center;
opacity:0.85;
text-transform: uppercase;
margin:5px;
cursor:pointer;
hover{
    background-color;yellow;
}
`
const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
overflow-x:hidden;
animation: animatedown infinite 1.5s
`
const Button = styled.div``
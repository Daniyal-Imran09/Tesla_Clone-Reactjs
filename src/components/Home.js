import React from 'react'
import styled from 'styled-components';
import Section from './Section';
function Home() {
  return (
    <Container>
    <Section
    title="Model S"
    description="Order Online for touchless delivery"
    backgroundimage="model-s.jpg"
    leftbtntext="Custom Delivery"
    rightbtntext="Existing Inventory"
    />
    <Section
     title="Model Y"
     description="Order Online for touchless delivery"
     backgroundimage="model-y.jpg"
     leftbtntext="Custom Delivery"
     rightbtntext="Existing Inventory"
    />
    <Section
     title="Model 3"
     description="Order Online for touchless delivery"
     backgroundimage="model-3.jpg"
     leftbtntext="Custom Delivery"
     rightbtntext="Existing Inventory"
    />
  <Section
   title="Model X"
   description="Order Online for touchless delivery"
   backgroundimage="model-x.jpg"
   leftbtntext="Custom Delivery"
   rightbtntext="Existing Inventory"
  />
  <Section
  title="Lowest Cost Solar Panels in America"
  description="Money-back guarantee"
  backgroundimage="solar-panel.jpg"
  leftbtntext="Order now"
  rightbtntext="Learn more"
  
  />

<Section
  title="Solar for new Roofs"
  description="Solar Roof Costs Less Than New Roofs"
  backgroundimage="solar-roof.jpg"
  leftbtntext="Order now"
  rightbtntext="Learn more"
  
  />
   <Section
  title="Accessories"
  description=""
  backgroundimage="accessories.jpg"
  leftbtntext="Shop now"
  
  />
    </Container>
  )
}

export default Home;
const Container = styled.div`
 height:100vh;
`

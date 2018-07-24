import React, { Component } from 'react';
import {  
  Grid,
  Image,
  Divider,
  Container,
 } from 'semantic-ui-react';
import styled from 'styled-components';
import MePhoto from '../images/IMG_5901.jpg'
// import Footer from './Footer';

class AboutMe extends Component {
	render() {
		return(
			<div>
				<Grid stackable>
					<Grid.Row>
						<Grid.Column mobile={4} computer={16}>
							<MainHeader>
                <ImageDiv>
                <div >
              <Headerr>A Little Bit About B</Headerr>
              </div>
              </ImageDiv>
              <ImageContainer>
              <Image src={MePhoto} size='medium' />
              </ImageContainer>
              {/* <Divider hidden/> */}
              </MainHeader>
						</Grid.Column>
					</Grid.Row>
          <Container/>
          <Grid.Row>
            <Grid.Column mobile={4} computer={16}>
              <Wrapper>
              <SecondHeader>Background</SecondHeader>
              </Wrapper>
            </Grid.Column>
          </Grid.Row>
				</Grid>
			</div>
		)
	}
}

const MainHeader = styled.div`
  background-image: url(https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-0.3.5&s=a897e129ede506cdc32c4a251acb6eb1&auto=format&fit=crop&w=1672&q=80);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  height: 700px;
  display: flex;
  overflow: scroll;
 
` 

const Headerr = styled.h1`
  position: absolute;
  left: 40%;
  top: 5%;
  text-align: center;
  padding-top: 20px;
  font-size: 75px;
  color: black;
  font-family: 'Crete Round', serif;
`

const SecondHeader = styled.div`
  position: absolute;
  text-align: center;
  padding-top: 20px;
  font-size: 75px;
  color: black;
  font-family: 'Crete Round', serif;
  left: 35%;
  top: -1%;
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 700px;
  // background-color: #EBECED; 
`

const ImageContainer = styled.div`
  display: flex;
  height: 40vh;
  width: 20vw;
  padding-left: 20px;
  align-content: center;
`

const ImageDiv = styled.div`
  padding: 100px; 
  align-content: center;
`
// const AboutPhoto = styled.img`
//   background-image: url(${props => props.picture});
//   background-position: center center;
//   background-repeat: no-repeat; 
//   height: 100px;
//   display: flex;
//   z-index: 99;
//   left: 40%;
//   top: 5%;
// `
export default AboutMe;
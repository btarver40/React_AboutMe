import React, { Component } from 'react';
import {  
  Grid,
  Image,
  Divider,
  Container,
 } from 'semantic-ui-react';
import styled from 'styled-components';
import MePhoto from '../images/IMG_5901.jpg'
import UsPhoto from '../images/us.jpg'
// import WeddingPhoto from '../images/wedding.jpg'
import Footer from './Footer';

class AboutMe extends Component {
	render() {
		return(
			<div>
				{/* <Grid > */}
					<Grid.Row>
						<Grid.Column mobile={4} computer={16}>
							<MainHeader>
                <ImageDiv>
                <div >
              <Headerr>A Little Bit About B</Headerr>
              </div>
              </ImageDiv>
              <ImageContainer>
              <Image src={MePhoto} size='medium' rounded floated='right'  />
              </ImageContainer>
              <Divider hidden/>
              </MainHeader>
						</Grid.Column>
					</Grid.Row>
              <Wrapper>
              <SecondHeader>Background</SecondHeader>
              <Paragraph>I was born and raised in Salt Lake City Utah. I grew up with two brothers, my dad (from California), my mom (from Chile/Argentina), our dogs, and playing tennis!<br/> <br/> After high school, I went to the University of Utah where I met the love of my life, graduated in 2016, and two years later began my web development journey.</Paragraph>
              </Wrapper>
                <TestWrapper>
              <ThirdHeader>My Time at DevPoint Labs</ThirdHeader>
              </TestWrapper>
              <Container >
              <Preview picture={'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/36408376_985042545001717_6975907095006674944_o.jpg?_nc_cat=0&oh=7388c592004295b295908a9be47121fb&oe=5BDF49ED'}>
                    <PreviewText>
                      <h1>MY EXPERIENCE AT DEVPOINT</h1>
                      <h4>I never thought I would get into the field of web development, but I am so happy that I found this path and went for it.<br/><br/> After going through this program, I am amazed at the skills I have attained and I am really enjoying every bit of the learning process. </h4>
                    </PreviewText>
                  </Preview>
                  <Preview picture={'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3b5de7ef1f866b5c56adb3ef5d841c1c&auto=format&fit=crop&w=800&q=60'}>
                    <PreviewText>
                      <h1>EAT. SLEEP. CODE. REPEAT</h1>
                      <h4>This program was the most intense learning experience I have ever gone through! We all literally ate, slept, coded/studied, <br/> and repeated the process for three months straight, and I could not have asked for anything better. <br/> <br/> I definitely could not have learned all that I know now had this program been anything but immersive. </h4>
                    </PreviewText>
                  </Preview>
                  <Preview picture={'https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fce4ce8856a711cc50a14e03e58783a&auto=format&fit=crop&w=800&q=60'}>
                    <PreviewText>
                      <h1>COLLABORATION</h1>
                      <h5>DevPoint Labs is very big on collaboration and throughout the cohort, we worked in different groups each week. <br/> <br/> When we got into our final portfolio groups is where we got to experience what the workplace would really be like;<br/> it was such a great experience to know what the workflow will be like once we go out into the workplace.</h5>
                    </PreviewText>
                  </Preview>
                 </Container>
                 <Divider hidden/>
                 <Footer/>
				{/* </Grid> */}
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
  ` 
  
  const Headerr = styled.h1`
  position: absolute;
  left: 45%;
  top: 5%;
  text-align: center;
  padding-top: 70px;
  font-size: 75px;
  color: black;
  font-family: 'Crete Round', serif;
  `
  
  const SecondHeader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 75px;
  padding-top: 690px;
  color: black;
  font-family: 'Crete Round', serif;
  left: 35%;
  top: 16%;
`
const ThirdHeader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 65px;
  // padding-top: 690px;
  color: black;
  font-family: 'Crete Round', serif;
  left: 20%;
  top: 183%;
`

const Paragraph = styled.h1`
  font-family: 'Crete Round', serif;
  // text-align: center;
  padding-left: 40px;
  padding-right: 20px;
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 500px;
  background-color: #9EABAD;
`

const TestWrapper = styled.div`
  background-color: white;
  height: 110px;
`

const ImageContainer = styled.div`
  // display: flex;
  padding-right: 250px;
  // align-content: center;
  // border-radius: 35px;
`
const ImageDescription = styled.div`
  color: red;
`
const ImageDiv = styled.div`
  padding: 100px; 
  align-content: center;
`

const Preview = styled.div`
  background-image: url(${props => props.picture});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  flex: 1;
  flex-basis: 200px;
  height: 350px;
  display: flex;
  text-align: center;
  color: transparent;
  flex-direction: column;
  justify-content: space-around;


  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
   
  }
`
const PreviewText = styled(Preview)`
  color: transparent;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding=right: 50px
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
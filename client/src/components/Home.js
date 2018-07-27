import React, { Component } from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column mobile={4} computer={16}>
                <MainHeader/>
            <Headerr>Hi! I'm BIANCA HALE, </Headerr>
            <BelowHeaderr>and I'm a full-stack web developer</BelowHeaderr>
            <AboutButton>
              < Link style = {{color: 'white'}} to='/about'>About Me</Link>
            </AboutButton>
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
  height: 800px;
  display: flex;
  overflow: scroll;
` 

const Headerr = styled.h1`
  position: absolute;
  left: 40%;
  top: 15%;
  text-align: center;
  padding-top: 20px;
  font-size: 55px;
  color: black;
  font-family: 'Crete Round', serif;
`

const BelowHeaderr = styled.h1`
  position: absolute;
  left: 39%;
  top: 26%;
  text-align: center;
  padding-top: 20px;
  font-size: 50px;
  color: black;
  font-family: 'Crete Round', serif;
`
const AboutButton = styled.div`
  width: 250px;
  height: 60px;
  padding: 15px;
  background-color: black;
  border: 2px solid black;
  font-size: 18pt;
  text-align: center;
  color: white;
  opacity: 0.7;
  position: absolute;
  left: 56%;
  top: 55%;
`

export default Home;
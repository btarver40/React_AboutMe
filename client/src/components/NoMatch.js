import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Grid, } from 'semantic-ui-react';
import styled from 'styled-components';
import Footer from './Footer';

  
  class NoMatch extends Component {
    render() {
      return (
        <div>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column mobile={4} tablet={8} computer={16}>
                <MainPhoto/>
                  <ErrorMessage>404</ErrorMessage>
                  <ErrorMessageBottom>Page Not Found</ErrorMessageBottom>
                  <ErrorButton>
                    <Link style = {{color: 'white'}} to='/'>Back to Home</Link>
                  </ErrorButton>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Footer/>
        </div>
    );
  }
}

const MainPhoto = styled.div`
  background-image: url(https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=998bccff06362226c18586b810543a9b&auto=format&fit=crop&w=800&q=60);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  height: 700px;
  text-align: center;
  display: flex;
  overflow: scroll;
`

const ErrorMessage = styled.h1`
  position: absolute;
  left: 37%;
  top: -1%;
  text-align: center;
  padding-top: 20px;
  font-size: 200px;
  font-family: 'Old Standard TT', serif;
  color: #965F7A;
`

const ErrorMessageBottom = styled.h1`
  position: absolute;
  left: 28%;
  top: 30%;
  text-align: center;
  padding-top: 20px;
  font-size: 80px;
  font-family: 'Old Standard TT', serif;
  color: #965F7A;
`

const ErrorButton = styled.div`
  width: 250px;
  height: 60px;
  padding: 15px;
  background-color: #965F7A;
  border: 2px solid ;
  font-size: 18pt;
  text-align: center;
  color: white;
  opacity: 0.8;
  position: absolute;
  left: 73%;
  top: 73%;
`

export default NoMatch;
import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Divider, Icon } from '../../node_modules/semantic-ui-react';


class Footer extends Component {
	render () {
		return (
      <div>
      <Container fluid>
			<Wrapper>
				<Paragraph>
					Bianca Tarver Hale
				</Paragraph>
        {/* <br/> */}
				<Paragraph>
					Salt Lake City, UT United States - 801.654.4821
				</Paragraph>
        <Divider hidden/>
        <IconContainer>
          <a style = {{color: 'black'}} href='https://www.facebook.com/bianca.tarver.7'>
        <Icon name='facebook' size='big' />
        </a>
        <a style = {{color: 'black'}} href='https://www.instagram.com/biancatarverhale_/?hl=en'>
        <Icon name='instagram' size='big' />
        </a>
        <a style = {{color: 'black'}} href='https://twitter.com/BiancaSashaT'>
        <Icon name='twitter' size='big' />
        </a>
        <a style = {{color: 'black'}} href='https://www.pinterest.com/biancatarver/'>
        <Icon name='pinterest' size='big' />
        </a>
        </IconContainer>
			</Wrapper>
      </Container>
      <Divider hidden/>
      </div>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column; 
	height: 200px;
	background-color: #9EABAD;
`
const Paragraph = styled.div`
	font-family: 'Josefin Slab';
	font-size: 20px;
	color: #5B6263;
`

const IconContainer = styled.div` 
  display: flex;
  flex-direction: row;
  padding-right: 20px;
  flex-wrap: wrap;  
`
export default Footer;
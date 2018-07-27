import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import {
  Container,
  Header,
  Divider,
  Image
} from 'semantic-ui-react';
import styled from 'styled-components';
// import Footer from './Footer';
import Wedding from '../images/wedding.jpg'

class Moment extends Component {
  render() {
    const IMAGES =
      [{
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21686889_1702090459835399_2674440346202727691_o.jpg?_nc_cat=0&oh=7be6a1893bbc858e4ca1223b72eb1c05&oe=5C09C099",
        alt: "Group Wedding Photo",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21686889_1702090459835399_2674440346202727691_o.jpg?_nc_cat=0&oh=7be6a1893bbc858e4ca1223b72eb1c05&oe=5C09C099",
        thumbnailWidth: 300,
        thumbnailHeight: 174,

      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21765838_1702089936502118_5533729532237573838_o.jpg?_nc_cat=0&oh=2f2632fe71a1841522aa939d700a96dd&oe=5BDF600A",
        alt: "Wedding Gift Table",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21765838_1702089936502118_5533729532237573838_o.jpg?_nc_cat=0&oh=2f2632fe71a1841522aa939d700a96dd&oe=5BDF600A",
        thumbnailWidth: 300,
        thumbnailHeight: 212,

      },

      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21587399_1702090779835367_8122931901716987989_o.jpg?_nc_cat=0&oh=3890d281edc65385ed7f3ffcd2ba391f&oe=5BCD1BC6",
        alt: "Biancas family photo",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21587399_1702090779835367_8122931901716987989_o.jpg?_nc_cat=0&oh=3890d281edc65385ed7f3ffcd2ba391f&oe=5BCD1BC6",
        thumbnailWidth: 300,
        thumbnailHeight: 212
      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21687077_1702092383168540_2666163259824504842_o.jpg?_nc_cat=0&oh=81e93ce211e844119d0a8cd96254be05&oe=5BCB0E72",
        alt: "Bianca with her two little cousins",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21687077_1702092383168540_2666163259824504842_o.jpg?_nc_cat=0&oh=81e93ce211e844119d0a8cd96254be05&oe=5BCB0E72",
        thumbnailWidth: 290,
        thumbnailHeight: 280,
      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21762284_1702093599835085_3463139363595386120_o.jpg?_nc_cat=0&oh=7083c3a33f64bc918295444c059ae244&oe=5C0A8ED3",
        alt: "Bianca with her husband Jacoby Hale",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21762284_1702093599835085_3463139363595386120_o.jpg?_nc_cat=0&oh=7083c3a33f64bc918295444c059ae244&oe=5C0A8ED3",
        thumbnailWidth: 290,
        thumbnailHeight: 285,
      },

      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21762857_1702090226502089_8734087337027177337_o.jpg?_nc_cat=0&oh=32e3a7c278a99c78088f003c90041060&oe=5C114F83",
        alt: "Girls wedding photo with bridesmaids",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21762857_1702090226502089_8734087337027177337_o.jpg?_nc_cat=0&oh=32e3a7c278a99c78088f003c90041060&oe=5C114F83",
        thumbnailWidth: 300,
        thumbnailHeight: 212,
      },

      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/37117228_2076006425805369_1453025274898677760_o.jpg?_nc_cat=0&oh=29e89fa64b3041da980e5624ecb99f41&oe=5BDB141E",
        alt: "The Well Church group photo",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/37117228_2076006425805369_1453025274898677760_o.jpg?_nc_cat=0&oh=29e89fa64b3041da980e5624ecb99f41&oe=5BDB141E",
        thumbnailWidth: 300,
        thumbnailHeight: 212,

      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/25438889_1804983606212750_8956410764716457364_o.jpg?_nc_cat=0&oh=f70925f190cc90aa57dbd670590c3459&oe=5BD626CA",
        alt: "Bianca with father and grandparents",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/25438889_1804983606212750_8956410764716457364_o.jpg?_nc_cat=0&oh=f70925f190cc90aa57dbd670590c3459&oe=5BD626CA",
        thumbnailWidth: 280,
        thumbnailHeight: 285,

      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/27655475_1862019303842513_820084230868993326_n.jpg?_nc_cat=0&oh=b12ab2ecde7eb042a6906b46929383a4&oe=5C095B64",
        alt: "Bianca with mothers side of the family",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/27655475_1862019303842513_820084230868993326_n.jpg?_nc_cat=0&oh=b12ab2ecde7eb042a6906b46929383a4&oe=5C095B64",
        thumbnailWidth: 300,
        thumbnailHeight: 212,

      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/15380626_1384061141638334_3919607037337577401_n.jpg?_nc_cat=0&oh=de7f3665a3b161a5573b22c788a11a27&oe=5BD56487",
        alt: "Bianca engagement photo",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/15380626_1384061141638334_3919607037337577401_n.jpg?_nc_cat=0&oh=de7f3665a3b161a5573b22c788a11a27&oe=5BD56487",
        thumbnailWidth: 280,
        thumbnailHeight: 285,

      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/30261644_1928677830509993_5013184822592405504_o.jpg?_nc_cat=0&oh=f1c521dc4bc088bd796298cdc320ccbc&oe=5C092407",
        alt: "Bianca with her cousins",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/30261644_1928677830509993_5013184822592405504_o.jpg?_nc_cat=0&oh=f1c521dc4bc088bd796298cdc320ccbc&oe=5C092407",
        thumbnailWidth: 280,
        thumbnailHeight: 285,

      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/19023265_1592201740824272_8384086539783847629_o.jpg?_nc_cat=0&oh=88d2ec35c4d6aaa249a36e34d5706ad1&oe=5BD84101",
        alt: "Biancas bachelorette",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/19023265_1592201740824272_8384086539783847629_o.jpg?_nc_cat=0&oh=88d2ec35c4d6aaa249a36e34d5706ad1&oe=5BD84101",
        thumbnailWidth: 280,
        thumbnailHeight: 285,

      },
      {
        src: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/13131704_1192637957447321_1024522177156078736_o.jpg?_nc_cat=0&oh=d2f54fc326c830ff37b0db0a8ef5b0ec&oe=5BE08C00",
        alt: "Biancas university of utah graduation",
        thumbnail: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/13131704_1192637957447321_1024522177156078736_o.jpg?_nc_cat=0&oh=d2f54fc326c830ff37b0db0a8ef5b0ec&oe=5BE08C00",
        thumbnailWidth: 280,
        thumbnailHeight: 285,

      },
      {
        src: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/16300487_1439788149398966_5449277381197835025_o.jpg?_nc_cat=0&oh=8ccabf57bde47ae4f2e2d7fe594c4e6a&oe=5BDC20EE",
        alt: "Bianca with her husband",
        thumbnail: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/16300487_1439788149398966_5449277381197835025_o.jpg?_nc_cat=0&oh=8ccabf57bde47ae4f2e2d7fe594c4e6a&oe=5BDC20EE",
        thumbnailWidth: 300,
        thumbnailHeight: 285,

      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/36566688_10214437508524798_6953608161676754944_n.jpg?_nc_cat=0&oh=bee1b7f3016a7c9e93117a7067436b2d&oe=5BCCA2C3",
        alt: "Girls night out",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/36566688_10214437508524798_6953608161676754944_n.jpg?_nc_cat=0&oh=bee1b7f3016a7c9e93117a7067436b2d&oe=5BCCA2C3",
        thumbnailWidth: 340,
        thumbnailHeight: 280,

      },
      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/36493737_2029711577073284_6568612077856882688_o.jpg?_nc_cat=0&oh=17f5de3a35a94196028372ec917571f0&oe=5BC678B1",
        alt: "Birthday night out with friends",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/36493737_2029711577073284_6568612077856882688_o.jpg?_nc_cat=0&oh=17f5de3a35a94196028372ec917571f0&oe=5BC678B1",
        thumbnailWidth: 280,
        thumbnailHeight: 285,

      },
      ]
    return (
      <div>
        <TestWrapper>
          <TitleHeader>A Collection of Moments</TitleHeader>
        </TestWrapper>
        {/* <Header dividing as="h1" color="black" textAlign="center">A Collection of Moments</Header>  */}
        <MainHeader>
        </MainHeader>
        <Container>
          <Gallery images={IMAGES} />
        </Container>
        <Divider hidden />
      </div>
    );
  }
}

const MainHeader = styled.div`
  background-image: url('https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/31381352_1949098768467899_5327345797505744896_o.jpg?_nc_cat=0&oh=d5fe57b33c4c0dac4f61648d26ac6e06&oe=5C0E5EFA');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: black;
  padding-top: 90px;
`

const TitleHeader = styled.div`
  position: absolute;
  left: 28%;
  top: 1%;
  text-align: center;
  padding-top: 70px;
  font-size: 55px;
  color: black;
  font-family: 'Crete Round', serif;
`
const TestWrapper = styled.div`
  background-color: white;
  height: 140px;
`

export default Moment;

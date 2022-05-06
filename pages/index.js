import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Banner from '../components/Banner';
import HomeHero from '../components/HomeHero';
import CallToAction from '../components/CallToAction';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = ({ propertiesForSale, propertiesForRent }) => {

  return (
    <>
      <Box maxWidth='1280px' m='auto' marginTop={15}>
        <Banner />
      </Box>

      <Box maxWidth='1280px' m='auto' marginTop={16}>
        <CallToAction />
      </Box>

      <Box maxWidth='1280px' m='auto' marginTop={15}>
        <Flex flexWrap='wrap'>
          {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
      </Box>

      <Box maxWidth='1280px' m='auto' marginTop={16}>
        <HomeHero />
      </Box>

      <Box maxWidth='1280px' m='auto' marginTop={16}>
        <Flex flexWrap='wrap'>
          {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
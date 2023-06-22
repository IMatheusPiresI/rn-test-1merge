import { Box, Text, VStack } from 'native-base';
import React from 'react';
import { Banner } from './_components/Banner';
import { Header } from './_components/Header';
import { InputSearch } from './_components/InputSearch';

const Home: React.FC = () => (
  <VStack flex={1} bg="#FBFBFB" pt="statusBarHeight20">
    <Box mt="6" px="4">
      <Header />
    </Box>
    <VStack px="4" mt="8">
      <Text
        fontFamily="poppins"
        fontWeight="normal"
        color={'#3EB489'}
        fontSize={22}
        lineHeight={38}>
        Hello, Maria 👋🏻
      </Text>
      <Text
        fontFamily="poppins"
        fontWeight="normal"
        color={'#000000'}
        fontSize={16}>
        What do you wanna donate today?
      </Text>
      <Box mt="5">
        <InputSearch />
      </Box>
      <Box mt="5">
        <Banner />
      </Box>
    </VStack>
    <Box mt="4">
      <Text
        fontSize={17}
        fontFamily="poppins"
        fontWeight="bold"
        mt="2"
        ml="4"
        color="#000000">
        Categories
      </Text>
    </Box>
  </VStack>
);

export default Home;

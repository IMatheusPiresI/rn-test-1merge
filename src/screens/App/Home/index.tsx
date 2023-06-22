import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import metrics from '@resources/theme/metrics';
import { Box, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Banner } from './_components/Banner';
import { CardCampaign } from './_components/CardCampaign';
import { CategorieList } from './_components/CategorieList';
import { Header } from './_components/Header';
import { InputSearch } from './_components/InputSearch';
const Home: React.FC = () => (
  <KeyboardDismiss>
    <ScrollView
      flexGrow={1}
      bg="#FBFBFB"
      contentContainerStyle={styles.contentScroll}
      showsVerticalScrollIndicator={false}>
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
          mb="4"
          color="#000000">
          Categories
        </Text>
        <CategorieList />
      </Box>
      <Box mt="4" px="4">
        <Text
          fontSize={17}
          fontFamily="poppins"
          fontWeight="bold"
          mt="2"
          mb="4"
          color="#000000">
          My Campaign
        </Text>
        <CardCampaign />
      </Box>
    </ScrollView>
  </KeyboardDismiss>
);

export default Home;

const styles = StyleSheet.create({
  contentScroll: {
    paddingTop: metrics.statusBarHeight16,
    paddingBottom: 40,
  },
});

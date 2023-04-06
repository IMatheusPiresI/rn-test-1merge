import React, { createElement } from 'react';
import { Box, HStack, Input, ScrollView, Text, VStack } from 'native-base';
import { IViewProps } from './types';

import BrazilFlagSVG from '@assets/svg/brazil-flag.svg';
import { StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';

const mockCountry = [
  {
    id: '1',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
  {
    id: '2',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
  {
    id: '3',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
  {
    id: '4',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
  {
    id: '5',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
  {
    id: '6',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
  {
    id: '7',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
  {
    id: '8',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
  {
    id: '9',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
  {
    id: '10',
    prefixe: '55',
    country: 'Brazil',
    image: BrazilFlagSVG,
  },
];

const CountrySelectView: React.FC<IViewProps> = () => (
  <Box
    w={'full'}
    h={240}
    position={'absolute'}
    top={-240}
    borderTopLeftRadius={10}
    borderTopRightRadius={10}
    bgColor={'#F5F5F5'}
    borderWidth={2}
    borderColor={'#DADADA'}
    px={6}
    pt={6}
    pb={2}>
    <Box justifyContent="center">
      <Input
        bgColor={'#fff'}
        borderWidth={0}
        placeholder="Pesquise por um país..."
        pl={12}
        fontSize={12}
      />
      <Box position="absolute" left={2}>
        <MaterialIcons name="search" size={30} color="#A2A2A2" />
      </Box>
    </Box>
    <VStack flex={1} mt={3}>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <FlatList
          data={mockCountry}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled
          renderItem={({ item }) => (
            <HStack alignItems={'center'} w="full" flex={1}>
              <Box>{createElement(item.image, { width: 24, height: 16 })}</Box>
              <Text ml={2} fontWeight={'bold'} fontSize={10}>
                + {item.prefixe} - {item.country}
              </Text>
            </HStack>
          )}
          ItemSeparatorComponent={() => <Box height={2} />}
        />
      </ScrollView>
    </VStack>
  </Box>
);
export default CountrySelectView;

const styles = StyleSheet.create({
  boxButtonCountry: {
    width: 55,
    height: 55,
  },
  container: {
    width: '100%',
  },
});

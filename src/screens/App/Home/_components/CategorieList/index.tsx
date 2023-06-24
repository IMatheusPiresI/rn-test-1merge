import { Box, FlatList, Text } from 'native-base';
import React, { ReactNode } from 'react';
import AllCategorieSVG from '@assets/svg/allCategorie.svg';
import CompaignsCategorieSVG from '@assets/svg/compaignsCategorie.svg';
import DonateCategorieSVG from '@assets/svg/donateCategorie.svg';
import CharityCategorieSVG from '@assets/svg/charityCategorie.svg';
import EventsCategorieSVG from '@assets/svg/eventsCategorie.svg';
import VolunteersCategorieSVG from '@assets/svg/volunteersCategorie.svg';
import { ListRenderItemInfo, StyleSheet } from 'react-native';

type ICategorie = {
  id: string;
  name: string;
  color: string;
  icon: ReactNode;
};

export const CategorieList: React.FC = () => {
  const mockCategories: ICategorie[] = [
    {
      id: '1',
      name: 'All',
      color: 'rgba(137, 105, 226, 0.1)',
      icon: <AllCategorieSVG width={37} height={37} />,
    },
    {
      id: '2',
      name: 'Campaigns',
      color: 'rgba(31, 160, 167, 0.1)',
      icon: <CompaignsCategorieSVG width={37} height={37} />,
    },
    {
      id: '3',
      name: 'Donate Goods',
      color: 'rgba(52, 145, 230, 0.1)',
      icon: <DonateCategorieSVG width={37} height={37} />,
    },
    {
      id: '4',
      name: 'Charity',
      color: 'rgba(255, 153, 0, 0.1)',
      icon: <CharityCategorieSVG width={37} height={37} />,
    },
    {
      id: '5',
      name: 'Events',
      color: 'rgba(247, 91, 126, 0.1)',
      icon: <EventsCategorieSVG width={37} height={37} />,
    },
    {
      id: '6',
      name: 'Volunteers',
      color: 'rgba(93, 158, 251, 0.1)',
      icon: <VolunteersCategorieSVG width={37} height={37} />,
    },
  ];

  const renderItem = ({ item }: ListRenderItemInfo<ICategorie>) => (
    <Box alignItems="center">
      <Box
        backgroundColor={item.color}
        w="74px"
        h="74px"
        alignItems="center"
        borderRadius={10}
        justifyContent={'center'}
      >
        {item.icon}
      </Box>
      <Text color={'#000'} fontFamily="poppins" fontSize={12} mt="4">
        {item.name}
      </Text>
    </Box>
  );

  return (
    <Box w="full">
      <FlatList
        data={mockCategories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        decelerationRate="fast"
        contentContainerStyle={styles.contentList}
      />
    </Box>
  );
};

export const styles = StyleSheet.create({
  contentList: {
    gap: 16,
    paddingHorizontal: 16,
  },
});

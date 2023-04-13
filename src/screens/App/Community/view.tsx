import React from 'react';
import { Box, FlatList, VStack } from 'native-base';
import { InputSearch } from '@components/Forms/InputSearch';
import CardCommunity from '@components/CardCommunity';
import { StyleSheet } from 'react-native';
import { mockCommunity } from '../../../mocks/mockCommunity';
import { IViewProps } from './types';
import { TipCommunitySelected } from '@components/TipCommunitySelected';
import { KeyboardDismiss } from '@components/KeyboardDismiss';

const CommunityView: React.FC<IViewProps> = ({ handleSelectCommunity }) => (
  <KeyboardDismiss>
    <VStack flex={1}>
      <TipCommunitySelected />
      <VStack flex={1} bgColor={'#F7F7F7'} py="statusBarHeight16" px={5}>
        <Box h={16} w="full" mt="iosSpace16">
          <InputSearch placeholder="Pesquise por comunidade..." />
        </Box>
        <VStack flex={1} mt={4}>
          <FlatList
            data={mockCommunity}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardCommunity
                data={item}
                onPress={() => handleSelectCommunity(item.id, item.title)}
              />
            )}
            ItemSeparatorComponent={() => <Box h={4} />}
            contentContainerStyle={styles.list}
            overScrollMode="never"
          />
        </VStack>
      </VStack>
    </VStack>
  </KeyboardDismiss>
);

export default CommunityView;

const styles = StyleSheet.create({
  list: {
    paddingBottom: 140,
  },
});

import React from 'react';
import { Box, FlatList, VStack } from 'native-base';
import HeaderChat from '@components/HeaderChat';
import { CardChatMessage } from '@components/CardChatMessage';
import { StyleSheet } from 'react-native';
import { IViewProps } from './types';
import { TipCommunitySelected } from '@components/TipCommunitySelected';

const AllChatsView: React.FC<IViewProps> = ({ chats, handleOpenChat }) => (
  <VStack flex={1}>
    <TipCommunitySelected />
    <VStack flex={1} bgColor="#F7F7F7" py="statusBarHeight16" px="5">
      <Box>
        <HeaderChat />
      </Box>
      <VStack flex={1} mt={4}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardChatMessage data={item} onPress={() => handleOpenChat(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Box h={4} />}
          contentContainerStyle={styles.list}
        />
      </VStack>
    </VStack>
  </VStack>
);

export default AllChatsView;

const styles = StyleSheet.create({
  list: {
    paddingBottom: 140,
  },
});

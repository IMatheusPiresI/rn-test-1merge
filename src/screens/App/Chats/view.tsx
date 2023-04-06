import React from 'react';
import { Box, FlatList, VStack } from 'native-base';
import HeaderChat from '@components/HeaderChat';
import CardChatMessageView from '@components/CardChatMessage/view';
import { StyleSheet } from 'react-native';

const ChatsView: React.FC = () => (
  <VStack flex={1} bgColor="#F7F7F7" py="statusBarHeight16" px="5">
    <Box>
      <HeaderChat />
    </Box>
    <VStack flex={1} mt={8}>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <CardChatMessageView />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Box h={4} />}
        contentContainerStyle={styles.list}
      />
    </VStack>
  </VStack>
);

export default ChatsView;

const styles = StyleSheet.create({
  list: {
    paddingBottom: 90,
  },
});

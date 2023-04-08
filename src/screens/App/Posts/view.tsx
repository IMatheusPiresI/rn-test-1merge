import { Post } from '@components/PostTemplate/Post';
import { StoryList } from '@components/StoryList';
import { Box, FlatList, HStack, VStack } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import { IViewProps } from './types';
import { StyleSheet } from 'react-native';

export const PostsView: React.FC<IViewProps> = ({ communityPosts }) => (
  <VStack bgColor="#F7F7F7" flex={1}>
    <HStack pt="statusBarHeight16" pb="2" bgColor={'#fff'} pl="12">
      <StoryList />
    </HStack>
    <VStack flex={1} bgColor="transparent" mt="6">
      <FlatList
        data={communityPosts}
        px={5}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post data={item} />}
        ItemSeparatorComponent={() => <Box h={4} />}
        overScrollMode="never"
        contentContainerStyle={styles.list}
      />
    </VStack>
  </VStack>
);

export default PostsView;

const styles = StyleSheet.create({
  list: {
    paddingBottom: 140,
  },
});

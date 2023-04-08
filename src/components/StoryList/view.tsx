import React from 'react';
import { IViewProps } from './types';
import { Box, FlatList } from 'native-base';

import { Story } from './Story';
import { StyleSheet } from 'react-native';

const StoryListView: React.FC<IViewProps> = ({ storyList }) => (
  <Box>
    <FlatList
      data={storyList}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Story story={item} />}
      ItemSeparatorComponent={() => <Box w={5} />}
      overScrollMode="never"
      contentContainerStyle={styles.list}
    />
  </Box>
);

export default StoryListView;

const styles = StyleSheet.create({
  list: {
    paddingRight: 24,
  },
});

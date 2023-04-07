import React from 'react';
import { IViewProps } from './types';
import { Box, FlatList } from 'native-base';

import { Story } from './Story';

const StoryListView: React.FC<IViewProps> = ({ storyList }) => (
  <Box>
    <FlatList
      data={storyList}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Story story={item} />}
      ItemSeparatorComponent={() => <Box w={5} />}
    />
  </Box>
);

export default StoryListView;

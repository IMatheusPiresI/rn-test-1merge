import { CardMovieList } from '@components/CardMovieList';
import { IMovie } from '@resources/hooks/useSectionMovies';
import { Text, VStack } from 'native-base';
import React from 'react';
import {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';

import Animated, { useSharedValue } from 'react-native-reanimated';

type IProps = {
  movies: IMovie[];
  title: string;
};

export const ListSectionMovie: React.FC<IProps> = ({ movies, title }) => {
  const scrollX = useSharedValue(0);

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  const renderitem = ({ item, index }: ListRenderItemInfo<IMovie>) => (
    <CardMovieList movie={item} index={index} scrollX={scrollX} />
  );
  return (
    <VStack alignItems={'flex-start'}>
      <Text
        fontFamily="poppins"
        fontWeight="bold"
        fontSize={20}
        textAlign="center"
        color="#fff"
        mb="4"
        ml="4"
      >
        {title}
      </Text>
      <Animated.FlatList
        data={movies}
        keyExtractor={(item) => String(item.id)}
        onScroll={scrollHandler}
        renderItem={renderitem}
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        decelerationRate="fast"
        maxToRenderPerBatch={6}
        initialNumToRender={8}
      />
    </VStack>
  );
};
const styles = StyleSheet.create({
  contentList: {
    gap: 16,
    paddingHorizontal: 16,
  },
});

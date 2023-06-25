import { useNavigation } from '@react-navigation/native';
import { IMovie } from '@resources/hooks/useSectionMovies';
import metrics from '@resources/theme/metrics';
import { Image } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  SharedValue,
  useDerivedValue,
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';

import { SharedElement } from 'react-navigation-shared-element';

type IProps = {
  movie: IMovie;
  index: number;
  scrollX: SharedValue<number>;
};

export const CardMovieList: React.FC<IProps> = ({ movie, index, scrollX }) => {
  const navigation = useNavigation();
  const BOOK_WIDTH = metrics.screenWidth30;
  const BOOK_SPACES = 16;
  const inputRange = [-BOOK_WIDTH, 0, BOOK_WIDTH, BOOK_WIDTH * 3];
  const position = useDerivedValue(
    () => (index + 0.00001) * (BOOK_WIDTH + BOOK_SPACES) - scrollX.value,
  );

  const handleNavigateToBookDetail = () => {
    navigation.navigate('MovieDetail', {
      movie,
    });
  };

  const rAnimatedPerspectiveBook = useAnimatedStyle(() => ({
    width: metrics.screenWidth30,
    height: metrics.screenHeight30,
    transform: [
      { perspective: 800 },
      {
        scale: interpolate(
          position.value,
          inputRange,
          [0.8, 1, 1, 1],
          Extrapolate.CLAMP,
        ),
      },
      {
        rotateY: `${interpolate(
          position.value,
          inputRange,
          [60, 0, 0, 0],
          Extrapolate.CLAMP,
        )}deg`,
      },
    ],
  }));

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateToBookDetail}>
      <Animated.View style={rAnimatedPerspectiveBook}>
        <SharedElement id={`item.${movie.id}.image`}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            alt="poster movie"
            resizeMode="cover"
            style={styles.image}
          />
        </SharedElement>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
  },
});

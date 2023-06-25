import { BoxMovieInfo } from '@components/BoxMovieInfo';
import { IconBase } from '@components/IconBase';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IMovie } from '@resources/hooks/useSectionMovies';
import metrics from '@resources/theme/metrics';
import { Box, HStack, Image, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const MovieDetail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { movie } = route.params as { movie: IMovie };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <VStack flex={1}>
      <HStack
        mt="4"
        w="full"
        h="screenHeight30"
        position="absolute"
        top={Platform.OS === 'ios' ? -30 : -26}
      >
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          }}
          blurRadius={4}
          style={styles.backgroundImage}
        >
          <Box
            position={'absolute'}
            left="4"
            top={Platform.OS === 'ios' ? '16' : '12'}
            backgroundColor={'#fff'}
            borderRadius="full"
          >
            <TouchableOpacity onPress={handleGoBack}>
              <IconBase name="arrow-back" color="#1904b6" size={28} />
            </TouchableOpacity>
          </Box>
          <Box w="24" h="48">
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
          </Box>
        </ImageBackground>
      </HStack>
      <VStack
        flex={1}
        bgColor="#FBFBFB"
        top="screenHeight30"
        borderTopRadius={28}
      >
        <ScrollView
          flexGrow={1}
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          <Text
            fontFamily="poppins"
            fontWeight="bold"
            fontSize={20}
            textAlign="center"
            color={'#000'}
            mb="4"
          >
            {movie.title ? movie.title : movie.original_name}
          </Text>
          <BoxMovieInfo movie={movie} />
          <VStack mt="3">
            <Text
              fontFamily="poppins"
              fontWeight="bold"
              fontSize={20}
              color={'#000'}
            >
              Synopsis
            </Text>

            <Text
              fontFamily="roboto"
              fontWeight="regular"
              fontSize={16}
              color={'#000'}
              mt="4"
            >
              {movie.overview.length > 1 ? movie.overview : 'Not overview'}
            </Text>
          </VStack>
        </ScrollView>
      </VStack>
    </VStack>
  );
};
export default MovieDetail;

const styles = StyleSheet.create({
  image: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  backgroundImage: {
    width: '100%',
    height: metrics.screenHeight35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

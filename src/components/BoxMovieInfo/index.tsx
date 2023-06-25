import { IMovie } from '@resources/hooks/useSectionMovies';
import { Box, HStack, Text } from 'native-base';
import React from 'react';

type IProps = {
  movie: IMovie;
};

export const BoxMovieInfo: React.FC<IProps> = ({ movie }) => (
  <HStack w="full" borderWidth={1} borderColor="#000" borderRadius="full">
    <Box flex={1} py="2">
      <Text
        fontFamily="poppins"
        fontWeight="bold"
        fontSize={14}
        textAlign="center"
        color={'#000'}
      >
        Average
      </Text>
      <Text
        fontFamily="poppins"
        fontWeight="medium"
        fontSize={12}
        textAlign="center"
        color={'#000'}
        mt="3"
      >
        {movie.vote_average}
      </Text>
    </Box>
    <Box
      flex={1}
      borderLeftWidth={1}
      borderRightWidth={1}
      borderColor="#000"
      py="2"
    >
      <Text
        fontFamily="poppins"
        fontWeight="bold"
        fontSize={14}
        textAlign="center"
        color={'#000'}
      >
        Language
      </Text>
      <Text
        fontFamily="poppins"
        fontWeight="medium"
        fontSize={12}
        textAlign="center"
        color={'#000'}
        mt="3"
      >
        {movie.original_language.toUpperCase()}
      </Text>
    </Box>
    <Box flex={1} py="2">
      <Text
        fontFamily="poppins"
        fontWeight="bold"
        fontSize={14}
        textAlign="center"
        color={'#000'}
      >
        Votes
      </Text>
      <Text
        fontFamily="poppins"
        fontWeight="medium"
        fontSize={12}
        textAlign="center"
        color={'#000'}
        mt="3"
      >
        {movie.vote_count}
      </Text>
    </Box>
  </HStack>
);

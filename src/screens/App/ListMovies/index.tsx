import { IconBase } from '@components/IconBase';
import { ListSectionMovie } from '@components/ListSectionMovie';
import { useNavigation } from '@react-navigation/native';
import { useSectionMovies } from '@resources/hooks/useSectionMovies';
import { Box, HStack, ScrollView, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ListMovies: React.FC = () => {
  const navigation = useNavigation();
  const { loading, moviesSection } = useSectionMovies();

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, []);

  return (
    <ScrollView
      flexGrow={1}
      bgColor="#18153f"
      py="statusBarHeight"
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={styles.contentScrollView}
    >
      <HStack mt="4" alignItems={'center'} justifyContent="center">
        <Box position={'absolute'} left="4">
          <TouchableOpacity onPress={handleGoBack}>
            <IconBase name="arrow-back" color="#ffffff" />
          </TouchableOpacity>
        </Box>
        <Text
          fontFamily="poppins"
          fontWeight="bold"
          fontSize={24}
          textAlign="center"
          color="#ffffff"
        >
          API TMDB
        </Text>
      </HStack>
      {!loading ? (
        <VStack mt="4" mb="12" space={4}>
          <ListSectionMovie
            movies={moviesSection.netflixOriginal}
            title="Original Netflix"
          />
          <ListSectionMovie movies={moviesSection.trending} title="Trending" />
          <ListSectionMovie movies={moviesSection.romance} title="Romance" />
          <ListSectionMovie
            movies={moviesSection.documentary}
            title="Documentary"
          />
          <ListSectionMovie movies={moviesSection.horror} title="Horror" />
        </VStack>
      ) : (
        <VStack flex={1} alignItems="center" justifyContent={'center'} mt="12">
          <Box>
            <ActivityIndicator size={42} color="#fff" />
            <Text
              fontFamily="poppins"
              fontWeight="mediun"
              fontSize={16}
              textAlign="center"
              color="#fff"
            >
              Loading Movies...
            </Text>
          </Box>
        </VStack>
      )}
    </ScrollView>
  );
};
export default ListMovies;

const styles = StyleSheet.create({
  contentScrollView: {
    paddingBottom: 24,
  },
});

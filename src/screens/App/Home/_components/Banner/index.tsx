import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import BannerPNG from '@assets/images/banner.png';
import { Box, Text } from 'native-base';

export const Banner: React.FC = () => (
  <Box w="full" h="170px">
    <ImageBackground
      source={BannerPNG}
      resizeMode="cover"
      style={styles.container}
    >
      <Box flex={1} py="2" px="4">
        <Text
          fontSize={20}
          fontFamily="poppins"
          fontWeight="medium"
          mt="2"
          color="#000000"
        >
          Do you really have{'\n'}a creative{' '}
          <Text color={'#3EB489'}>idea?</Text>
        </Text>
        <Box alignSelf="baseline" mt="4">
          <TouchableOpacity style={styles.buttonOpacity} activeOpacity={0.7}>
            <Text
              fontSize={20}
              fontFamily="poppins"
              fontWeight="regular"
              color="#fff"
            >
              Start Campaign
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </ImageBackground>
  </Box>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonOpacity: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#3EB489',
    borderRadius: 10,
  },
});

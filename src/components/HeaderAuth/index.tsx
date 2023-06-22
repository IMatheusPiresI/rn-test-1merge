import { Box, Image, Text, VStack } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import SubtractPNG from '@assets/images/subtract.png';
import BrandPNG from '@assets/images/brand.png';
import metrics from '@resources/theme/metrics';

type IProps = {
  title: string;
};
export const HeaderAuth: React.FC<IProps> = ({ title }) => (
  <VStack justifyContent={'flex-end'} flex={1} maxHeight="screenHeight45">
    <ImageBackground source={SubtractPNG} style={styles.backgroundContent}>
      <Image source={BrandPNG} w={122} h={45} alt="brand 1mage" />
      <Box position="absolute" bottom={2}>
        <Text
          fontFamily="poppins"
          fontWeight="extrabold"
          color={'#1E293B'}
          fontSize={32}>
          {title}
        </Text>
      </Box>
    </ImageBackground>
  </VStack>
);

const styles = StyleSheet.create({
  backgroundContent: {
    width: '100%',
    height: metrics.screenHeight * 0.46,
    alignItems: 'center',
    paddingTop: metrics.statusBarHeight + 80,
  },
});

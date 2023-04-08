import { Box, Text } from 'native-base';
import React from 'react';
import { IViewProps } from './types';
import { StyleSheet } from 'react-native';

const TipCommunitySelectedView: React.FC<IViewProps> = ({ name }) => (
  <Box
    w={'48'}
    position={'absolute'}
    top={40}
    left={-87}
    zIndex={999}
    style={styles.tip}
    alignItems={'center'}>
    <Box backgroundColor={'#7C44FF'} py={0.5} px={4} borderRadius={'full'}>
      <Text fontSize={8} color="#fff" fontWeight={'bold'} numberOfLines={1}>
        {name}
      </Text>
    </Box>
  </Box>
);
export default TipCommunitySelectedView;

const styles = StyleSheet.create({
  tip: {
    transform: [{ rotate: '-90deg' }],
  },
});

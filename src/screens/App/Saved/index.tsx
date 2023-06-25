import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { Box, Text, VStack } from 'native-base';
import React from 'react';

const Saved: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToExtraPage = () => {
    navigation.navigate('ExtraPage');
  };
  return (
    <VStack
      flex={1}
      bgColor="#FBFBFB"
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box px="4">
        <Text
          fontFamily="poppins"
          fontWeight="medium"
          fontSize={16}
          textAlign="center"
          color={'#000'}
        >
          Access my extra page created by seventh{'\n'} step challenge API TMDB
        </Text>
        <Box mt="6" alignItems="center">
          <Button
            title="Go to API challenge"
            onPress={handleNavigateToExtraPage}
          />
        </Box>
      </Box>
    </VStack>
  );
};

export default Saved;

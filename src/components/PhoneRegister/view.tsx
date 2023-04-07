import React from 'react';
import { Box, HStack, Input, Pressable, VStack } from 'native-base';
import { IViewProps } from './types';

import BrazilFlagSVG from '@assets/svg/brazil-flag.svg';
import { StyleSheet } from 'react-native';
import { CountrySelect } from './_components/CountrySelect';

const PhoneRegisterView: React.FC<IViewProps> = ({
  showCountrySearch,
  handleSelectCountry,
  handleToogleShowCountrySearch,
}) => (
  <VStack w="full" bgColor="#fff">
    {showCountrySearch && <CountrySelect handleSelect={handleSelectCountry} />}
    <HStack>
      <Pressable
        bgColor={'#DADADA'}
        alignItems={'center'}
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4}
        justifyContent={'center'}
        onPress={handleToogleShowCountrySearch}
        style={styles.boxButtonCountry}>
        <BrazilFlagSVG width={20} height={20} />
      </Pressable>
      <Box
        flex={1}
        borderLeftWidth={0}
        borderWidth={2}
        borderTopRightRadius={4}
        borderBottomRightRadius={4}
        borderColor={'#DADADA'}>
        <Input
          placeholder="+55 (_ _) _ _ _ _ _ - _ _ _ _ _ "
          borderWidth={0}
          flex={1}
          fontSize={16}
          paddingLeft={6}
          bgColor={'#fff'}
          placeholderTextColor="#A2A2A2"
        />
      </Box>
    </HStack>
  </VStack>
);
export default PhoneRegisterView;

const styles = StyleSheet.create({
  boxButtonCountry: {
    width: 55,
    height: 55,
  },
  container: {
    width: '100%',
  },
});

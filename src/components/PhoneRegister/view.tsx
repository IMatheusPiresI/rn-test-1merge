import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { IViewProps } from './types';

import BrazilFlagSVG from '@assets/svg/brazil-flag.svg';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { CountrySelect } from './_components/CountrySelect';
import MaskInput, { Masks } from 'react-native-mask-input';

const PhoneRegisterView: React.FC<IViewProps> = ({
  showCountrySearch,
  phone,
  setPhone,
  handleSelectCountry,
  handleToogleShowCountrySearch,
}) => (
  <VStack w="full" bgColor="#fff">
    {showCountrySearch && <CountrySelect handleSelect={handleSelectCountry} />}
    <HStack>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleToogleShowCountrySearch}
        style={styles.boxButtonCountry}>
        <BrazilFlagSVG width={20} height={20} />
      </TouchableOpacity>
      <Box
        flex={1}
        borderLeftWidth={0}
        borderWidth={2}
        borderTopRightRadius={4}
        borderBottomRightRadius={4}
        justifyContent={'center'}
        borderColor={'#DADADA'}>
        <Box position={'absolute'} zIndex={99} left="4">
          <Text color="#A2A2A2" fontSize={16}>
            +55
          </Text>
        </Box>
        <MaskInput
          placeholder="(_ _) _ _ _ _ _ - _ _ _ _ _ "
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor="#A2A2A2"
          mask={Masks.BRL_PHONE}
          style={styles.inputMask}
          keyboardType="numeric"
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
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  container: {
    width: '100%',
  },
  inputMask: {
    borderWidth: 0,
    flex: 1,
    paddingLeft: 52,
    fontSize: 16,
    color: '#000',
  },
});

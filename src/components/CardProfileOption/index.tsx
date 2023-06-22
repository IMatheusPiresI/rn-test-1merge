import { IconBase } from '@components/IconBase';
import { HStack, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type IProps = {
  title: string;
};

export const CardProfileOption: React.FC<IProps> = ({ title }) => (
  <TouchableOpacity activeOpacity={0.7} style={styles.shadowButton}>
    <HStack
      w="full"
      justifyContent={'space-between'}
      alignItems="center"
      px="7"
      py="3">
      <Text fontSize={18} fontWeight="bold" fontFamily="poppins">
        {title}
      </Text>
      <IconBase name="chevron-right" size={28} />
    </HStack>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  shadowButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

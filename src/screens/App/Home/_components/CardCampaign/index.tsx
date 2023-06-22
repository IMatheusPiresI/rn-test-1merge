import { Box, HStack, Image, Text, VStack } from 'native-base';
import React from 'react';

import CompaignsPhotoPNG from '@assets/images/compaignsPhoto.png';

export const CardCampaign: React.FC = () => (
  <VStack
    borderWidth={1}
    borderColor="#ECF0F5"
    backgroundColor={'#ffffff'}
    borderRadius={16}
    p="5"
    width="screenWidth75">
    <Image
      source={CompaignsPhotoPNG}
      w="full"
      h="108px"
      alt="compaigns photo"
    />
    <HStack justifyContent="space-between" mt="2">
      <Text
        fontFamily="poppins"
        fontWeight="medium"
        fontSize={14}
        color="#000"
        numberOfLines={1}>
        Help sarah to defet ...
      </Text>
      <Box
        borderWidth={1}
        borderColor="#3EB489"
        px="4"
        py="2px"
        borderRadius={6}>
        <Text
          fontFamily="poppins"
          fontWeight="medium"
          fontSize={12}
          color="#3EB489"
          numberOfLines={1}>
          Medical
        </Text>
      </Box>
    </HStack>
    <Text
      fontFamily="poppins"
      fontWeight="regular"
      fontSize={14}
      lineHeight={24}
      color="#696969"
      mt="2"
      numberOfLines={2}>
      Lorem ipsum dolor sit amet,adipisci consectetur adipisci ipsum dolor Lorem
      ipsum dolor sit amet,adipisci consectetur adipisci ipsum dolor
    </Text>
    <Box
      w="full"
      h="2"
      bgColor={'rgba(62, 180, 137, .3)'}
      overflow="hidden"
      mt="4">
      <Box w="45%" h="2" bgColor={'#3EB489'} borderRightRadius="full" />
    </Box>
    <HStack justifyContent={'space-between'}>
      <Text
        fontFamily="poppins"
        fontWeight="regular"
        fontSize={16}
        lineHeight={24}
        mt="1"
        color="#3EB489">
        Raised:$6000
      </Text>
      <Text
        fontFamily="poppins"
        fontWeight="regular"
        fontSize={14}
        lineHeight={24}
        mt="1"
        color="#3EB489">
        45%
      </Text>
    </HStack>
  </VStack>
);

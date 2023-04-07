import React from 'react';
import { Box, FlatList, HStack, Image, Text, VStack } from 'native-base';
import { IViewProps } from './types';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardDismiss } from '@components/KeyboardDismiss';

const ChatView: React.FC<IViewProps> = ({ chat }) => (
  <KeyboardDismiss>
    <VStack flex={1} bgColor="#F7F7F7">
      <HStack
        pt="statusBarHeight8"
        pb="4"
        bgColor={'#fff'}
        px="6"
        alignItems={'center'}>
        <TouchableOpacity>
          <MaterialIcons name="west" size={24} color="#000" />
        </TouchableOpacity>
        <HStack alignItems={'center'} ml="4" flex={1}>
          <Image
            source={chat.photoContact}
            alt="contact photo"
            w={10}
            h={10}
            borderRadius={'full'}
          />
          <Box justifyContent={'center'}>
            <Text
              ml={2}
              fontWeight={'bold'}
              fontSize={14}
              color="#000"
              lineHeight={18}>
              {chat.nameContact}
            </Text>
            <Text
              ml={2}
              fontSize={12}
              color={chat.online ? '#36C287' : '#A09F9F'}>
              {chat.online ? 'online' : 'offline'}
            </Text>
          </Box>
        </HStack>
        <HStack space={4}>
          <TouchableOpacity>
            <MaterialIcons name="videocam" size={28} color="#A09F9F" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="call" size={28} color="#A09F9F" />
          </TouchableOpacity>
        </HStack>
      </HStack>
      <VStack flex={1}>
        <FlatList
          data={['1', '2', '3', '4', '5', '6', '7', '8']}
          keyExtractor={(item) => item}
          renderItem={() => <></>}
        />
      </VStack>
      <HStack
        w="full"
        h="20"
        bgColor={'#fff'}
        px="10"
        py="4"
        alignItems={'center'}>
        <TextInput placeholder="Type here..." style={styles.inputChat} />
        <HStack space={'2'} ml="2">
          <TouchableOpacity>
            <MaterialIcons name="attach-file" size={28} color="#A09F9F" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="photo-camera" size={28} color="#A09F9F" />
          </TouchableOpacity>
        </HStack>
      </HStack>
    </VStack>
  </KeyboardDismiss>
);

export default ChatView;

const styles = StyleSheet.create({
  inputChat: {
    flex: 1,
    backgroundColor: '#fff',
    borderRightColor: '#D7D7D7',
    borderRightWidth: 1,
    height: 40,
    borderRadius: 0,
    fontSize: 16,
  },
});

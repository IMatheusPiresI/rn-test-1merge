import { IChat } from '@screens/App/AllChats/types';
import { TouchableOpacityProps } from 'react-native';

type IProps = {
  data: IChat;
} & TouchableOpacityProps;

type IViewProps = {
  data: IChat;
  lastMessage: {
    idUser: string;
    text: string;
    time: string;
    imageUrl: string;
  };
} & TouchableOpacityProps;

export { IProps, IViewProps };

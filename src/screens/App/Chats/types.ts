import { ImageSourcePropType } from 'react-native';

type IChat = {
  id: string;
  nameContact: string;
  photoContact: ImageSourcePropType;
  online: boolean;
  newMessages: number;
  messages: {
    idUser: string;
    text: string;
    time: string;
    imageUrl: string;
  }[];
};

type IViewProps = {
  chats: IChat[];
};

export { IViewProps, IChat };

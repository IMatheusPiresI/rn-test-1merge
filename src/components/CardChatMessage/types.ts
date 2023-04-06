import { IChat } from '@screens/App/Chats/types';

type IProps = {
  data: IChat;
};

type IViewProps = {
  data: IChat;
  lastMessage: {
    idUser: string;
    text: string;
    time: string;
    imageUrl: string;
  };
};

export { IProps, IViewProps };

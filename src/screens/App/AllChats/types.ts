type IChat = {
  id: string;
  nameContact: string;
  photoContact: string;
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
  handleOpenChat: (chat: IChat) => void;
};

export { IViewProps, IChat };

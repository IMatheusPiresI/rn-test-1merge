type IProps = {
  message: {
    idUser: string;
    text: string;
    time: string;
    imageUrl: string;
  };
};

type IViewProps = {
  message: {
    idUser: string;
    text: string;
    time: string;
    imageUrl: string;
  };
  isCurrentUserMessage: boolean;
};

export { IProps, IViewProps };

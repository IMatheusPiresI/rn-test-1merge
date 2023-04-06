type IProps = {};

type IStory = {
  id: string;
  idUser: string;
  photo: string;
  name: string;
};

type IViewProps = {
  storyList: IStory[];
};

export { IProps, IViewProps, IStory };

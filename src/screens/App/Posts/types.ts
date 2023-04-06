type IPost = {
  id: string;
  idCommunity: string;
  name: string;
  photo: string;
  text: string;
  image: string | null;
};

type IViewProps = {
  communityPosts: IPost[];
};

export { IViewProps, IPost };

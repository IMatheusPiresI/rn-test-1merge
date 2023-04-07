import { IStory } from '../types';

type IProps = {
  story: IStory;
};

type IViewProps = {
  firstName: string;
  secondName: string;
  imageUrl: string;
  isCurrentUser: boolean;
};

export { IProps, IViewProps };

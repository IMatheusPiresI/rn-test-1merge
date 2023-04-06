import { TouchableOpacityProps } from 'react-native';

type IProps = {
  data: {
    id: string;
    title: string;
    chats: number;
  };
} & TouchableOpacityProps;
type IViewProps = {
  data: {
    id: string;
    title: string;
    chats: number;
  };
} & TouchableOpacityProps;

export { IProps, IViewProps };

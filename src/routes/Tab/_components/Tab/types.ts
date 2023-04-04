import { TouchableOpacityProps } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type IProps = {
  routeName: string;
  isFocused: boolean;
} & TouchableOpacityProps;

type IViewProps = {
  iconName: IMaterialIconsType;
  isFocused: boolean;
} & TouchableOpacityProps;

type IMaterialIconsType = keyof typeof MaterialIcons.glyphMap;

type IIconsNames = {
  Community: IMaterialIconsType;
  Chats: IMaterialIconsType;
  Posts: IMaterialIconsType;
  Settings: IMaterialIconsType;
};

export { IProps, IViewProps, IMaterialIconsType, IIconsNames };

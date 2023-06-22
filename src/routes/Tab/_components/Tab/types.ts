import { TouchableOpacityProps } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type IProps = {
  routeName: string;
  isFocused: boolean;
} & TouchableOpacityProps;

type IViewProps = {
  iconName: IMaterialIconsType;
  isFocused: boolean;
  routeName: string;
} & TouchableOpacityProps;

type IMaterialIconsType = keyof typeof MaterialIcons.glyphMap;

type IIconsNames = {
  Home: IMaterialIconsType;
  Saved: IMaterialIconsType;
  Settings: IMaterialIconsType;
  Profile: IMaterialIconsType;
};

export { IProps, IViewProps, IMaterialIconsType, IIconsNames };

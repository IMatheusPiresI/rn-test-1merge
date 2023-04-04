import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

type IProps = {
  children: ReactNode;
} & TouchableOpacityProps;

export { IProps };

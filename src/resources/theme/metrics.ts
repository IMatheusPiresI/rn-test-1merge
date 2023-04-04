import { Dimensions, Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
const { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios';

export default {
  screenWidth: width,
  screenHeight: height,
  bottomSṕace: isIos ? getBottomSpace() : 0,
  statusBarHeight: getStatusBarHeight(),
  statusBarHeight8: getStatusBarHeight() + 8,
  statusBarHeight12: getStatusBarHeight() + 12,
  statusBarHeight16: getStatusBarHeight() + 16,
  statusBarHeight20: getStatusBarHeight() + 20,
};

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
  bottomSpace: isIos ? getBottomSpace() : 0,
  bottomSpace8: isIos ? getBottomSpace() : 8,
  bottomSpace16: isIos ? getBottomSpace() : 16,
  statusBarHeight: getStatusBarHeight(),
  statusBarHeight8: getStatusBarHeight() + 8,
  statusBarHeight12: getStatusBarHeight() + 12,
  statusBarHeight16: getStatusBarHeight() + 16,
  statusBarHeight20: getStatusBarHeight() + 20,
};

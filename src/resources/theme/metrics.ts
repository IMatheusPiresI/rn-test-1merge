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
  screenHeight40: height * 0.4,
  screenHeight45: height * 0.45,
  bottomSpace: isIos ? getBottomSpace() : 0,
  bottomSpace8: isIos ? getBottomSpace() : 8,
  bottomSpace16: isIos ? getBottomSpace() : 16,
  statusBarHeight: getStatusBarHeight(),
  statusBarHeight8: getStatusBarHeight() + 8,
  statusBarHeight12: getStatusBarHeight() + 12,
  statusBarHeight16: getStatusBarHeight() + 16,
  statusBarHeight20: getStatusBarHeight() + 20,
  iosSpace: isIos ? 2 : 0,
  iosSpace4: isIos ? 4 : 0,
  iosSpace6: isIos ? 6 : 0,
  iosSpace8: isIos ? 8 : 0,
  iosSpace12: isIos ? 12 : 0,
  iosSpace16: isIos ? 16 : 0,
  iosSpace24: isIos ? 24 : 0,
};

import { Dimensions, Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
const { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios';

export default {
  screenWidth: width,
  screenWidth75: width * 0.75,
  screenWidth60: width * 0.6,
  screenWidth50: width * 0.5,
  screenWidth30: width * 0.3,
  screenHeight: height,
  screenHeight20: height * 0.2,
  screenHeight25: height * 0.25,
  screenHeight30: height * 0.3,
  screenHeight35: height * 0.35,
  screenHeight40: height * 0.4,
  screenHeight45: height * 0.45,
  screenHeight60: height * 0.6,
  screenHeight65: height * 0.65,
  screenHeight70: height * 0.7,
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

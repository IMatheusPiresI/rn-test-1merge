import { Dimensions, Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
const { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios';

export default {
  screenWidth: width,
  screenWidth90: width * 0.9,
  screenWidth80: width * 0.8,
  screenWidth70: width * 0.7,
  screenWidth60: width * 0.6,
  screenWidth50: width * 0.5,
  screenHeight: height,
  screenHeight90: height * 0.9,
  screenHeight80: height * 0.8,
  screenHeight70: height * 0.7,
  screenHeight60: height * 0.6,
  screenHeight50: height * 0.5,
  bottomSpace: isIos ? getBottomSpace() : 0,
  bottomSpace8: isIos ? getBottomSpace() : 8,
  bottomSpace16: isIos ? getBottomSpace() : 16,
  statusBarHeight: getStatusBarHeight(),
  statusBarHeight8: getStatusBarHeight() + 8,
  statusBarHeight12: getStatusBarHeight() + 12,
  statusBarHeight16: getStatusBarHeight() + 16,
  statusBarHeight20: getStatusBarHeight() + 20,
};

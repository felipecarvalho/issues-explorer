import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  headerSize: 56,
  baseXPadding: 10,
  baseYPadding: 8,
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 5,
  cardPadding: 15,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

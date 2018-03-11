import { AppRegistry, YellowBox } from 'react-native';
import App from './src';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
  'Possible Unhandled Promise Rejection',
  'Class RCTCxxModule was not exported',
]);

AppRegistry.registerComponent('desafio2', () => App);

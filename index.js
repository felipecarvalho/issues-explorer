import { AppRegistry, YellowBox } from 'react-native';
import App from './src';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
  'Possible Unhandled Promise Rejection',
]);

AppRegistry.registerComponent('desafio2', () => App);

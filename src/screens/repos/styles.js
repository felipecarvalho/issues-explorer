import { StyleSheet } from 'react-native';
import { Metrics, Colors } from 'styles';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  spinner: {
    paddingVertical: Metrics.basePadding * 2,
  },
  icon: {
    color: Colors.regular,
    alignSelf: 'center',
  },
  text: {
    color: Colors.dark,
    alignSelf: 'center',
    textAlign: 'center',
    padding: Metrics.baseXPadding,
  },
});

export default Styles;

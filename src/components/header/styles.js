import { StyleSheet } from 'react-native';
import { Colors, Metrics } from 'styles';

const Styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Metrics.baseMargin * 3,
    paddingBottom: Metrics.baseMargin + 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  input: {
    backgroundColor: Colors.lighter,
    borderRadius: Metrics.baseRadius,
    paddingVertical: Metrics.baseYPadding,
    paddingHorizontal: Metrics.baseXPadding,
    color: Colors.darker,
    fontSize: 11,
    width: '82%',
  },
  button: {
    paddingVertical: Metrics.baseYPadding,
    paddingLeft: 15,
  },
  spinner: {
    position: 'absolute',
    top: (Metrics.basePadding * 2) + 6,
    right: Metrics.basePadding * 2,
    marginRight: Metrics.baseRadius * 5,
  },
  icon: {
    color: Colors.darker,
  },
});

export default Styles;

import { StyleSheet } from 'react-native';
import { Colors, Shared } from 'styles';

const Styles = StyleSheet.create({
  container: {
    ...Shared.card,
  },
  avatar: {
    ...Shared.avatar,
  },
  texts: {
    width: '75%',
  },
  title: {
    color: Colors.darker,
    fontWeight: 'bold',
    fontSize: 15,
  },
  user: {
    color: Colors.regular,
    fontSize: 12,
  },
  arrow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    fontSize: 20,
    color: Colors.light,
  },
});

export default Styles;

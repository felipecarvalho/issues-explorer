import Colors from './colors';
import Metrics from './metrics';

export default {
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.basePadding,
    marginBottom: -10,
    marginHorizontal: Metrics.basePadding,
    backgroundColor: Colors.white,
    borderRadius: Metrics.baseRadius,
    padding: Metrics.cardPadding,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: Metrics.baseXPadding,
  },
};

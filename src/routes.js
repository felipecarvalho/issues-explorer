import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';

import Repos from 'screens/repos';
import AllIssues from 'screens/all-issues';
import ClosedIssues from 'screens/closed-issues';
import OpenedIssues from 'screens/opened-issues';

import { Metrics, Colors } from 'styles';

const Routes = StackNavigator(
  {
    Repos: { screen: Repos },
    Tabs: {
      screen: TabNavigator({
        AllIssues: { screen: AllIssues },
        ClosedIssues: { screen: ClosedIssues },
        OpenedIssues: { screen: OpenedIssues },
      }, {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        tabBarOptions: {
          style: {
            backgroundColor: Colors.light,
            marginTop: Metrics.basePadding,
            marginBottom: Metrics.basePadding,
            marginHorizontal: Metrics.basePadding,
            height: 30,
            borderRadius: 5,
          },
          labelStyle: {
            padding: 0,
            margin: 0,
            fontSize: 12,
          },
          indicatorStyle: {
            display: 'none',
          },
          upperCaseLabel: false,
          activeTintColor: Colors.dark,
          inactiveTintColor: Colors.darkGrey,
        },
      }),
    },
  },
  {
    initialRouteName: 'Repos',
    navigationOptions: {
      headerStyle: {
        height: Metrics.headerSize,
        borderBottomColor: 'transparent',
      },
      headerTintColor: Colors.darker,
    },
  },
);

export default Routes;

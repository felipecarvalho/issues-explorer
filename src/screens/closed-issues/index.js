import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../components/card';
import GitHubAPI from '../../services/api';
import Styles from '../all-issues/styles';

export default class ClosedIssues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;

    return {
      title: state.params.repoTitle,
      tabBarLabel: 'Closed',
    };
  }

  state = {
    data: [],
    loading: false,
    refreshing: false,
  }

  componentDidMount() {
    this.getIssues();
  }

  getIssues = async () => {
    const { state } = this.props.navigation;
    const repository = state.params.repoFullName;

    this.setState({ loading: true, refreshing: false });
    await GitHubAPI.get(`/repos/${repository}/issues?state=closed`)
      .then((result) => {
        if (result.data.length !== null) {
          this.setState({
            data: result.data.reverse(),
            loading: false,
            refreshing: false,
          });
        } else {
          this.setState({ loading: false, refreshing: false });
        }
      });
  };

  renderListItem = ({ item }) => (
    <TouchableOpacity onPress={
      () => {
        Linking.openURL(item.html_url);
      }}
    >
      <Card item={item} />
    </TouchableOpacity>
  );

  renderList = () => (
    this.state.data.length !== 0
      ? <FlatList
        data={this.state.data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.getIssues}
        refreshing={this.state.refreshing}
      />
      :
      <View>
        <Icon name="github" size={64} style={Styles.icon} />
        <Text style={Styles.text}>No issues</Text>
      </View>
  );

  render() {
    return (
      <View style={Styles.container}>
        {
          this.state.loading
          ? <ActivityIndicator size={1} style={Styles.spinner} />
          : this.renderList()
        }
      </View>
    );
  }
}

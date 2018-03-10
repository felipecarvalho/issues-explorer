import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  AsyncStorage,
  FlatList,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/header';
import Card from '../../components/card';
import GitHubAPI from '../../services/api';
import Styles from './styles';

export default class Repos extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = ({ navigation }) => ({
    header: <Header {...navigation.state.params} />,
  });

  state = {
    repository: '',
    repo_full_name: '',
    title: '',
    data: [],
    loading: false,
  }

  componentDidMount() {
    // AsyncStorage.clear();

    this.props.navigation.setParams({
      inputValue: this.state.repository,
      inputChange: repository => this.setState({ repository }),
      searchRepo: this.searchRepo,
      loading: false,
    });

    this.verifyStorage();
  }

  verifyStorage = async () => {
    const { repos } = await AsyncStorage.getItem('@Github:Repos');
    if (repos !== null) {
      this.setState({ loading: true });
      await AsyncStorage.getItem('@Github:Repos', (errs, result) => {
        const data = JSON.parse(result);
        this.setState({ data, loading: false });
      });
    }
  };

  checkRepoExists = async (repository) => {
    const repo = await GitHubAPI.get(`/repos/${repository}`);
    const infoRepo = {
      id: Math.floor(Math.random() * 9999) + 1,
      avatar_url: repo.data.owner.avatar_url,
      full_name: repo.data.full_name,
      name: repo.data.name,
      login: repo.data.owner.login,
    };

    this.setState({
      title: infoRepo.name,
      repo_full_name: infoRepo.full_name,
      data: [...this.state.data, infoRepo].reverse(),
    });

    return repo;
  }

  searchRepo = async () => {
    const { repository } = this.state;

    if (repository.length === 0) {
      Alert.alert('Warning', 'To proceed is necessary fill the input');
      return;
    }

    await this.props.navigation.setParams({
      loading: true,
    });

    try {
      await this.checkRepoExists(repository);

      await AsyncStorage.setItem('@Github:Repos', JSON.stringify(this.state.data));

      await this.props.navigation.setParams({
        loading: false,
      });

      this.props.navigation.navigate('Tabs', {
        repoTitle: this.state.title,
        repoFullName: this.state.repo_full_name,
      });

      this.setState({ repository: null });
    } catch (err) {
      await this.props.navigation.setParams({
        loading: false,
      });

      Alert.alert('Error', err.message);
    }
  };

  renderListItem = ({ item }) => (
    <TouchableOpacity onPress={
      () => {
        this.props.navigation.navigate('Tabs', {
          repoTitle: item.name,
          repoFullName: item.full_name,
        });
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
      />
      :
      <View>
        <Icon name="github" size={64} style={Styles.icon} />
        <Text style={Styles.text}>No repositories</Text>
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

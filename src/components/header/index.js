import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './styles';
import { Colors } from '../../styles';

const Header = ({
  inputValue,
  inputChange,
  searchRepo,
  loading,
}) => (
  <View style={Styles.headerContainer}>
    <TextInput
      style={Styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Add repository (Example: facebook/react)"
      placeholderTextColor={Colors.dark}
      underlineColorAndroid={Colors.darker}
      value={inputValue}
      onChangeText={inputChange}
    />
    <TouchableOpacity style={Styles.button} onPress={searchRepo}>
      <Icon name="plus" size={16} style={Styles.icon} />
    </TouchableOpacity>
    { loading
      ? <ActivityIndicator size={1} style={Styles.spinner} />
      : null }
  </View>
);

Header.defaultProps = {
  inputValue: '',
  inputChange: null,
  searchRepo: null,
  loading: false,
};

Header.propTypes = {
  inputValue: PropTypes.string,
  inputChange: PropTypes.func,
  searchRepo: PropTypes.func,
  loading: PropTypes.bool,
};

export default Header;

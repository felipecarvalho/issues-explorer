import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import Styles from './styles';

const Card = ({ item }) => (
  <View style={Styles.container}>
    <Image
      style={Styles.avatar}
      source={
        item.avatar_url === undefined
        ? { uri: item.user.avatar_url }
        : { uri: item.avatar_url }
      }
    />
    <View style={Styles.texts}>
      <Text style={Styles.title} numberOfLines={1} ellipsizeMode="tail" >
        { item.name === undefined
          ? item.title
          : item.name
        }
      </Text>
      <Text style={Styles.user}>
        { item.login === undefined
            ? item.user.login
            : item.login
        }
      </Text>
    </View>
    <View style={Styles.arrow}>
      <Icon name="angle-right" size={16} style={Styles.icon} />
    </View>
  </View>
);

Card.propTypes = {
  item: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default Card;

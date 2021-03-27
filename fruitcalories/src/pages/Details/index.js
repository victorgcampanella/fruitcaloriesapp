import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Details = ({route, navigation}) => {
  const { item } = route.params;
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
}

export default Details;
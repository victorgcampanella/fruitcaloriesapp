/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Details = ({route}) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containercard}>
        <Image style={styles.image} source={{
          uri: item.photo
        }}/>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.containerinfos}> 
          <Text style={styles.infos}>Calorias : {item.calories}</Text>
          <Text style={styles.infos}>Proteína : {item.protein}</Text>
          <Text style={styles.infos}>Carboidratos : {item.carbohydrates}</Text>
          <Text style={styles.infos}>Fibra : {item.fiber}</Text>
          <Text style={styles.infos}>Gordura : {item.blubber}</Text>
          <Text style={styles.infos}>Porção : {item.portion}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#40D1D1'
  },
  containercard: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#B5CBCB',
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 300, 
  },
  name: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 36,
  },
  containerinfos: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
  },
  infos: {
    fontSize: 16,
  }
})

export default Details;
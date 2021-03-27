/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import api from '../../services/api';
 import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
   View,
   FlatList,
   Image,
   TouchableOpacity
 } from 'react-native';
 
 const Main = ({navigation}) => {
   const [fruits, setFruits] = useState([]);

   const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detalhes', {
      item
    })}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.containerInfos}> 
        <Text style={styles.infos}>Calorias : {item.calories}</Text>
        <Text style={styles.infos}>Proteína : {item.protein}</Text>
        <Text style={styles.infos}>Carboidratos : {item.carbohydrates}</Text>
        <Text style={styles.infos}>Fibra : {item.fiber}</Text>
        <Text style={styles.infos}>Gordura : {item.blubber}</Text>
        <Text style={styles.infos}>Porção : {item.portion}</Text>
      </View>
      <Image style={styles.tinyLogo} source={{
        uri: item.photo
      }}/>
    </TouchableOpacity>
   );

   useEffect(() => {
     api.get().then(response => {
       console.log(response.data);
       setFruits(response.data)
     })
   }, [])
 
   return (
     <>
      <StatusBar barStyle="light-content" backgroundColor="#7FEBEA"/>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={fruits}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: '#40D1D1'
   },
   item: {
    backgroundColor: "#B5CBCB",
    padding: 20,
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 20,
   },
   containerInfos: {
     marginTop: 10,
   },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infos : {
    marginTop: 10,
    fontSize: 14,
  },
  tinyLogo: {
    width: 150,
    height: 150,  
    margin: 50,
    position: "absolute",
    right: 0
  },
 });
 
 export default Main;
 
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootStackPrams';


type countryScreenProp = StackNavigationProp<RootStackParamList, 'Country'>;

export default function Country({ route }: { route: any }) {
  const navigation = useNavigation<countryScreenProp>();

  const getWeather = async () => {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude='+route.params.data.capitalInfo.latlng[0]+'&longitude='+route.params.data.capitalInfo.latlng[1]+'&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
    );
    const data = await res.json();
    console.log(data,"data")
    navigation.navigate('Weather', { data: data });
  };

  return (
    <View>
      <Text style={styles.mainHeading}>Country Details</Text>
      <View style={styles.mainContainer}>
        <Image
          source={{ uri: route.params.data.flags.png }}
          style={{
            width: 180,
            height: 170,
            marginTop: 40,
            marginBottom: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <Text style={styles.details}>
          Captial : {route.params.data.capital}
        </Text>
        <Text style={styles.details}>
          Population : {route.params.data.population}
        </Text>
        <Text style={styles.details}>
          Latitude : {route.params.data.latlng[0]} deg
        </Text>
        <Text style={styles.details}>
          Longitude : {route.params.data.latlng[1]} deg
        </Text>
        <Button title="Captial Weather" color="#6200ee" onPress={getWeather} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
  },
  mainHeading: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    fontSize: 15,
    margin: 8,
    padding: 8,
  },
});

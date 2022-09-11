import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Weather({ route }: { route: any }) {
 
  return (
    <View>
      <Text style={styles.mainHeading}>Weather Details</Text>
      <View style={styles.mainContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmdZ7LKOWvupMHS1gKpTnrlCC3b3EPgQoAQeSHQ2YaCeCXDr7KdL0UGRagu1AoFIZy90&usqp=CAU',
          }}
          style={{
            width: 180,
            height: 180,
            marginTop: 40,
            marginBottom: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <Text style={styles.details}>
          Temperature : {route.params.data.hourly.temperature_2m[0]}{' '}
        </Text>
        <Text style={styles.details}>
          Precipitation : {route.params.data.hourly.relativehumidity_2m[0]}
        </Text>
        <Text style={styles.details}>
          Wind Speed : {route.params.data.hourly.windspeed_10m[0]}{' '}
        </Text>
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

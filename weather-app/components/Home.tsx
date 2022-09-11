import {
  View,
  StyleSheet,
  Button,
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootStackPrams';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home(props: any) {
  const [country, setCountry] = useState('');
  const navigation = useNavigation<homeScreenProp>();

  const getCountry = async () => {
    const res = await fetch(
      'https://restcountries.com/v3.1/name/' + country + '?fullText=true'
    );
    const data = await res.json();
    console.log(data,"data")
    if (!data[0]) return;
    navigation.navigate('Country', { data: data[0] });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Enter Country"
        type="outlined"
        style={styles.input}
        value={country}
        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
          console.log(event.nativeEvent.text);
          setCountry(event.nativeEvent.text);
        }}
      />
      <Button
        title="Submit"
        disabled={!country}
        onPress={getCountry}
        color="#6200ee"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    height: 50,
    marginBottom: 20,
  },
});

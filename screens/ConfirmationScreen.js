// ConfirmationScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const ConfirmationScreen = ({ navigation }) => {

  const handleBackToHome = () => {
    // Navigate back to HomeScreen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Payment successful! Your dog walk is booked.</Text>
      <Button title="Book More Walks" onPress={handleBackToHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ConfirmationScreen;

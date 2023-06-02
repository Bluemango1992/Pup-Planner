import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PaymentScreen = ({ route, navigation }) => {
  const { slot } = route.params;

  const handleConfirmPayment = () => {
    // Your payment confirmation logic goes here

    // Once payment is confirmed, navigate to ConfirmationScreen
    navigation.navigate('ConfirmationScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>{`You are booking the slot from ${slot.start} to ${slot.end}`}</Text>
        <Text style={styles.text}>{`Duration: ${slot.duration} hour`}</Text>
        <Text style={styles.text}>{`Price: $${slot.price}`}</Text>
      </View>
      <Button title="Confirm and Pay" onPress={handleConfirmPayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f8f8',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PaymentScreen;

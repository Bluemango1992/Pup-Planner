import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

const UserInfo = ({ state, updateState, nextPage, prevPage }) => {
  return (
    <>
      <TextInput 
        placeholder="First Name"
        value={state.firstName}
        onChangeText={(text) => updateState('firstName', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={state.lastName}
        onChangeText={(text) => updateState('lastName', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={state.email}
        onChangeText={(text) => updateState('email', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={state.password}
        onChangeText={(text) => updateState('password', text)}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Next" onPress={nextPage} size={"100"} type="tiertary" />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 20,
  },
});

export default UserInfo;

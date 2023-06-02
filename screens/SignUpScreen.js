import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, ScrollView, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Button from '../components/Button';
import { auth, db } from '../firebaseConfig';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  address: yup.string().required(),
  dogBreed: yup.string().required(),
  dogTemperament: yup.string().required(),
  dogHealthHistory: yup.string().required(),
  dogTrainingLevel: yup.string().required(),
});

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [dogBreed, setDogBreed] = useState('');
    const [dogTemperament, setDogTemperament] = useState(1);
    const [dogHealthHistory, setDogHealthHistory] = useState(1);
    const [dogTrainingLevel, setDogTrainingLevel] = useState(1);

  const buttons = ['1', '2', '3', '4', '5'];

  const handleSignUp = () => {
    schema.validate({ email, password, firstName, lastName, address, dogBreed, dogTemperament, dogHealthHistory, dogTrainingLevel })
      .then(() => {
        auth.createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
  
            db.collection('users').doc(user.uid).set({
              firstName,
              lastName,
              address,
              dogBreed,
              dogTemperament,
              dogHealthHistory,
              dogTrainingLevel,
            });
            
            // navigate to Home screen after successful sign-up
            navigation.navigate('Home');
          })
          .catch(error => alert(error.message));
      })
      .catch(error => {
        alert(error.errors[0]);
      });
  };

  return (
    <ScrollView>
        <View style={styles.container}>
      <TextInput placeholder="First Name" value={firstName} onChangeText={(text) => setFirstName(text)} style={styles.input} />
      
      <TextInput placeholder="Last Name" value={lastName} onChangeText={(text) => setLastName(text)} style={styles.input} />
      
      <TextInput placeholder="Address" value={address} onChangeText={(text) => setAddress(text)} style={styles.input} />
      
      <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
      
     
      <View style={styles.inputcontainer}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Text>required, must be at least 6 characters</Text>
    </View>

      <TextInput placeholder="Dog Breed" value={dogBreed} onChangeText={(text) => setDogBreed(text)} style={styles.input} />

        <View style={styles.inputcontainer}>
        <Text>Dog Temperament:</Text>
      <ButtonGroup onPress={(selectedIndex) => setDogTemperament(selectedIndex + 1)} selectedIndex={dogTemperament - 1} buttons={buttons} containerStyle={{height: 40}} />

        <Text>Dogs Health</Text>
      <ButtonGroup onPress={(selectedIndex) => setDogHealthHistory(selectedIndex + 1)} selectedIndex={dogHealthHistory - 1} buttons={buttons} containerStyle={{height: 40}} />

        <Text>Dog Training Level:</Text>
      <ButtonGroup onPress={(selectedIndex) => setDogTrainingLevel(selectedIndex + 1)} selectedIndex={dogTrainingLevel - 1} buttons={buttons} containerStyle={{height: 40}} />
        </View>
      <Button title="Sign Up" onPress={handleSignUp} size={"100"} type="tiertary" />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    },
    inputcontainer: {
        width: '100%',
        alignItems: 'left',
        gap: 1,
    },


  input: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 20,
  },
});

export default SignUpScreen;

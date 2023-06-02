import React, { useEffect, useState } from 'react';
import {Text, StyleSheet, Button, ImageBackground, TouchableOpacity} from 'react-native';
import { auth, db } from '../firebaseConfig';
import '../theme/theme';

const HomeScreen = ({ navigation }) => {
  const [dogWalkers, setDogWalkers] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('dogWalkers').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDogWalkers(data);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigation.navigate('LoginScreen');
      })
      .catch((error) => {
        console.log('Logout error:', error);
      });
  };

  const handleViewProfile = (dogWalker) => {
    navigation.navigate('DogWalkerProfile', { dogWalker });
  };

  return (
    <ImageBackground source={require('../assets/happy-dogs.png')} resizeMode="fill" style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Logout" onPress={handleLogout} />
      {dogWalkers.map((dogWalker) => (
        <DogWalkerCard key={dogWalker.id} dogWalker={dogWalker} onViewProfile={handleViewProfile} />
      ))}
    </ImageBackground>
  );
};

export default HomeScreen;


const DogWalkerCard = ({ dogWalker, onViewProfile }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onViewProfile(dogWalker)}>
      <Text style={styles.text}>{dogWalker.name}</Text>
      <Text style={styles.text}>{dogWalker.rating}</Text> 
      <Button title="Contact" />
      <Button title="Phone" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import Button from '../components/Button';
import { auth } from '../firebaseConfig';
import '../theme/theme';
import * as yup from 'yup';


const LoginScreen = ({ navigation }) => {
        
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
        
            const handleSignUp = () => {
                navigation.navigate('SignUp');
            };
        
            const handleLogin = () => {
                auth.signInWithEmailAndPassword(email, password)
                    .then(userCredentials => {
                        const user = userCredentials.user;
                        console.log('Logged in with:', user.email);
                    })
                    .catch(error => alert(error.message))
                    .finally(() => navigation.navigate('Home'));
            };                 
            
            return (
                    <ImageBackground source={require('../assets/happy-dogs.png')} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
                    <View style={styles.paper}>
                        <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
                        <TextInput placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} style={styles.input} secureTextEntry />
                        <Button title="Login" onPress={handleLogin} type="secondary" />
                        <Button title="Sign Up" onPress={handleSignUp} type="tiertary" />
                    </View>
                    </ImageBackground>            
            );    
        
        }

        const styles = StyleSheet.create({
            paper: {
                padding: 24,
                margin: 10,
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 20,
            },
            input: {
                height: 50,
                width: 300,
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                marginBottom: 20,
            },
        });

export default LoginScreen;
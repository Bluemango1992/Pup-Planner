import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Button from '../components/Button';

const buttons = ['1', '2', '3', '4', '5'];

const DogInfo = ({ state, updateState, nextPage, prevPage }) => {
  return (
    <>
      <TextInput 
        placeholder="Dog Breed"
        value={state.dogBreed}
        onChangeText={(text) => updateState('dogBreed', text)}
        style={styles.input}
      />

      <Text>Dog Temperament:</Text>
      <ButtonGroup 
        onPress={(selectedIndex) => updateState('dogTemperament', selectedIndex + 1)}
        selectedIndex={state.dogTemperament - 1}
        buttons={buttons}
        containerStyle={{height: 40}}
      />

      <Text>Dog Health History:</Text>
      <ButtonGroup 
        onPress={(selectedIndex) => updateState('dogHealthHistory', selectedIndex + 1)}
        selectedIndex={state.dogHealthHistory - 1}
        buttons={buttons}
        containerStyle={{height: 40}}
      />

      <Text>Dog Training Level:</Text>
      <ButtonGroup 
        onPress={(selectedIndex) => updateState('dogTrainingLevel', selectedIndex + 1)}
        selectedIndex={state.dogTrainingLevel - 1}
        buttons={buttons}
        containerStyle={{height: 40}}
      />

      <Button title="Previous" onPress={prevPage} size={"100"} type="tiertary" />
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

export default DogInfo;

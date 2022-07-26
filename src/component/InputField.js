import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
var wHeight = Dimensions.get('window').height;
var wWidth = Dimensions.get('window').width;
const InputField = ({onChange}) => {
  const validate = text => {
    if (text.length > 1) {
      onChange('#5BB031');
    } else {
      onChange('#808285');
    }
  };
  return (
    <View>
      <Text style={styles.label}>{'Username'}</Text>
      <TextInput
        placeholder={'Your username'}
        onChangeText={text => validate(text)}
        autoCapitalize={false}
        style={styles.inputField}
        defaultValue=""></TextInput>
    </View>
  );
};
export default InputField;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: wHeight / (wHeight / 5),
  },
  inputField: {
    paddingLeft: wHeight / (wHeight / 12),
    fontSize: 14,
    height: wHeight / 18.45,
    width: wWidth / 1.15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 10,
  },
});

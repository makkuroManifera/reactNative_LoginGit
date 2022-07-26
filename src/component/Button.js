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
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const wHeight = Dimensions.get('window').height;
const wWidth = Dimensions.get('window').width;

// sua ten
const PButton = ({label, bColor}) => {
  let buttonColoring = function (bColor) {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bColor,
      marginTop: 10,
      height: wHeight / (wHeight / 40),
      width: wWidth / (wWidth / 175),
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 0.5,
      borderRadius: 10,
    };
  };
  return (
    <View>
      <TouchableOpacity style={buttonColoring(bColor)} title={label}>
        <Text style={{color: 'white'}}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PButton;

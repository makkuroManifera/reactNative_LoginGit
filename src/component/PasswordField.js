import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
var wHeight = Dimensions.get('window').height;
var wWidth = Dimensions.get('window').width;
const PasswordField = ({patternColor}) => {
  const [isVisibility, setVisibility] = useState(false);
  const [passwordState, setpasswordState] = useState('View');
  const [value, setValue] = useState('');
  const hiddPassword = () => {
    setVisibility(prevState => !prevState);
    setpasswordState(isVisibility ? 'View' : 'Hide');
  };
  let changeColor = (color, lenght) => {
    let space = 10;
    let fontSize = 30;
    if (isVisibility == true || lenght == 0) {
      space = 1;
      fontSize = 14;
    } else {
      space = 10;
      fontSize = 24;
    }
    if (color != '#808285') {
      color = 'black';
    }
    return {
      fontSize: fontSize,
      letterSpacing: space,
      color: color,
      paddingLeft: wHeight / (wHeight / 12),
      height: wHeight / 18.45,
      width: wWidth / 1.15,
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 0.5,
      borderRadius: 10,
    };
  };

  return (
    <View>
      <Text style={styles.label}>{'Password'}</Text>
      <TextInput
        placeholder={'Your password'}
        autoCapitalize={false}
        onChangeText={text => setValue(text)}
        secureTextEntry={isVisibility ? false : true}
        style={changeColor(patternColor, value.length)}
        defaultValue=""></TextInput>
      <TouchableOpacity onPress={hiddPassword} style={styles.showPassword}>
        <Text style={{fontSize: 12}}>{passwordState}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PasswordField;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: wHeight / (wHeight / 5),
  },

  inputField_password: {},
  showPassword: {
    position: 'absolute',
    top: 38,
    right: 10,
  },
});

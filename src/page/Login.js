import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import InputField from '../component/InputField';
import PButton from '../component/Button';
import PasswordField from '../component/PasswordField';
var wHeight = Dimensions.get('window').height;
var wWidth = Dimensions.get('window').width;

const Login = () => {
  const [patternColor, setPatternColor] = useState('#5bb031');
  return (
    <View style={styles.container}>
      <View style={styles.logoSpace}>
        <Image
          style={{height: wHeight / 8.6, width: wWidth / 1.38}}
          source={require('../../src/assets/image/Logo.png')}
        />
      </View>
      <View style={styles.userName}>
        <InputField
          onChange={setPatternColor}
          label={'Username'}
          isPassword={false}
        />
      </View>

      <View style={styles.passWord}>
        <PasswordField patternColor={patternColor} isPassword={true} />
        <TouchableOpacity>
          <Text style={styles.forgoText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <PButton bColor={patternColor} label={'Login'} />
      </View>
      <View style={styles.textSpace}>
        <Text style={{fontSize: 12, color: '#808285'}}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity>
          <Text
            style={
              patternColor == '#808285'
                ? {color: 'black'}
                : {color: patternColor}
            }>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: wHeight,
    width: wWidth,
    backgroundColor: '#FFFFFF',
  },
  logoSpace: {
    paddingTop: wHeight / 13,
  },
  userName: {
    marginTop: wHeight / 13.34,
  },
  passWord: {
    marginTop: wHeight / (wHeight / 35),
  },
  textSpace: {
    flexDirection: 'row',
    marginTop: wHeight / (wHeight / 37.5),
  },
  button: {
    marginTop: wHeight / (wHeight / 82),
  },
  forgoText: {
    marginTop: wHeight / (wHeight / 21),
    color: '#5bb031',
    fontSize: 14,
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import SigninScreen from './Screens/SigninScreen';
import MyStack from './Navigation/AppNavigator';

const App = () => {
  return (
    // <View>
    //   <Text>welcome!!!!!</Text>
    // </View>
    <MyStack />
  );
  }

const styles = StyleSheet.create({});

export default App;

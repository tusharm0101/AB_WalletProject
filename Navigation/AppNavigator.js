import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import SigninScreen from '../Screens/SigninScreen.js';
import SignupScreen from '../Screens/SignupScreen';
import ForgotScreen from '../Screens/ForgotScreen';

const Stack = createStackNavigator();

const MyStack = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name= "Sign In"
                    component={SigninScreen}                    
                />
                <Stack.Screen 
                    name= "Sign Up"
                    component={SignupScreen}                    
                />
                <Stack.Screen 
                    name= "Forgot Password"
                    component={ForgotScreen}                    
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
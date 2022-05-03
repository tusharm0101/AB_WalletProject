import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {Country} from '../Components/Country';

const SignupScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Sign Up Screen</Text>
            <Country />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SignupScreen;
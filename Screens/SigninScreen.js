import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SigninScreen = props => {
    return (
        <View style={styles.screen}>
            <View>
                <View>
                    <TextInput placeholder="Email Address" />
                </View>
                <View> 
                    <TextInput placeholder="Password" />
                </View>
                <View>
                    <Text onPress={() => {props.navigation.navigate("Forgot Password")}}>Forgot?</Text>
                </View>
            </View>
            <View>
                <Text onPress={() => {props.navigation.navigate('Sign Up')}}>Sign Up
                    <Text>Now</Text>
                </Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }, 
});

export default SigninScreen;
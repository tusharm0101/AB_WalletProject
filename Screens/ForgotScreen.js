import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ForgotScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Forgot Password Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    }
});

export default ForgotScreen;
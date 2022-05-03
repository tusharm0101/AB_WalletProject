import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, LinearGradient } from "react-native";

import * as Animatable from 'react-native-animatable';


const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = () => {

        var emailValid = false;
        // let Regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(email.length == 0) {
            setEmailError("Email is required");
        }
        else if(email.indexOf(" ") >= 0) {
            setEmailError("Email cannot contain spaces" );
        }
        else if(Regex.test === false) {
            setEmailError("Email is not correct");
        }
        else {
            setEmailError("")
            emailValid = true
        }

        var passwordValid = false;
        if(password.length < 5) {
            setPasswordError("Password should be minimum 5 characters");
        }
        else if(password.length == 0) {
            setPasswordError("Email is required");
        }
        else if(password.indexOf(" ") >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError("")
            passwordValid = true
        }

        if (emailValid && passwordValid) {
            alert('Email:' + email + '\nPassword:' + password);
            setEmail("");
            setpassword("");
        }
    }

    return (
        <View style={styles.loginContainer}>                                      
        <Animatable.View >
            <View style={styles.inputView}>
                <View>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="E-mail"
                        placeholderTextColor="white"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                    {emailError.length > 0 &&
                        <Text>{emailError}</Text>
                    }
            </View>
            <View style={styles.inputView}>
                <View>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(password) => setpassword(password)}
                    />
                </View>
                {passwordError.length > 0 &&
                    <Text>{passwordError}</Text>
                }
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Forgot Password");
                }}>
                    <Text>Fogot?</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Sign Up");
                }}>
                    <Text>Sign Up</Text>    
                </TouchableOpacity> 
            </View>
            <View>
                <TouchableOpacity
                    onPress={handleSubmit}>
                    <Text>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View >
    </View>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }, 
});

export default SigninScreen;
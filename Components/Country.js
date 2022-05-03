import React, { useState } from "react";
import { CountryPicker} from "react-native-country-codes-picker";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');

    return (
        <View>
            <TouchableOpacity onPress={() => setShow(true)}>
                <Text>{countryCode}</Text>
            </TouchableOpacity>
            <CountryPicker 
                show={show}
                pickerButtonOnPress={(item) => {
                    setCountryCode(item.dial_code);
                    setShow(false);
                }}
            />
        </View>
    );
}
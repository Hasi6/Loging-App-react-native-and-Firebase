import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = (props) => {
    const { inputStyles, labelStyles, containerStyles } = styles;
    return (
        <View style={containerStyles}>
            <Text style={labelStyles}>{props.label}</Text>
            <TextInput
            secureTextEntry={props.secureTextEntry}
            autoCorrect={false} 
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            style={inputStyles}
             />
        </View>
    );
}

const styles = {
    inputStyles: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyles: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        alignItems: 'center'
    },
    containerStyles: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export default Input;
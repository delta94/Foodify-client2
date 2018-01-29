import React from 'react'
import { LinearGradient } from 'expo'
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native'

const Login = ({
    login,
    changeState,
    navigation
}) => (
    <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

        <Text style={styles.title}>Foodify</Text>

        <Text style={styles.login}>Login</Text>

        <TextInput
            style={styles.input}
            onChangeText={text => changeState('email', text)}
            placeholder="Email"
            placeholderTextColor="lightgray"
            underlineColorAndroid='transparent'
        />

        <TextInput
            style={styles.input}
            onChangeText={text => changeState('password', text)}
            placeholder="Password"
            placeholderTextColor="lightgray"
            underlineColorAndroid='transparent'
        />

        <TouchableNativeFeedback onPress={ login }>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Login Now</Text>
            </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => navigation.navigate('Register')}>
            <View style={[styles.button, { marginTop: 150 }]}>
                <Text style={styles.buttonText}>Register</Text>
            </View>
        </TouchableNativeFeedback>

    </LinearGradient>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 48,
        fontFamily: 'montserratMedium',
        marginTop: 50,
        color: '#fff',
        textAlign: 'center',
    },
    login:{
        color: 'lightgray',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 100,
        fontFamily: 'montserratRegular',
    },
    input: {
        margin: 10,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.3)',
        fontFamily: 'montserratRegular',
        color: 'white',
        borderRadius: 3,
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.35)',
        padding: 15,
        margin: 10,
        borderRadius: 3,
    },
    buttonText: {
        textAlign: 'center',
        color: 'lightgray',
        fontSize: 18,
        fontFamily: 'montserratRegular',
    }
})

export default Login
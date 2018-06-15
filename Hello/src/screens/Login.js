import React, {Component} from 'react';
import {SafeAreaView, Image, Text, TextInput, Button, StyleSheet, View, KeyboardAvoidingView, Alert} from 'react-native';

const img = require('../assets/TodoList.png');

export default class Login extends Component {

    constructor (props){
        super(props);

        this.state = {
            email: props.email,
            password = ''
        }
    }

    render () {
        return (
            <KeyboardAvoidingView style={styles.corpo} behavior='padding' >
                <SafeAreaView style={styles.corpo}>
                    <View style={styles.imagemView}>
                        <Image source={img} style={styles.imagem}/>
                    </View>
                    <View style={styles.campos}>
                        <TextInput  placeholder='Email' 
                                    value={this.state.email}
                                    keyboardType={'email-address'} 
                                    onChangeText={(text) => this.setState({email:text})} />
                        <TextInput  placeholder='Password' 
                                    secureTextEntry={true} 
                                    onChangeText={(text) => this.setState({senha:text})}/>
                        <Button title='Sign In' onPress={() => {Alert.alert('EMAIL: '+this.state.email+'SENHA: '+this.state.senha)} }/>
                        <View style={styles.texto}>
                            <Text>Not a member: Let's Register</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    corpo: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    },
    imagem: {
        width: 250,
        height: 250
    },
    imagemView: {
        alignItems: 'center'
    },  
    campos: {
        flex: 1,
        flexDirection: 'column'
    },
    texto: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    }
})
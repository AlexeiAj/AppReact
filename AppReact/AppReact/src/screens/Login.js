import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TextInput,
    Button,
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Login extends Component {

    constructor() {
        super();
    }

    logar() {
        const uri = "http://alexeiaj.duckdns.org:8800/logar";
        
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                usuario: this.state.usuario,
                senha: this.state.senha,
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }

        fetch(uri, requestInfo)
            .then(response => {
                if(response.ok) return response.text();
                throw new Error("Não foi possível efetuar login.");
            })
            .then(token => console.warn(token))
            .catch(error => console.warn(error));
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Usuário.." autoCapitalize="none" onChangeText={texto => this.setState({usuario: texto})}/>
                    <TextInput style={styles.input} placeholder="Senha.." autoCapitalize="none" secureTextEntry={true} onChangeText={texto => this.setState({senha: texto})}/>
                    <Button title="Login" onPress={this.logar.bind(this)}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: width * 0.8,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
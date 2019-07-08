import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.post,
            conteudo: JSON.parse(this.props.post.post_conteudo)
        }
    }

    render() {
        const post = this.state.post;
        const conteudo = this.state.conteudo;
        const url = this.props.url;

        return (
            <View>
                <Text style={styles.titulo}>{post.post_titulo}</Text>
                <Image source={{uri: url+conteudo.imagem}} style={styles.foto}/>
                <View style={styles.info}>
                        <Text styles={styles.data}>{post.post_data}</Text>
                        <Text styles={styles.data}>{post.post_categoria}</Text>
                </View>
                <Text style={styles.texto}>{conteudo.texto}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 40,
        margin: 5,
    },
    foto: {
        width: width,
        height: width,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '30%',
        fontSize: 10,
    },
    data: {
        margin: 20,
    },
    texto: {
        margin: 5,
        fontSize: 20,
    },
});
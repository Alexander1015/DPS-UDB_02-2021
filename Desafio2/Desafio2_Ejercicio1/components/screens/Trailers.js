import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const PeliculaScreen = ({ route, navigation }) => {
    const { titulo, video } = route.params;

    return(
        <>
            <View style={styles.contenedor}>
                <Text style={ styles.titulo }>{ titulo }</Text>
                <View>
                    <YoutubePlayer
                        height={ 500 }
                        width={ Dimensions.get('window').width }
                        play={ true }
                        videoId={ video }
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#000000'
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2C3E50',
        textAlign: 'justify',
        marginVertical: 15,
        color: '#FFFFFF',
    },
});

export default PeliculaScreen;
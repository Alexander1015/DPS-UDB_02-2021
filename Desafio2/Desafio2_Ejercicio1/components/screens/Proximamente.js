import React from "react";
import { StyleSheet, View, Image, ScrollView, Text, Dimensions } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import YoutubePlayer from "react-native-youtube-iframe";
import Proximamente from "../../src/Proximamentes";

const ProximamenteScreen = () => {
    return(
        <>
            <ScrollView vertical>
                <View style={styles.contenedor}>
                    <View>
                        <Image
                            style={styles.portada}
                            resizeMode="cover"
                            source={ require("../../src/img/proximamente/portada_proxi.jpg") }
                        />
                    </View>
                        <View style={styles.conjunto}>
                            <Text style={styles.titulo}>
                                Proximos Estrenos <FontAwesome5
                                    name={ "angle-double-down" }  
                                    size={22}
                                />
                            </Text>
                            <View>
                                {
                                    Proximamente.map((prox, i) => {
                                        return(
                                            <View 
                                                key={i}
                                                style={ styles.conjunto }
                                            >
                                                <View>
                                                    <YoutubePlayer
                                                        height={ 200 }
                                                        width={ Dimensions.get('window').width - 40 }
                                                        play={ false }
                                                        videoId={ prox.trailer }
                                                    />
                                                </View>
                                                <View>
                                                    <Text>
                                                        <Text style={ styles.name }>Titulo: </Text><Text style={ styles.sub }>{ prox.titulo }</Text>
                                                    </Text>
                                                    <Text>
                                                        <Text style={ styles.name }>Tipo: </Text><Text style={ styles.sub }>{ prox.tipo }</Text>
                                                    </Text>
                                                    <Text>
                                                        <Text style={ styles.name }>Fecha de Estreno: </Text><Text style={ styles.sub }>{ prox.estreno }</Text>
                                                    </Text>
                                                    <Text style={ styles.name }>Sinopsis: </Text>
                                                    <Text style={ styles.sub }>{ prox.descripcion }</Text>
                                                </View>
                                            </View>
                                        );
                                    })
                                }
                            </View>
                        </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    conjunto: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    portada: {
        width: Dimensions.get('window').width,
        height: 200,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2C3E50',
        textAlign: 'justify',
        marginTop: 10,
    },
    img: {
        width: 150,
        height: 150,
    },
    name: {
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },
    sub: {
        fontSize: 18,
        fontStyle: 'italic',
        borderBottomWidth: 1,
        borderBottomColor: '#2C3E50',
        paddingBottom: 5,
    },
    datos: {
        maxWidth: '50%',
        paddingRight: 10,
    }
});

export default ProximamenteScreen;
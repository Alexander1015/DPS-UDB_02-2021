import React from "react";
import { StyleSheet, View, Image, ScrollView, Text, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import Peliculas from "../../src/Peliculas";

const PeliculaScreen = (route) => {
    const { navigation } = route;
    return(
        <>
            <ScrollView vertical>
                <View style={styles.contenedor}>
                    <View>
                        <Image
                            style={styles.portada}
                            resizeMode="cover"
                            source={ require("../../src/img/peliculas/portada_peli.jpg") }
                        />
                    </View>
                    {
                        Peliculas.map((data, i) => {
                            return(
                                <View key={i} style={styles.conjunto}>
                                    <Text style={styles.titulo}>
                                        { data.tipo } <FontAwesome5
                                            name={ "angle-double-right" }  
                                            size={22}
                                        />
                                    </Text>
                                    <View style={styles.horizontal}>
                                        <ScrollView horizontal>
                                            {
                                                data.data.map((movie, j) => {
                                                    return(
                                                        <TouchableOpacity
                                                            key={j}
                                                            onPress={() => navigation.navigate(
                                                                "trailer",
                                                                {
                                                                    titulo: movie.titulo,
                                                                    video: movie.trailer
                                                                }
                                                            )}
                                                        >
                                                            <View>
                                                                <Image
                                                                    style={styles.img}
                                                                    resizeMode="contain"
                                                                    source={ movie.img }
                                                                />
                                                            </View>
                                                        </TouchableOpacity>
                                                    );
                                                })
                                            }
                                        </ScrollView>
                                    </View>
                                </View>
                            );
                        })
                    }
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
        marginBottom: 10,
    },
    horizontal: {
        flexDirection: 'row',
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
        marginVertical: 10,
    },
    img: {
        marginHorizontal: 10,
        width: 200,
        height: 200,
    }
});

export default PeliculaScreen;
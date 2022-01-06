import React from "react";
import { StyleSheet, View, Image, ScrollView, Text, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import Series from "../../src/Series";
import { Card } from "react-native-elements";

const SerieScreen = (route) => {
    const { navigation } = route;
    return(
        <>
            <ScrollView vertical>
                <View style={styles.contenedor}>
                    <View>
                        <Image
                            style={styles.portada}
                            resizeMode="cover"
                            source={ require("../../src/img/series/portada_serie.jpg") }
                        />
                    </View>
                    {
                        Series.map((data, i) => {
                            return(
                                <View key={i} style={styles.conjunto}>
                                    <Text style={styles.titulo}>
                                        { data.tipo } <FontAwesome5
                                            name={ "angle-double-down" }  
                                            size={22}
                                        />
                                    </Text>
                                    <View>
                                        <Card>
                                            {
                                                data.data.map((serie, j) => {
                                                    return(
                                                        <TouchableOpacity
                                                            key={j}
                                                            onPress={() => navigation.navigate(
                                                                "trailer",
                                                                {
                                                                    titulo: serie.titulo,
                                                                    video: serie.trailer
                                                                }
                                                            )}
                                                            style={styles.borde}
                                                        >
                                                            <View style={styles.horizontal}>
                                                                <Image
                                                                    style={styles.img}
                                                                    resizeMode="contain"
                                                                    source={ serie.img }
                                                                />
                                                                <View style={styles.datos}>
                                                                    <Text style={styles.name}>{ serie.titulo }</Text>
                                                                    <Text style={styles.temporada}>
                                                                        { serie.temporadas } Temporada/s
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>
                                                    );
                                                })
                                            }
                                        </Card>
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
        maxWidth: '100%',
        paddingVertical: 10,
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
        fontSize: 20,
        fontWeight: 'bold',

    },
    temporada: {
        fontSize: 15,
        marginVertical: 10,
        fontStyle: 'italic',
    },
    datos: {
        maxWidth: '50%',
        paddingRight: 10,
    },
    borde: {
        paddingBottom: 5,
        borderBottomColor: '#2C3E50',
        borderBottomWidth: 1,
    }
});

export default SerieScreen;
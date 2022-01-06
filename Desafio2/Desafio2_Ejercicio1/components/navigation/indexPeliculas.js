import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Peliculas from "../screens/Peliculas";
import Trailer from "../screens/Trailers";

const Stack = createStackNavigator();

const PeliculaScreen = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="peliculas" component={Peliculas}  options={{ title: 'Peliculas' }} />
            <Stack.Screen name="trailer" component={Trailer}  options={{ title: 'Trailer' }} />
        </Stack.Navigator>
    );
}

export default PeliculaScreen;
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Proximamentes from "../screens/Proximamente";
import Trailer from "../screens/Trailers";

const Stack = createStackNavigator();

const SerieScreen = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="proximamente" component={Proximamentes}  options={{ title: 'Proximamente' }} />
        </Stack.Navigator>
    );
}

export default SerieScreen;
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Series from "../screens/Series";
import Trailer from "../screens/Trailers";

const Stack = createStackNavigator();

const SerieScreen = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="series" component={Series}  options={{ title: 'Series' }} />
            <Stack.Screen name="trailer" component={Trailer}  options={{ title: 'Trailer' }} />
        </Stack.Navigator>
    );
}

export default SerieScreen;